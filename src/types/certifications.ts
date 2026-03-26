export type Course = {
    id: string
    platformName: string
    name: string
    duration: number
    skillArea: "BACKEND" | "FRONTEND" | "INFRAANDDEVOPS" | "QUALITYANDTOOLS" | "BOTH"
    certificateImage: string
}

export interface CertificationPlatform {
    id: string
    name: string
    accentColor: string
    logoSrc: string
    courses: Course[]
}
