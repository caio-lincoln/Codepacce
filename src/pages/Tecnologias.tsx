import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  Layout,
  Smartphone,
  Zap,
  Globe,
  Braces,
  Terminal,
  Box,
  GitBranch,
  Monitor,
  ArrowRight,
  Search,
  Filter,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

export function Tecnologias() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'devops', label: 'DevOps' },
    { id: 'database', label: 'Banco de Dados' },
    { id: 'tools', label: 'Ferramentas' },
  ];

  const levels = [
    { id: 'all', label: 'Todos os Níveis' },
    { id: 'advanced', label: 'Avançado' },
    { id: 'intermediate', label: 'Intermediário' },
    { id: 'basic', label: 'Básico' },
  ];

  const technologies = [
    // Frontend
    {
      name: "React",
      category: "frontend",
      level: "advanced",
      icon: Globe,
      description: "Biblioteca JavaScript para construção de interfaces de usuário interativas e reativas.",
      features: [
        "Componentes reutilizáveis",
        "Virtual DOM para performance otimizada",
        "Hooks para gerenciamento de estado",
        "Context API para compartilhamento de dados",
        "Server Components para renderização no servidor",
        "Suspense para carregamento assíncrono"
      ],
      useCases: [
        "Single Page Applications (SPAs)",
        "Dashboards interativos",
        "Aplicações web complexas",
        "Interfaces de usuário dinâmicas"
      ],
      projects: [
        "E-commerce Fashion Store",
        "Corporate Dashboard",
        "Educational Platform"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://react.dev" },
        { name: "React DevTools", url: "https://react.dev/learn/react-developer-tools" }
      ]
    },
    {
      name: "Next.js",
      category: "frontend",
      level: "advanced",
      icon: Zap,
      description: "Framework React para produção que oferece renderização híbrida, rotas API e otimização.",
      features: [
        "Server-Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "API Routes integradas",
        "Otimização de imagens automática",
        "Middleware para controle de requisições",
        "Edge Functions para computação na borda"
      ],
      useCases: [
        "Sites corporativos de alta performance",
        "E-commerce",
        "Aplicações com SEO otimizado",
        "Dashboards com dados em tempo real"
      ],
      projects: [
        "E-commerce Fashion Store",
        "Educational Platform",
        "Real Estate Platform"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://nextjs.org/docs" },
        { name: "Learn Next.js", url: "https://nextjs.org/learn" }
      ]
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: "advanced",
      icon: Braces,
      description: "Superset JavaScript que adiciona tipagem estática opcional e recursos avançados de linguagem.",
      features: [
        "Type Safety para prevenção de erros",
        "Suporte avançado em IDEs",
        "Recursos modernos do ECMAScript",
        "Decorators para metaprogramação",
        "Generics para código reutilizável",
        "Utility Types para manipulação de tipos"
      ],
      useCases: [
        "Aplicações empresariais de grande escala",
        "Projetos com múltiplos desenvolvedores",
        "Sistemas com lógica de negócios complexa",
        "Aplicações que requerem manutenção a longo prazo"
      ],
      projects: [
        "Corporate Dashboard",
        "Healthcare Management System",
        "SaaS Marketing Platform"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://www.typescriptlang.org/docs/" },
        { name: "TypeScript Playground", url: "https://www.typescriptlang.org/play" }
      ]
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: "advanced",
      icon: Monitor,
      description: "Framework CSS utility-first para criação rápida de interfaces personalizadas sem sair do HTML.",
      features: [
        "Abordagem utility-first para estilização",
        "Temas personalizáveis",
        "JIT Compiler para CSS otimizado",
        "Sistema de plugins extensível",
        "Suporte nativo para dark mode",
        "Integração com CSS-in-JS"
      ],
      useCases: [
        "Desenvolvimento rápido de interfaces",
        "Projetos com design system consistente",
        "Aplicações responsivas",
        "Prototipagem de UI"
      ],
      projects: [
        "E-commerce Fashion Store",
        "Fintech App",
        "Corporate Dashboard"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://tailwindcss.com/docs" },
        { name: "Tailwind UI", url: "https://tailwindui.com/" }
      ]
    },
    {
      name: "Vue.js",
      category: "frontend",
      level: "intermediate",
      icon: Layout,
      description: "Framework JavaScript progressivo para construção de interfaces de usuário e SPAs.",
      features: [
        "Sistema de componentes",
        "Reatividade bidirecional",
        "Diretivas personalizadas",
        "Composition API",
        "Transições e animações integradas",
        "Gerenciamento de estado com Vuex"
      ],
      useCases: [
        "Aplicações web interativas",
        "Dashboards administrativos",
        "Prototipagem rápida",
        "Integração progressiva em projetos existentes"
      ],
      projects: [
        "SaaS Marketing Platform"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://vuejs.org/guide/introduction.html" },
        { name: "Vue DevTools", url: "https://devtools.vuejs.org/" }
      ]
    },
    {
      name: "Angular",
      category: "frontend",
      level: "intermediate",
      icon: Globe,
      description: "Plataforma e framework para construção de aplicações web de página única e cliente-servidor.",
      features: [
        "Arquitetura baseada em componentes",
        "Injeção de dependência",
        "Formulários reativos",
        "RxJS para programação reativa",
        "Angular CLI para automação",
        "TypeScript nativo"
      ],
      useCases: [
        "Aplicações empresariais de grande escala",
        "Dashboards complexos",
        "Aplicações com arquitetura robusta",
        "Sistemas com múltiplos módulos"
      ],
      projects: [],
      resources: [
        { name: "Documentação Oficial", url: "https://angular.io/docs" },
        { name: "Angular CLI", url: "https://cli.angular.io/" }
      ]
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      level: "advanced",
      icon: Terminal,
      description: "Runtime JavaScript assíncrono orientado a eventos para construção de aplicações de rede escaláveis.",
      features: [
        "Event Loop para operações não-bloqueantes",
        "NPM para gerenciamento de pacotes",
        "Express.js para APIs e aplicações web",
        "Arquitetura de microserviços",
        "Streams para processamento de dados",
        "Workers para processamento paralelo"
      ],
      useCases: [
        "APIs RESTful",
        "Aplicações em tempo real",
        "Microserviços",
        "Ferramentas de linha de comando"
      ],
      projects: [
        "Delivery App",
        "Fintech App",
        "SaaS Marketing Platform"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://nodejs.org/en/docs/" },
        { name: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" }
      ]
    },
    {
      name: "Python",
      category: "backend",
      level: "advanced",
      icon: Code2,
      description: "Linguagem de programação de alto nível, interpretada e de propósito geral com foco em legibilidade.",
      features: [
        "Django para aplicações web full-stack",
        "FastAPI para APIs de alta performance",
        "Bibliotecas para ciência de dados",
        "Frameworks de machine learning",
        "Suporte a async/await",
        "Type hints para tipagem opcional"
      ],
      useCases: [
        "Desenvolvimento web",
        "Ciência de dados e análise",
        "Machine learning e IA",
        "Automação e scripts"
      ],
      projects: [
        "Supply Chain Management"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://docs.python.org/3/" },
        { name: "Python Package Index", url: "https://pypi.org/" }
      ]
    },
    {
      name: "Java",
      category: "backend",
      level: "advanced",
      icon: Box,
      description: "Linguagem de programação orientada a objetos, de propósito geral e de alto nível.",
      features: [
        "Spring Boot para aplicações web",
        "Hibernate para ORM",
        "Arquitetura de microserviços",
        "Recursos avançados de segurança",
        "JPA para persistência de dados",
        "Maven para gerenciamento de dependências"
      ],
      useCases: [
        "Aplicações empresariais",
        "Sistemas bancários e financeiros",
        "Aplicações de alta disponibilidade",
        "Sistemas distribuídos"
      ],
      projects: [
        "Healthcare Management System"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://docs.oracle.com/en/java/" },
        { name: "Spring Documentation", url: "https://spring.io/guides" }
      ]
    },
    {
      name: "Go",
      category: "backend",
      level: "intermediate",
      icon: GitBranch,
      description: "Linguagem de programação compilada, concorrente e estaticamente tipada desenvolvida pelo Google.",
      features: [
        "Goroutines para concorrência leve",
        "Channels para comunicação entre goroutines",
        "Servidor HTTP nativo",
        "Ferramentas de teste integradas",
        "Cross-compilação para múltiplas plataformas",
        "Performance próxima a C/C++"
      ],
      useCases: [
        "Microserviços",
        "Ferramentas de linha de comando",
        "Aplicações de rede",
        "Sistemas distribuídos"
      ],
      projects: [],
      resources: [
        { name: "Documentação Oficial", url: "https://golang.org/doc/" },
        { name: "Go by Example", url: "https://gobyexample.com/" }
      ]
    },

    // Mobile
    {
      name: "React Native",
      category: "mobile",
      level: "advanced",
      icon: Smartphone,
      description: "Framework para desenvolvimento de aplicativos móveis nativos usando React e JavaScript.",
      features: [
        "Componentes nativos",
        "Hot Reload para desenvolvimento rápido",
        "Acesso a APIs nativas",
        "Performance otimizada",
        "Expo para desenvolvimento simplificado",
        "Compartilhamento de código com web"
      ],
      useCases: [
        "Aplicativos multiplataforma (iOS e Android)",
        "MVPs e protótipos",
        "Aplicativos empresariais",
        "Aplicativos com UI complexa"
      ],
      projects: [
        "Delivery App",
        "Fintech App"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://reactnative.dev/docs/getting-started" },
        { name: "Expo Documentation", url: "https://docs.expo.dev/" }
      ]
    },
    {
      name: "Flutter",
      category: "mobile",
      level: "advanced",
      icon: Smartphone,
      description: "SDK da Google para criação de aplicativos nativos para mobile, web e desktop a partir de um único código base.",
      features: [
        "Widgets personalizáveis",
        "Hot Reload para desenvolvimento rápido",
        "Performance nativa",
        "Animações fluidas",
        "Material Design e Cupertino integrados",
        "Gerenciamento de estado flexível"
      ],
      useCases: [
        "Aplicativos multiplataforma",
        "Aplicativos com UI complexa",
        "MVPs e protótipos",
        "Aplicativos que exigem alta performance"
      ],
      projects: [],
      resources: [
        { name: "Documentação Oficial", url: "https://flutter.dev/docs" },
        { name: "Flutter Pub", url: "https://pub.dev/" }
      ]
    },
    {
      name: "Swift",
      category: "mobile",
      level: "intermediate",
      icon: Terminal,
      description: "Linguagem de programação poderosa e intuitiva para iOS, macOS, watchOS e tvOS.",
      features: [
        "UIKit para interfaces tradicionais",
        "SwiftUI para interfaces declarativas",
        "Core Data para persistência",
        "Combine para programação reativa",
        "Concorrência estruturada",
        "Gerenciamento automático de memória"
      ],
      useCases: [
        "Aplicativos iOS nativos",
        "Aplicativos macOS",
        "Aplicativos que exigem alta performance",
        "Integração profunda com ecossistema Apple"
      ],
      projects: [],
      resources: [
        { name: "Documentação Oficial", url: "https://developer.apple.com/swift/" },
        { name: "Swift.org", url: "https://swift.org/" }
      ]
    },
    {
      name: "Kotlin",
      category: "mobile",
      level: "intermediate",
      icon: Code2,
      description: "Linguagem de programação moderna, concisa e segura para desenvolvimento Android e multiplataforma.",
      features: [
        "Android SDK para desenvolvimento nativo",
        "Jetpack Compose para UI declarativa",
        "Coroutines para programação assíncrona",
        "Flow para streams de dados",
        "Room para persistência",
        "Navigation para gerenciamento de rotas"
      ],
      useCases: [
        "Aplicativos Android nativos",
        "Aplicativos multiplataforma com Kotlin Multiplatform",
        "Aplicativos empresariais",
        "Aplicativos que exigem alta performance"
      ],
      projects: [],
      resources: [
        { name: "Documentação Oficial", url: "https://kotlinlang.org/docs/" },
        { name: "Android Developers", url: "https://developer.android.com/kotlin" }
      ]
    },

    // DevOps
    {
      name: "Docker",
      category: "devops",
      level: "advanced",
      icon: Box,
      description: "Plataforma para desenvolvimento, envio e execução de aplicações em contêineres isolados.",
      features: [
        "Contêineres leves e portáteis",
        "Docker Compose para orquestração local",
        "Redes virtuais para comunicação entre contêineres",
        "Volumes para persistência de dados",
        "Segurança e isolamento",
        "Docker Registry para armazenamento de imagens"
      ],
      useCases: [
        "Ambientes de desenvolvimento consistentes",
        "Implantação de microserviços",
        "CI/CD pipelines",
        "Isolamento de aplicações"
      ],
      projects: [
        "E-commerce Fashion Store",
        "SaaS Marketing Platform",
        "Healthcare Management System"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://docs.docker.com/" },
        { name: "Docker Hub", url: "https://hub.docker.com/" }
      ]
    },
    {
      name: "Kubernetes",
      category: "devops",
      level: "advanced",
      icon: Cloud,
      description: "Sistema de orquestração de contêineres para automação de implantação, escalonamento e gerenciamento.",
      features: [
        "Clustering de nós",
        "Auto-scaling horizontal e vertical",
        "Balanceamento de carga integrado",
        "Self-healing para recuperação automática",
        "Service Mesh para comunicação entre serviços",
        "Helm para gerenciamento de pacotes"
      ],
      useCases: [
        "Orquestração de microserviços",
        "Aplicações de alta disponibilidade",
        "Sistemas distribuídos",
        "Ambientes multi-cloud"
      ],
      projects: [
        "Supply Chain Management",
        "SaaS Marketing Platform"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://kubernetes.io/docs/home/" },
        { name: "Kubernetes Playground", url: "https://labs.play-with-k8s.com/" }
      ]
    },
    {
      name: "AWS",
      category: "devops",
      level: "advanced",
      icon: Cloud,
      description: "Plataforma de serviços em nuvem mais abrangente e amplamente adotada do mundo.",
      features: [
        "EC2 para computação virtual",
        "S3 para armazenamento de objetos",
        "Lambda para computação serverless",
        "RDS para bancos de dados relacionais",
        "CloudFront para CDN",
        "EKS para Kubernetes gerenciado"
      ],
      useCases: [
        "Hospedagem de aplicações web",
        "Armazenamento e backup",
        "Processamento de big data",
        "Arquiteturas serverless"
      ],
      projects: [
        "E-commerce Fashion Store",
        "Fintech App",
        "IoT Smart Home System"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://docs.aws.amazon.com/" },
        { name: "AWS Well-Architected", url: "https://aws.amazon.com/architecture/well-architected/" }
      ]
    },
    {
      name: "CI/CD",
      category: "devops",
      level: "advanced",
      icon: GitBranch,
      description: "Práticas de integração e entrega contínuas para automação do ciclo de vida de desenvolvimento.",
      features: [
        "GitHub Actions para automação baseada em eventos",
        "Jenkins para pipelines personalizáveis",
        "GitLab CI para integração com GitLab",
        "ArgoCD para entrega contínua em Kubernetes",
        "Testes automatizados",
        "Monitoramento e observabilidade"
      ],
      useCases: [
        "Automação de build e deploy",
        "Garantia de qualidade contínua",
        "Entrega rápida e confiável",
        "DevOps e GitOps"
      ],
      projects: [
        "Corporate Dashboard",
        "SaaS Marketing Platform",
        "Healthcare Management System"
      ],
      resources: [
        { name: "GitHub Actions", url: "https://docs.github.com/en/actions" },
        { name: "Jenkins Documentation", url: "https://www.jenkins.io/doc/" }
      ]
    },

    // Database
    {
      name: "PostgreSQL",
      category: "database",
      level: "advanced",
      icon: Database,
      description: "Sistema de gerenciamento de banco de dados relacional de código aberto e altamente extensível.",
      features: [
        "Conformidade ACID",
        "Suporte avançado a JSON",
        "Extensões para funcionalidades adicionais",
        "Replicação para alta disponibilidade",
        "Particionamento de tabelas",
        "Índices avançados (GIN, GiST, SP-GiST, BRiN)"
      ],
      useCases: [
        "Aplicações empresariais",
        "Sistemas com dados complexos",
        "Aplicações geoespaciais",
        "Sistemas que exigem integridade de dados"
      ],
      projects: [
        "E-commerce Fashion Store",
        "Healthcare Management System",
        "Real Estate Platform"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://www.postgresql.org/docs/" },
        { name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" }
      ]
    },
    {
      name: "MongoDB",
      category: "database",
      level: "advanced",
      icon: Database,
      description: "Banco de dados NoSQL orientado a documentos, projetado para armazenar dados em formato JSON-like.",
      features: [
        "Modelo de dados flexível baseado em documentos",
        "Consultas ricas e expressivas",
        "Índices para performance otimizada",
        "Replicação para alta disponibilidade",
        "Sharding para escalabilidade horizontal",
        "Transações ACID multi-documento"
      ],
      useCases: [
        "Aplicações com dados semi-estruturados",
        "Desenvolvimento ágil",
        "Aplicações de conteúdo",
        "Sistemas de catálogo"
      ],
      projects: [
        "Delivery App",
        "IoT Smart Home System"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://docs.mongodb.com/" },
        { name: "MongoDB University", url: "https://university.mongodb.com/" }
      ]
    },
    {
      name: "Redis",
      category: "database",
      level: "advanced",
      icon: Database,
      description: "Armazenamento de estrutura de dados em memória, usado como banco de dados, cache e message broker.",
      features: [
        "Operações atômicas em estruturas de dados",
        "Persistência para durabilidade",
        "Replicação para alta disponibilidade",
        "Clustering com Redis Cluster",
        "Pub/Sub para mensageria",
        "Scripting com Lua"
      ],
      useCases: [
        "Caching",
        "Sessões de usuário",
        "Filas de mensagens",
        "Contadores e rate limiting"
      ],
      projects: [
        "E-commerce Fashion Store",
        "Fintech App",
        "SaaS Marketing Platform"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://redis.io/documentation" },
        { name: "Redis University", url: "https://university.redis.com/" }
      ]
    },
    {
      name: "MySQL",
      category: "database",
      level: "advanced",
      icon: Database,
      description: "Sistema de gerenciamento de banco de dados relacional de código aberto mais popular do mundo.",
      features: [
        "Conformidade ACID",
        "Replicação para alta disponibilidade",
        "Particionamento para escalabilidade",
        "Stored procedures e triggers",
        "Transações e bloqueio em nível de linha",
        "Suporte a JSON"
      ],
      useCases: [
        "Aplicações web",
        "E-commerce",
        "Sistemas de gerenciamento de conteúdo",
        "Aplicações OLTP"
      ],
      projects: [
        "Educational Platform"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://dev.mysql.com/doc/" },
        { name: "MySQL Tutorial", url: "https://www.mysqltutorial.org/" }
      ]
    },

    // Tools
    {
      name: "Git",
      category: "tools",
      level: "advanced",
      icon: GitBranch,
      description: "Sistema de controle de versão distribuído para rastreamento de alterações em código-fonte.",
      features: [
        "Branching e merging eficientes",
        "Histórico completo de alterações",
        "Trabalho offline",
        "Integridade criptográfica",
        "Fluxos de trabalho flexíveis",
        "Integração com plataformas como GitHub e GitLab"
      ],
      useCases: [
        "Controle de versão de código",
        "Colaboração em equipe",
        "Rastreamento de alterações",
        "Integração com CI/CD"
      ],
      projects: [
        "Todos os projetos"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://git-scm.com/doc" },
        { name: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" }
      ]
    },
    {
      name: "VS Code",
      category: "tools",
      level: "advanced",
      icon: Code2,
      description: "Editor de código-fonte leve mas poderoso, disponível para Windows, macOS e Linux.",
      features: [
        "IntelliSense para autocompletar inteligente",
        "Debugging integrado",
        "Controle de versão Git integrado",
        "Extensões para personalização",
        "Terminal integrado",
        "Live Share para colaboração em tempo real"
      ],
      useCases: [
        "Desenvolvimento de software",
        "Edição de código",
        "Debugging",
        "Integração com ferramentas de desenvolvimento"
      ],
      projects: [
        "Todos os projetos"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://code.visualstudio.com/docs" },
        { name: "VS Code Extensions", url: "https://marketplace.visualstudio.com/vscode" }
      ]
    },
    {
      name: "Webpack",
      category: "tools",
      level: "advanced",
      icon: Box,
      description: "Empacotador de módulos JavaScript que processa aplicações web e gera um pacote de saída otimizado.",
      features: [
        "Bundling de módulos",
        "Code splitting para carregamento sob demanda",
        "Hot Module Replacement",
        "Loaders para processamento de arquivos",
        "Plugins para tarefas de build",
        "Tree shaking para eliminação de código não utilizado"
      ],
      useCases: [
        "Bundling de aplicações JavaScript",
        "Otimização de assets",
        "Gerenciamento de dependências",
        "Desenvolvimento com hot reloading"
      ],
      projects: [
        "E-commerce Fashion Store",
        "Corporate Dashboard",
        "SaaS Marketing Platform"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://webpack.js.org/concepts/" },
        { name: "Webpack Guides", url: "https://webpack.js.org/guides/" }
      ]
    },
    {
      name: "Jest",
      category: "tools",
      level: "advanced",
      icon: CheckCircle,
      description: "Framework de teste JavaScript com foco na simplicidade, que funciona com projetos usando Babel, TypeScript, Node.js, React, Angular, Vue.js e mais.",
      features: [
        "Testes unitários e de integração",
        "Mocking simplificado",
        "Snapshot testing",
        "Cobertura de código",
        "Watch mode para desenvolvimento",
        "Paralelização de testes"
      ],
      useCases: [
        "Testes unitários",
        "Testes de integração",
        "Testes de componentes React",
        "Testes de APIs"
      ],
      projects: [
        "E-commerce Fashion Store",
        "Fintech App",
        "Corporate Dashboard"
      ],
      resources: [
        { name: "Documentação Oficial", url: "https://jestjs.io/docs/getting-started" },
        { name: "Jest Cheat Sheet", url: "https://github.com/sapegin/jest-cheat-sheet" }
      ]
    }
  ];

  // Filter technologies based on search, category and level
  const filteredTechnologies = technologies.filter(tech => {
    const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tech.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || tech.category === activeCategory;
    const matchesLevel = activeLevel === 'all' || tech.level === activeLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const toggleTechDetails = (techName: string) => {
    if (expandedTech === techName) {
      setExpandedTech(null);
    } else {
      setExpandedTech(techName);
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'advanced': return 'Avançado';
      case 'intermediate': return 'Intermediário';
      case 'basic': return 'Básico';
      default: return level;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'frontend': return 'Frontend';
      case 'backend': return 'Backend';
      case 'mobile': return 'Mobile';
      case 'devops': return 'DevOps';
      case 'database': return 'Banco de Dados';
      case 'tools': return 'Ferramentas';
      default: return category;
    }
  };

  return (
    <div className="pt-32 pb-20 overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.svg')] opacity-[0.03]" />
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 mb-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-6 backdrop-blur-sm tracking-wide">
              Nossa Expertise
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight text-white">
              Stack <span className="text-blue-500">Tecnológico</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Dominamos um amplo conjunto de tecnologias modernas e robustas para desenvolver soluções completas e escaláveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="container mx-auto px-4 mb-12 relative z-10">
        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search */}
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar tecnologias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all text-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all appearance-none text-white cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-gray-900 text-white">
                      {category.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Level Filter */}
            <div className="w-full md:w-64">
              <div className="relative">
                <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all appearance-none text-white cursor-pointer"
                >
                  {levels.map(level => (
                    <option key={level.id} value={level.id} className="bg-gray-900 text-white">
                      {level.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies List */}
      <section className="container mx-auto px-4 mb-20 relative z-10">
        {filteredTechnologies.length > 0 ? (
          <div className="space-y-4">
            <AnimatePresence>
              {filteredTechnologies.map((tech) => (
                <motion.div 
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-xl backdrop-blur-sm border transition-all duration-300 overflow-hidden ${
                    expandedTech === tech.name 
                      ? 'bg-white/10 border-blue-500/30 shadow-lg shadow-blue-500/5' 
                      : 'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                  }`}
                >
                  {/* Tech Header */}
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleTechDetails(tech.name)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          expandedTech === tech.name ? 'bg-blue-500 text-white' : 'bg-white/10 text-blue-400'
                        }`}>
                          <tech.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-display text-white">{tech.name}</h3>
                          <p className="text-gray-400 text-sm hidden md:block">{tech.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between md:justify-end gap-4 pl-16 md:pl-0">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-500 text-sm font-medium">{getCategoryLabel(tech.category)}</span>
                          <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            tech.level === 'advanced' 
                              ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                              : tech.level === 'intermediate'
                                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                : 'bg-white/5 text-gray-400 border-white/10'
                          }`}>
                            {getLevelLabel(tech.level)}
                          </span>
                        </div>
                        {expandedTech === tech.name ? (
                          <ChevronUp className="w-5 h-5 text-blue-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-4 md:hidden pl-16">{tech.description}</p>
                  </div>

                  {/* Tech Details */}
                  <AnimatePresence>
                    {expandedTech === tech.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 pl-4 md:pl-20 border-t border-white/5 mt-2">
                          <div className="grid md:grid-cols-2 gap-8 pt-6">
                            {/* Features */}
                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-500" />
                                <span>Recursos</span>
                              </h4>
                              <ul className="grid gap-2">
                                {tech.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Use Cases */}
                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4 text-blue-500" />
                                <span>Casos de Uso</span>
                              </h4>
                              <ul className="grid gap-2">
                                {tech.useCases.map((useCase, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>{useCase}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Projects and Resources */}
                          <div className="grid md:grid-cols-2 gap-8 mt-8 pt-6 border-t border-white/5">
                            {/* Projects */}
                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                                <Code2 className="w-4 h-4 text-blue-500" />
                                <span>Projetos Relacionados</span>
                              </h4>
                              {tech.projects.length > 0 ? (
                                <ul className="grid gap-2">
                                  {tech.projects.map((project, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                      <span>{project}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-500 text-sm italic">Disponível para novos projetos.</p>
                              )}
                            </div>

                            {/* Resources */}
                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                                <ExternalLink className="w-4 h-4 text-blue-500" />
                                <span>Documentação & Recursos</span>
                              </h4>
                              <ul className="flex flex-wrap gap-3">
                                {tech.resources.map((resource, idx) => (
                                  <li key={idx}>
                                    <a 
                                      href={resource.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-xs text-blue-400 hover:text-blue-300 transition-all"
                                    >
                                      <span>{resource.name}</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-display text-white">Nenhuma tecnologia encontrada</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Não encontramos tecnologias correspondentes aos seus filtros. Tente limpar os filtros ou buscar por outro termo.
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); setActiveLevel('all'); }}
              className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 relative z-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 to-black p-12 rounded-3xl backdrop-blur-md border border-white/10 text-center group">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-white">Pronto para começar seu projeto?</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Nossa equipe de especialistas domina essas tecnologias para entregar a melhor solução para o seu negócio.
            </p>
            <Link 
              to="/contato" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}