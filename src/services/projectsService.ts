export type Projeto = {
  id: string;
  titulo: string;
  descricao: string;
  imagem_url?: string;
  link?: string;
  criado_em: string;
  criado_por: string;
  linguagens: string[];
  categorias: string[];
};

const PROJECTS_DATA: Projeto[] = [
  {
    id: "075ce329-05e0-4aee-a321-d31a25ed721b",
    titulo: "Bestfy",
    descricao: "Desenvolvemos o site institucional da Bestfy BR, um gateway de pagamentos inovador que oferece automação financeira, segurança reforçada e taxas competitivas. O projeto destaca diferenciais como alta aprovação de transações, recuperação de chargebacks, checkout personalizado e suporte 24/7, além de integração fluida via API e saques em até 2 dias. A navegação é ágil e responsiva, refletindo a tecnologia avançada da Bestfy.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1751049906123_2u8ltpkm.png",
    link: "https://bestfybr.com.br/",
    criado_em: "2025-06-27T18:45:05.794696+00:00",
    criado_por: "d0c3433b-2d45-4ef3-9791-65238650ac4b",
    linguagens: ["Node.js", "Python", "React", "TypeScript"],
    categorias: ["Fintech"]
  },
  {
    id: "efde26d0-3328-48ba-952a-5d731e57040f",
    titulo: "Primu's Log",
    descricao: "Desenvolvemos o site institucional da Primus Log, uma empresa especializada em soluções logísticas e transporte rodoviário de cargas. O projeto foi pensado para oferecer uma navegação clara, moderna e responsiva, com foco em apresentar os serviços da empresa de forma objetiva e profissional.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1751049776683_wofxsn1u.png",
    link: "https://primuslog.com/",
    criado_em: "2025-06-27T18:42:56.702536+00:00",
    criado_por: "d0c3433b-2d45-4ef3-9791-65238650ac4b",
    linguagens: ["CSS", "HTML", "JavaScript"],
    categorias: ["Institucional"]
  },
  {
    id: "dd7d2c0b-d553-45c3-ba27-1fc73c01d0d5",
    titulo: "Edson Veículos",
    descricao: "Desenvolvemos o site institucional da Edson Veículos, concessionária localizada em Aracaju-SE, com o objetivo de oferecer uma vitrine digital moderna e acessível para sua frota de veículos seminovos e usados.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747271712699_b7p0i90e.png",
    link: "https://edsonveiculosaju.com.br/",
    criado_em: "2025-05-15T01:15:30.260659+00:00",
    criado_por: "2f88a192-2e88-494c-af17-c1bebfa5b44d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Showroom"]
  },
  {
    id: "251919a1-6d2a-4630-8415-4fd8f8792416",
    titulo: "CursoAI",
    descricao: "Desenvolvemos a plataforma CursoAI, um ambiente completo de aprendizagem voltado para pessoas que desejam aprender e se capacitar em inteligência artificial. O sistema foi criado para entregar uma experiência educacional moderna e acessível, com aulas gravadas, recursos visuais, materiais de apoio e certificados.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747271442499_wzyqzj4z.png",
    link: "https://cursoai.com.br/",
    criado_em: "2025-05-15T01:10:39.120781+00:00",
    criado_por: "2f88a192-2e88-494c-af17-c1bebfa5b44d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Plataforma de Cursos"]
  },
  {
    id: "419b2d4c-1590-46f8-9c02-1cac7a8cf131",
    titulo: "PagFlex",
    descricao: "A PagFlex é uma solução de gateway de pagamentos que oferece integração fácil com diversas plataformas, permitindo o processamento ágil de pagamentos via Pix e cartão de crédito.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747271140812_fonjb6m7.png",
    link: "https://pagflexbr.com.br/",
    criado_em: "2025-05-15T01:04:45.895211+00:00",
    criado_por: "2f88a192-2e88-494c-af17-c1bebfa5b44d",
    linguagens: ["JavaScript", "Node.js", "React", "TypeScript"],
    categorias: ["Fintech"]
  },
  {
    id: "adcb6624-0d09-4b9c-8456-59cd90096299",
    titulo: "Amgax Esg",
    descricao: "Site institucional com foco em consultoria ESG e soluções ambientais para empresas, apresentando serviços, diferenciais e contato.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747270781852_34natsud.png",
    link: "https://amgaxesg.com.br/",
    criado_em: "2025-05-15T00:59:59.554916+00:00",
    criado_por: "2f88a192-2e88-494c-af17-c1bebfa5b44d",
    linguagens: ["JavaScript", "Node.js", "React", "TypeScript"],
    categorias: ["Institucional"]
  },
  {
    id: "556e0bb5-99a3-4612-9fda-998bb9178809",
    titulo: "CyberGeoMap",
    descricao: "Plataforma de serviços em geointeligência para visualização e análise de dados geoespaciais.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747270691011_h9ebf830.png",
    link: "https://cybergeomap.com.br/",
    criado_em: "2025-05-15T00:58:28.977537+00:00",
    criado_por: "2f88a192-2e88-494c-af17-c1bebfa5b44d",
    linguagens: ["JavaScript", "Node.js", "React", "TypeScript"],
    categorias: ["Institucional"]
  },
  {
    id: "ec5347a4-293e-4e57-9096-876b7b6b7a5a",
    titulo: "Qark Mídia Digital",
    descricao: "Site institucional e comercial da agência de marketing Qark, com apresentação de serviços, formulário de contato e otimização para conversão.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747270542317_t0giv5uz.png",
    link: "https://qarkmidiadigital.com.br/",
    criado_em: "2025-05-15T00:55:59.572013+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["JavaScript", "Node.js", "React", "TypeScript"],
    categorias: ["Agência"]
  },
  {
    id: "553daab7-2d60-4e61-85b6-5c5bbc626fa7",
    titulo: "Old Farm Butchers",
    descricao: "Site institucional e loja virtual para açougue artesanal. Pode incluir catálogo de cortes, pedidos online e conteúdo sobre a origem da carne.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747256543816_z7sctjbz.svg",
    link: "https://oldfarmbutchers.com/",
    criado_em: "2025-05-14T21:02:37.634261+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript"],
    categorias: ["E-commerce"]
  },
  {
    id: "d25513d2-ce94-40e7-bb3e-cb627e36a849",
    titulo: "Espaço Infinity+",
    descricao: "Site institucional para espaço de estética ou terapias. Foco em apresentação de serviços, agendamento e presença local.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747256467816_tnji300o.svg",
    link: "https://espacoinfinitymais.com.br/",
    criado_em: "2025-05-14T21:01:21.82939+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript"],
    categorias: ["Landing Page"]
  },
  {
    id: "fbf815a5-6c8e-426a-a444-00ba9360a8e7",
    titulo: "UnderChat",
    descricao: "Plataforma de chat online com proposta alternativa ou anônima. Pode envolver comunidade, troca de mensagens ou suporte.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747256423171_dz3r49dy.svg",
    link: "https://underchat.com.br/",
    criado_em: "2025-05-14T21:00:37.166451+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript"],
    categorias: ["SaaS"]
  },
  {
    id: "c5673238-7a14-4233-acfb-4a2fe5d3d41e",
    titulo: "Greater New York House Buyers",
    descricao: "Site de captação de leads imobiliários para compra rápida de casas nos EUA. Integração com formulários e páginas de conversão.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747256361200_kptl20kg.svg",
    link: "https://greaternewyorkhousebuyers.com/",
    criado_em: "2025-05-14T20:59:35.191536+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript"],
    categorias: ["Landing Page"]
  },
  {
    id: "17f40b74-71e5-4fcb-87de-9b33fdf29c84",
    titulo: "TI.Rio",
    descricao: "Portal institucional de empresa pública ou privada de tecnologia da informação localizada no Rio de Janeiro.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747256313680_e7f2sqiy.png",
    link: "https://www.ti.rio/",
    criado_em: "2025-05-14T20:58:47.564275+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Institucional"]
  },
  {
    id: "70060ec2-0b90-4b7d-b292-726ed57577c6",
    titulo: "Aizuryu",
    descricao: "E-commerce de cosméticos e produtos naturais. Layout moderno, intuitivo e otimizado para conversão.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747256248768_mzw72gu0.png",
    link: "https://aizuryu.com/",
    criado_em: "2025-05-14T20:57:43.009944+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["E-commerce"]
  },
  {
    id: "f8c7ad33-ee52-4fb5-970d-88cdb426fe25",
    titulo: "LifeBox Detox",
    descricao: "Página de vendas de produto detox, com VSL, prova social, checkout e ofertas escalonadas.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747256195472_xsu3op1y.svg",
    link: "https://lifeboxdetox.com/",
    criado_em: "2025-05-14T20:56:49.304455+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript"],
    categorias: ["Landing Page"]
  },
  {
    id: "1bc2a627-7a1a-4b46-baec-263ecb00d6f9",
    titulo: "I Hate Media Corporativo",
    descricao: "Portal B2B da I Hate Media com foco em apresentação institucional, parcerias e soluções para empresas.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747256107864_v2bsxd2t.svg",
    link: "https://corporativo.ihatemedia.com.br/",
    criado_em: "2025-05-14T20:55:21.914264+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["JavaScript", "Node.js", "React", "TypeScript"],
    categorias: ["Agência"]
  },
  {
    id: "c8fbe50f-aa2c-48ce-a8ea-3d89baa8cbc8",
    titulo: "I Hate Media",
    descricao: "Site institucional de agência criativa com portfólio, formulários e serviços de mídia e branding.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747256045640_6hptih4z.svg",
    link: "https://ihatemedia.co/",
    criado_em: "2025-05-14T20:54:19.506934+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["Node.js", "React", "TypeScript"],
    categorias: ["Agência"]
  },
  {
    id: "6e23e43c-dba8-4566-9d7e-6eff625d8b60",
    titulo: "Pagou.AI",
    descricao: "Plataforma financeira com soluções de pagamento digital. Site institucional com landing pages explicativas dos serviços.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747255935259_z9us04uz.svg",
    link: "https://pagou.ai/",
    criado_em: "2025-05-14T20:52:29.055408+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["Node.js", "React", "TypeScript"],
    categorias: ["Fintech"]
  },
  {
    id: "2886b64c-1538-400f-9e50-5fa11059c61a",
    titulo: "Sky Consórcios",
    descricao: "Criação de site institucional com foco em captação de leads para consórcios. Integração com formulários, WhatsApp e páginas de simulação.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747255875986_1nxf5fkx.webp",
    link: "https://skyconsorcios.com.br/",
    criado_em: "2025-05-14T20:51:29.993824+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "JavaScript", "Node.js", "React"],
    categorias: ["Institucional"]
  },
  {
    id: "55386fec-d753-43c8-9b6c-1ecec2d1f789",
    titulo: "KZ Beauty",
    descricao: "Loja virtual de cosméticos e beleza. Desenvolvimento de e-commerce com integração de meios de pagamento e vitrine responsiva.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747255743272_x4bc71wd.webp",
    link: "https://kzbeauty.com.br/",
    criado_em: "2025-05-14T20:49:17.227082+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Landing Page"]
  },
  {
    id: "9d7e5929-2f59-4001-ad8b-0729dfdf73cc",
    titulo: "MillsWork",
    descricao: "Site institucional moderno voltado para serviços de marcenaria e design de móveis sob medida.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747255649712_4syxbyec.svg",
    link: "https://millswork.co/",
    criado_em: "2025-05-14T20:47:44.065536+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "Node.js", "TypeScript"],
    categorias: ["Institucional"]
  },
  {
    id: "83a15018-e032-4e4a-941e-04a2efe72b29",
    titulo: "Princeton Aesthetics Academy",
    descricao: "Site para academia de estética nos EUA, com integração de agendamento, descrição de cursos e captura de leads.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747255559032_249bdqop.svg",
    link: "https://princetonaestheticsacademy.com/",
    criado_em: "2025-05-14T20:46:13.301768+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Institucional"]
  },
  {
    id: "769dd3f3-33df-4e48-a648-91b3199aba70",
    titulo: "Além do Match",
    descricao: "O Além do Match é uma plataforma completa de orientação de carreira, com foco em jovens em início de jornada profissional. O sistema integra funcionalidades como criação de currículos, testes vocacionais, acesso a vagas de emprego, cursos, assinatura digital e portfólio público.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747250572709_lyoh5ftx.png",
    link: "https://www.alemdomatch.com/",
    criado_em: "2025-05-14T19:23:06.804658+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "JavaScript", "Node.js", "Python", "React", "TypeScript"],
    categorias: ["Startups"]
  },
  {
    id: "948bfcc9-8c65-4852-afd2-313e93edd9c5",
    titulo: "EcoShield Floors",
    descricao: "Site institucional bilíngue para empresa de revestimentos sustentáveis. Criado com foco em catálogo de produtos e captação de leads comerciais.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747247383419_f4gd0lg1.svg",
    link: "https://ecoshieldfloors.com",
    criado_em: "2025-05-14T18:29:58.112075+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript"],
    categorias: ["Institucional"]
  },
  {
    id: "e294e219-6839-47fe-b283-2aa67aa7139d",
    titulo: "Comunidade ProDrop",
    descricao: "Plataforma de treinamento digital voltada ao ensino de dropshipping e e-commerce. Desenvolvimento de site com área de membros, páginas de venda e integração com sistemas de checkout.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747247204787_vczuu57p.webp",
    link: "https://comunidadeprodrop.com.br/",
    criado_em: "2025-05-14T18:26:59.253328+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Plataforma de Cursos"]
  },
  {
    id: "7a34fcf2-ef7c-478f-8810-11a29e1aa2d9",
    titulo: "WME Imóveis",
    descricao: "Desenvolvimento completo do site institucional da imobiliária, com foco em exibição de imóveis disponíveis para compra e locação. Criamos uma plataforma responsiva, integrada com sistemas de busca de imóveis, formulários de contato, e otimização básica para SEO.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747244731197_q5k140ss.webp",
    link: "https://wmeimoveis.com.br/",
    criado_em: "2025-05-14T17:45:46.221184+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Institucional"]
  },
  {
    id: "00be3968-c761-48aa-ad8b-080e55056595",
    titulo: "Gissel Joias",
    descricao: "Criação de loja virtual completa em e-commerce com vitrine de produtos, carrinho de compras, integração com meios de pagamento e logística. Também oferecemos suporte em branding visual e estruturação da jornada de compra.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747244581833_r6zj6oag.svg",
    link: "https://gisseljoias.com.br/",
    criado_em: "2025-05-14T17:43:16.697451+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["E-commerce"]
  },
  {
    id: "cf31063c-1301-48af-9a98-fefe97d94557",
    titulo: "Condado Matarazzo",
    descricao: "Desenvolvimento do site institucional da pousada, com integração de galeria de fotos, formulários de reserva e apresentação dos quartos e experiências. Design refinado para transmitir a proposta filosófica e premium do local.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747244466729_hwtk46wn.svg",
    link: "https://condadomatarazzo.com.br/",
    criado_em: "2025-05-14T17:41:21.406803+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Institucional"]
  },
  {
    id: "f212f432-3d13-4368-abb8-56217db99061",
    titulo: "Noronhei",
    descricao: "Construção de um site institucional com catálogo de serviços turísticos em Fernando de Noronha, incluindo passeios e experiências. Estrutura com foco em conversão e formulários de agendamento de serviços.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747244319009_dvv974b4.svg",
    link: "https://noronhei.com.br/",
    criado_em: "2025-05-14T17:38:53.860753+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Institucional"]
  },
  {
    id: "1cb3ca90-806b-44d9-956a-17f5c86a99ec",
    titulo: "APTMUS",
    descricao: "Criação de landing page com foco em geração de leads para a escola de música APTMUS. Utilizamos estrutura de alta conversão, formulários integrados com WhatsApp e visual otimizado para mobile.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747244129561_7mqn83tr.svg",
    link: "https://lp.aptmus.com.br/",
    criado_em: "2025-05-14T17:35:43.980315+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Landing Page"]
  },
  {
    id: "0cf3bba9-2b52-41b0-a0de-4aa8a963e277",
    titulo: "Buggy em Noronha",
    descricao: "Desenvolvimento de site para aluguel de veículos na ilha, com foco em exibição de frotas, tarifas e integração com contato via WhatsApp. Layout otimizado para dispositivos móveis.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747244020889_0qhzxlbr.svg",
    link: "https://buggyemnoronha.com.br/",
    criado_em: "2025-05-14T17:33:55.350891+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Institucional"]
  },
  {
    id: "a14430fe-ef6b-44d9-94ee-aecee417be43",
    titulo: "Lanchas em Noronha",
    descricao: " Criação de site para aluguel de lanchas e passeios exclusivos em Fernando de Noronha. O site apresenta pacotes, galeria visual e integração com canais de atendimento.",
    imagem_url: "https://nntghaeffkasveoquvxu.supabase.co/storage/v1/object/public/portfolio/1747243858954_780tfub9.svg",
    link: "https://lanchasemnoronha.com.br/",
    criado_em: "2025-05-14T17:31:13.759954+00:00",
    criado_por: "df6e1a6c-cb00-4d0c-b7c9-4b56ee94026d",
    linguagens: ["CSS", "HTML", "JavaScript", "PHP"],
    categorias: ["Institucional"]
  }
];

