"use client"

import { useState } from "react"
import { CertificateModal } from "./certificate-modal"
import { Course } from "@/types/certifications"
import { CourseRow } from "./course-row"

interface CertificateCardProps {
    color: string
    courses: Course[]
    skillAreaName: string
}

export const CertificateCard = ({ color, courses, skillAreaName }: CertificateCardProps) => {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCertificateClick = (course: Course) => {
        setSelectedCourse(course)
        setIsModalOpen(true)
    }

    return (
        <>
            <div
                className="bg-card rounded-xl border-t-2 overflow-hidden shadow-md"
                style={{ borderTopColor: color }}
            >
                <div className="p-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: color }}></div>
                        <h1 className="font-semibold text-foreground">{skillAreaName}</h1>
                    </div>

                    <div>
                        <p
                            className="font-semibold text-sm p-1 text-white rounded-md"
                            style={{ background: color }}
                        >
                            {courses.length} cursos
                        </p>
                    </div>
                </div>

                {courses.map((course) => (
                    <CourseRow
                        key={course.id}
                        course={course}
                        onCertificateClick={handleCertificateClick}
                    />
                ))}
            </div>

            {selectedCourse && (
                <CertificateModal
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false)
                        setSelectedCourse(null)
                    }}
                    certificateImage={selectedCourse.certificateImage}
                    courseName={selectedCourse.name}
                />
            )}
        </>
    )
}
