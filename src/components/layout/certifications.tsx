"use client"

import { courses } from "@/data/certifications-data"
import { CertificateCard } from "../certifications/certificate-card"
import { RevealRight } from "../ui/reveal-right"
import { RevealLeft } from "../ui/reveal-left"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

export const Certifications = () => {
    const coursesFrontend = courses.filter(
        (item) => item.skillArea === "FRONTEND" || item.skillArea === "BOTH",
    )
    const coursesBackend = courses.filter(
        (item) => item.skillArea === "BACKEND" || item.skillArea === "BOTH",
    )
    const coursesInfraAndDevops = courses.filter((item) => item.skillArea === "INFRAANDDEVOPS")
    const coursesQualityAndTools = courses.filter((item) => item.skillArea === "QUALITYANDTOOLS")

    const studyHours = courses.reduce((acc, item) => acc + item.duration, 0)

    return (
        <section
            id="certifications"
            className="relative min-h-screen flex flex-col items-center justify-center snap-start px-4 py-20 overflow-hidden dark:bg-linear-to-b dark:from-black dark:to-[#020617]"
        >
            <h1 className="text-2xl md:text-3xl font-bold">Certificações</h1>

            <div className="flex items-center gap-4 my-6">
                <div className="bg-card border-2 rounded-md py-2 px-4">
                    <h1 className="font-bold text-lg">{courses.length}</h1>

                    <p className="text-sm text-muted-foreground">certificações</p>
                </div>

                <div className="bg-card border-2 rounded-md py-2 px-4">
                    <p className="font-bold text-lg">+{studyHours}h</p>
                    <p className="text-sm text-muted-foreground">horas de estudo</p>
                </div>
                <div className="bg-card border-2 rounded-md py-2 px-4">
                    <p className="font-bold text-lg">4</p>
                    <p className="text-sm text-muted-foreground">áreas</p>
                </div>
            </div>

            <Tabs defaultValue="frontend&backend" className="w-full max-w-6xl gap-8">
                <TabsList variant={"line"} className="mx-auto">
                    <TabsTrigger value="frontend&backend" className="cursor-pointer">
                        Frontend & Backend
                    </TabsTrigger>
                    <TabsTrigger value="qualityandtools&infraanddevops" className="cursor-pointer">
                        DevOps
                    </TabsTrigger>
                </TabsList>
                <TabsContent
                    value="frontend&backend"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <RevealLeft>
                        <CertificateCard
                            color="#378ADD"
                            courses={coursesFrontend}
                            skillAreaName="Frontend"
                        />
                    </RevealLeft>

                    <RevealRight>
                        <CertificateCard
                            color="#1D9E75"
                            courses={coursesBackend}
                            skillAreaName="Backend"
                        />
                    </RevealRight>
                </TabsContent>

                <TabsContent
                    value="qualityandtools&infraanddevops"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <RevealLeft>
                        <CertificateCard
                            color="#BA7517"
                            courses={coursesInfraAndDevops}
                            skillAreaName="Infra & DevOps"
                        />
                    </RevealLeft>

                    <RevealRight>
                        <CertificateCard
                            color="#7F77DD"
                            courses={coursesQualityAndTools}
                            skillAreaName="Qualidade & Ferramentas"
                        />
                    </RevealRight>
                </TabsContent>
            </Tabs>

            {courses.length === 0 && (
                <div className="text-center mt-6">
                    <p className="text-muted-foreground">Certificações em breve...</p>
                </div>
            )}
        </section>
    )
}
