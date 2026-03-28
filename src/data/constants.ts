import { Stack } from "@/types/stack"

// Social media links
export const socialLink = {
    github: "https://github.com/wgutto",
    linkedin: "https://www.linkedin.com/in/wgutto/",
    instagram: "https://www.instagram.com/wgutto",
    twitter: "https://x.com/wguttoo",
    email: "augusstobrito@gmail.com",
    whatsapp:
        "https://wa.me/5588996087187?text=Olá%20Augusto,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
} as const

// Navigation items
export const NAV_ITEMS = [
    { name: "Sobre", link: "#about" },
    { name: "Habilidades", link: "#about" },
    { name: "Projetos", link: "#projects" },
    { name: "Certificações", link: "#certifications" },
    { name: "Contato", link: "#contact" },
] as const

// Projects data
export const PROJECTS = [
    {
        id: "brito-pizzaria",
        title: "Brito Pizzaria",
        image: "/mockups/mockup-brito-pizzaria.png",
        description:
            "Sistema web de gerenciamento de pedidos para pizzaria com autenticação de usuários, permitindo acompanhar pedidos em tempo real e organizar o fluxo de produção da cozinha.",
        link: "https://github.com/wgutto/brito-pizzaria",
        linkText: "Em desenvolvimento",
        stacks: [
            { stack: "TypeScript", color: "#378ADD" },
            { stack: "Next.js", color: "#378ADD" },
            { stack: "React", color: "#378ADD" },
            { stack: "TailwindCSS", color: "#378ADD" },
            { stack: "Node.js", color: "#1D9E75" },
            { stack: "Express", color: "#1D9E75" },
            { stack: "Primsa", color: "#BA7517" },
            { stack: "PostgreSQL", color: "#BA7517" }
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
        stacks: [
            { stack: "TypeScript", color: "#378ADD" },
            { stack: "Next.js", color: "#378ADD" },
            { stack: "React", color: "#378ADD" },
            { stack: "TailwindCSS", color: "#378ADD" }
        ]
    },
    {
        id: "calculadora-imc",
        title: "Calculadora de IMC",
        image: "/mockups/mockup-calculadora-imc.png",
        description:
            "Aplicação web responsiva para cálculo do Índice de Massa Corporal (IMC), com validação de formulários em tempo real, interface intuitiva e suporte a tema claro e escuro.",
        link: "https://projeto-calculadora-de-imc-pearl.vercel.app/",
        linkText: "Projeto online",
        stacks: [
            { stack: "TypeScript", color: "#378ADD" },
            { stack: "Next.js", color: "#378ADD" },
            { stack: "React", color: "#378ADD" },
            { stack: "TailwindCSS", color: "#378ADD" }
        ],
    },
] 

export const stacks: Stack[] = [
    {
        stackName: "TypeScript",
        color: "#378ADD"
    },
    {
        stackName: "React",
        color: "#378ADD"
    },
    {
        stackName: "Next.js",
        color: "#378ADD"
    },
    {
        stackName: "TailwindCSS",
        color: "#378ADD"
    },
    {
        stackName: "Node.js",
        color: "#1D9E75"
    },
    {
        stackName: "Express",
        color: "#1D9E75"
    },
    {
        stackName: "PostgreSQL",
        color: "#BA7517"
    },
    {
        stackName: "MongoDB",
        color: "#BA7517"
    },
]
