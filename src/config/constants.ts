// Social media links
export const SOCIAL_LINKS = {
  github: "https://github.com/wgutto",
  linkedin: "https://www.linkedin.com/in/wgutto/",
  instagram: "https://www.instagram.com/wgutto",
  twitter: "https://x.com/wguttoo",
  email: "augusstobrito@gmail.com",
  whatsapp: "https://wa.me/5588996087187?text=Olá%20Augusto,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
} as const;

// Navigation items
export const NAV_ITEMS = [
  { name: "Sobre", link: "#about" },
  { name: "Habilidades", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Certificações", link: "#certifications" },
  { name: "Contato", link: "#contact" }
] as const;

// Projects data
export const PROJECTS = [
  {
    id: "brito-pizzaria",
    title: "Brito Pizzaria",
    image: "/mockups/mockup-brito-pizzaria.png",
    description:
      "Sistema web de gerenciamento de pedidos para pizzaria com autenticação de usuários, permitindo acompanhar pedidos em tempo real e organizar o fluxo de produção da cozinha.",
    link: "https://github.com/wgutto/brito-pizzaria",
    linkText: "Projeto em desenvolvimento",
    technologies: [
      "TypeScript",
      "NextJs",
      "React",
      "TailwindCSS",
      "NodeJs",
      "Express",
      "Prisma",
      "PostgreSQL"
    ]
  },
  {
    id: "netus-pizzaria",
    title: "Net'us Pizzaria",
    image: "/mockups/mockup-netus-pizzaria.png",
    description:
      "Plataforma de pedidos online para pizzaria com carrinho, escolha de tamanhos e integração direta com WhatsApp para envio automático do pedido ao lojista.",
    link: "https://project-netus-pizzaria.vercel.app/",
    linkText: "Projeto online",
    technologies: ["TypeScript", "NextJs", "React", "TailwindCSS"]
  },
  {
    id: "calculadora-imc",
    title: "Calculadora de IMC",
    image: "/mockups/mockup-calculadora-imc.png",
    description:
      "Aplicação web responsiva para cálculo do Índice de Massa Corporal (IMC), com validação de formulários em tempo real, interface intuitiva e suporte a tema claro e escuro.",
    link: "https://projeto-calculadora-de-imc-pearl.vercel.app/",
    linkText: "Projeto online",
    technologies: ["TypeScript", "NextJs", "React", "TailwindCSS"]
  }
] as const;

// About info
export const ABOUT_INFO = {
  name: "Augusto Brito",
  age: 23,
  role: "Full-Stack Developer",
  location: "Ceará, Brasil",
  education: "Estudante de Engenharia de Software",
  description1:
    "Sou Augusto Brito, desenvolvedor full-stack de 23 anos e estudante de Engenharia de Software, residente no Ceará, Brasil. Atuo no desenvolvimento de aplicações web modernas, com foco em performance, organização de código e uma experiência de usuário bem construída.",
  description2:
    "Estou em constante evolução, buscando aprimorar minhas habilidades técnicas e aprofundar meus conhecimentos em boas práticas e arquitetura de software. Tenho perfil analítico, atenção aos detalhes e interesse em projetos que me desafiem a crescer e gerar impacto por meio da tecnologia."
} as const;

// Skills
export const SKILLS = {
  frontend: ["TypeScript", "React", "TailwindCSS", "NextJs", "ViteJs", "HTML", "CSS"],
  backend: ["NodeJs", "Express", "Prisma"],
  databases: ["MySQL", "MongoDB", "PostgreSQL"]
} as const;