const CATEGORIES_DATA = [
  { id: "14edd519-7f1b-4e7b-ba14-72e899caac7e", nome: "Agência" },
  { id: "61d2efe9-84c9-4815-9fbc-114a285d3e9a", nome: "E-commerce" },
  { id: "6d4eb478-cefa-4e14-ac69-ae274f25dfe1", nome: "Fintech" },
  { id: "36c803d8-2dbe-48c2-8be7-234fcca4157b", nome: "Institucional" },
  { id: "91f3cebe-0cbb-4bcb-b3af-552759f25f87", nome: "Landing Page" },
  { id: "6597ae27-ac1a-4723-ae0c-ba89b0bcc941", nome: "Plataforma de Cursos" },
  { id: "e2a4dac7-4cb1-4427-9e62-4aefca7a02f4", nome: "SaaS" },
  { id: "88dbb88a-c9a1-4c82-8039-e73826526672", nome: "Showroom" },
  { id: "70cf73b0-b091-4a3b-a7e9-a078b0c6ceaa", nome: "Startups" }
];

export const projectsService = {
  async getAllProjects(): Promise<Projeto[]> {
    // Retorna os dados estáticos imediatamente
    return PROJECTS_DATA;
  },

  async getCategories() {
    // Retorna as categorias estáticas imediatamente
    return CATEGORIES_DATA;
  }
};
