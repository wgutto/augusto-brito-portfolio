"use client"

import { Course } from "@/types/certifications"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

type CourseRowProps = {
    course: Course
    onCertificateClick: (course: Course) => void
}

export const CourseRow = ({ course, onCertificateClick }: CourseRowProps) => {
    return (
        <div className="flex items-center justify-between p-4 border-t gap-3">
            <div className="flex flex-col min-w-0">
                <Tooltip>
                    <TooltipTrigger>
                        <p className="truncate text-left text-sm font-semibold">{course.name}</p>
                    </TooltipTrigger>
                    <TooltipContent>{course.name}</TooltipContent>
                </Tooltip>

                <div className="flex items-center gap-1 font-semibold text-[12px] text-muted-foreground">
                    <p>{course.platformName}</p> - <p>{course.duration}h</p>
                </div>
            </div>

            <Button
                onClick={() => onCertificateClick(course)}
                className="bg-transparent text-black font-semibold border cursor-pointer transition-all duration-200 hover:bg-transparent hover:scale-102 dark:text-white"
                aria-label={`Ver certificado de ${course.name}`}
            >
                Ver certificado
            </Button>
        </div>
    )
}
