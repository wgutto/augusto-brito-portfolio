import { CertificationPlatform } from "@/types/certifications.types";

export const CERTIFICATIONS: CertificationPlatform[] = [
  {
    id: "alura",
    name: "Alura",
    accentColor: "#0086C9",
    logoSrc: "/logos/alura-logo.svg",
    courses: [
      {
        id: "alura-001",
        name: "React: Componentes Reutilizáveis",
        duration: "12h",
        certificateImage: "/certificates/alura-react.svg"
      },
      {
        id: "alura-002",
        name: "Next.js: Construindo Aplicações Modernas",
        duration: "16h",
        certificateImage: "/certificates/alura-nextjs.svg"
      },
      {
        id: "alura-003",
        name: "TypeScript para Projetos Escaláveis",
        duration: "14h",
        certificateImage: "/certificates/alura-typescript.svg"
      }
    ]
  }
];
