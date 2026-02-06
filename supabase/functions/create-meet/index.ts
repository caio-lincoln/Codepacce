import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'jsr:@supabase/supabase-js@2'
import { google } from 'npm:googleapis@126'
import { JWT } from 'npm:google-auth-library@9'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, notes, date, time } = await req.json()

    // Validação básica
    if (!name || !email || !date || !time) {
      throw new Error('Campos obrigatórios faltando: name, email, date, time')
    }

    // Configuração do Supabase Client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Configuração do Google Calendar
    const serviceAccountStr = Deno.env.get('GOOGLE_SERVICE_ACCOUNT')
    if (!serviceAccountStr) {
      throw new Error('Configuração GOOGLE_SERVICE_ACCOUNT não encontrada')
    }
    
    const serviceAccount = JSON.parse(serviceAccountStr)
    
    const jwtClient = new JWT({
      email: serviceAccount.client_email,
      key: serviceAccount.private_key,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    })

    const calendar = google.calendar({ version: 'v3', auth: jwtClient })

    // Cálculo do horário de término (30 min de duração)
    const [hours, minutes] = time.split(':').map(Number)
    let endHours = hours
    let endMinutes = minutes + 30
    
    if (endMinutes >= 60) {
      endHours += 1
      endMinutes -= 60
    }

    const endTime = `${String(endHours).padStart(2, '0')}:${String(endMinutes).padStart(2, '0')}`

    // Criar evento
    const event = {
      summary: `Consultoria Codepacce - ${name}`,
      description: `Tópico: ${notes || 'Geral'}\n\nAgendado por: ${name} (${email})`,
      start: {
        dateTime: `${date}T${time}:00`,
        timeZone: 'America/Sao_Paulo',
      },
      end: {
        dateTime: `${date}T${endTime}:00`,
        timeZone: 'America/Sao_Paulo',
      },
      attendees: [
        { email: email },
        { email: 'codepacce@gmail.com' },
      ],
      conferenceData: {
        createRequest: {
          requestId: crypto.randomUUID(),
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    }

    const calendarResponse = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1,
    })

    const meetLink = calendarResponse.data.hangoutLink
    const eventId = calendarResponse.data.id

    // Salvar no Supabase
    const { error: dbError } = await supabase
      .from('meetings')
      .insert({
        name,
        email,
        notes,
        date,
        time,
        meet_link: meetLink,
        google_event_id: eventId,
      })

    if (dbError) throw dbError

    return new Response(
      JSON.stringify({ success: true, meetLink }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      },
    )

  } catch (error: unknown) {
    console.error(error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      },
    )
  }
})
