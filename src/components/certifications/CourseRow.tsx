"use client"

import { Course } from "@/types/certifications.types";
import { Award } from "lucide-react";

interface CourseRowProps {
  course: Course;
  accentColor: string;
  onCertificateClick: (course: Course) => void;
}

export const CourseRow = ({
  course,
  accentColor,
  onCertificateClick
}: CourseRowProps) => {
  return (
    <div className="flex items-center justify-between py-4 px-4 rounded-lg border border-muted hover:border-muted/60 transition-colors group">
      {/* Course info */}
      <div className="flex-1 flex flex-col gap-1">
        <h4 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
          {course.name}
        </h4>
        <p className="text-xs md:text-sm text-muted-foreground">
          {course.duration}
        </p>
      </div>

      {/* Certificate button */}
      <button
        onClick={() => onCertificateClick(course)}
        className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card"
        style={{
          backgroundColor: accentColor,
          "--ring-color": accentColor
        } as React.CSSProperties}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.9";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "scale(1)";
        }}
        aria-label={`Ver certificado de ${course.name}`}
      >
        <Award className="w-4 h-4" />
        <span className="hidden sm:inline">Certificado</span>
      </button>
    </div>
  );
};
