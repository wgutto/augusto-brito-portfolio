"use client"

import { Course } from "@/types/certifications";
import { Award } from "lucide-react";
import { Button } from "../ui/button";

interface CourseRowProps {
  course: Course;
  accentColor: string;
  onCertificateClick: (course: Course) => void;
}

export const CourseRow = ({ course, onCertificateClick }: CourseRowProps) => {
  return (
    <div className="flex items-center justify-between py-4 px-4 rounded-lg border">
      <div className="flex-1 flex flex-col gap-1">
        <h4 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
          {course.name}
        </h4>
        <p className="text-xs md:text-sm text-muted-foreground">
          {course.duration}
        </p>
      </div>

      {/* Certificate button */}
      <Button
        onClick={() => onCertificateClick(course)}
        className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-102 bg-blue-600 hover:bg-blue-700"
        aria-label={`Ver certificado de ${course.name}`}
      >
        <Award className="size-4" />
        <span className="hidden sm:inline">Certificado</span>
      </Button>
    </div>
  );
};
