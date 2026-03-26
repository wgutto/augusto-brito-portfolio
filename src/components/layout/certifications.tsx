"use client"

import { courses } from "@/config/certifications-data"
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

    return (
        <section
            id="certifications"
            className="relative min-h-screen flex flex-col items-center justify-center snap-start px-4 py-20 overflow-hidden dark:bg-linear-to-b dark:from-black dark:to-[#020617]"
        >
            <h1 className="text-2xl md:text-3xl font-bold">Certificações</h1>

            <Tabs defaultValue="frontend&backend" className="w-full max-w-6xl gap-8 mt-6">
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
