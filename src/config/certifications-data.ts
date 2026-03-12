import { CertificationPlatform } from "@/types/certifications"

export const CERTIFICATIONS: CertificationPlatform[] = [
  {
    id: "alura",
    name: "Alura",
    accentColor: "#0086C9",
    logoSrc: "/logos/logo-alura.png",
    courses: [
      {
        id: "alura-001",
        name: "Node.js: lidando com buscas, filtros, paginação e erros em uma API",
        duration: "10h",
        certificateImage:
          "/certificates/alura/alura-buscas-filtros-paginacao-erros.png",
      },
      {
        id: "alura-002",
        name: "Node.js: criando uma API Rest com Express e MongoDB",
        duration: "10h",
        certificateImage: "/certificates/alura/alura-node-express-mongo.png",
      },
    ],
  },
  {
    id: "b7web",
    name: "B7Web",
    accentColor: "#0086C9",
    logoSrc: "/logos/logo-b7web.png",
    courses: [
      {
        id: "b7web-001",
        name: "JavaScript",
        duration: "77h",
        certificateImage: "/certificates/b7web/b7web-javascript.png",
      },
      {
        id: "b7web-002",
        name: "TypeScript",
        duration: "5h",
        certificateImage: "/certificates/b7web/b7web-typescript.png",
      },
      {
        id: "b7web-003",
        name: "ReactJS",
        duration: "12h",
        certificateImage: "/certificates/b7web/b7web-react.png",
      },
      {
        id: "b7web-004",
        name: "TailwindCSS",
        duration: "8h",
        certificateImage: "/certificates/b7web/b7web-tailwindcss.png",
      },
      {
        id: "b7web-005",
        name: "HTML5 & CSS3",
        duration: "89h",
        certificateImage: "/certificates/b7web/b7web-html5-css3.png",
      },
    ],
  },
]
