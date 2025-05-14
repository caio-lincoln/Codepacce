# Codepacce - Site Institucional

Este é o repositório do site institucional da Codepacce, uma empresa especializada em desenvolvimento de software sob medida.

## Configuração do Formulário de Contato

O formulário de contato utiliza o serviço EmailJS para enviar os dados diretamente para o email da empresa. Para configurar:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Crie um serviço de email (por exemplo, usando Gmail, Outlook, etc.)
3. Crie um template de email seguindo o modelo em `src/components/EmailTemplate.js`
4. Obtenha suas credenciais (Service ID, Template ID e Public Key)
5. Atualize as constantes no arquivo `src/pages/Contato.tsx`:

```javascript
const EMAILJS_SERVICE_ID = "seu_service_id"; 
const EMAILJS_TEMPLATE_ID = "seu_template_id"; 
const EMAILJS_PUBLIC_KEY = "sua_public_key"; 
```

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Lucide React (ícones)
- Chart.js
- EmailJS

## Estrutura do Projeto

- `/src/components` - Componentes reutilizáveis
- `/src/pages` - Páginas do site
- `/src/pages/legal` - Páginas de termos legais

## Executando o Projeto

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Visualizar build de produção
npm run preview
```

## Personalização

Para personalizar o site para suas necessidades:

1. Atualize as informações de contato em `src/components/Footer.tsx` e `src/pages/Contato.tsx`
2. Modifique os projetos em `src/pages/Projetos.tsx`
3. Atualize os serviços em `src/pages/Solucoes.tsx`
4. Personalize as cores e estilos em `src/index.css` e `tailwind.config.js`