export interface Course {
  id: string
  name: string
  duration: string
  certificateImage: string
}

export interface CertificationPlatform {
  id: string
  name: string
  accentColor: string
  logoSrc: string
  courses: Course[]
}
