"use client"

import { Course } from "@/types/course"
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
                        <p className="line-clamp-2 text-left text-sm font-semibold">{course.name}</p>
                    </TooltipTrigger>
                    <TooltipContent>{course.name}</TooltipContent>
                </Tooltip>

                <div className="flex items-center gap-1 font-semibold text-sm text-muted-foreground">
                    <p>{course.platformName}</p> - <p>{course.duration}h</p>
                </div>
            </div>

            <Button
                onClick={() => onCertificateClick(course)}
                className="text-sm font-normal flex items-center gap-2 p-2 rounded-md text-white cursor-pointer bg-blue-600 hover:bg-blue-700"
                aria-label={`Ver certificado de ${course.name}`}
            >
                Ver certificado
            </Button>
        </div>
    )
}
