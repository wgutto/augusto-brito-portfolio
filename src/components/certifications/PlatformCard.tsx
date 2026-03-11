"use client"

import { useState } from "react";
import { CertificationPlatform, Course } from "@/types/certifications.types";
import { CourseRow } from "./CourseRow";
import { CertificateModal } from "./CertificateModal";
import Image from "next/image";

interface PlatformCardProps {
  platform: CertificationPlatform;
}

export const PlatformCard = ({ platform }: PlatformCardProps) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative bg-card rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Animated top border */}
        <div
          className="h-1 bg-transparent"
          style={{
            background: `linear-gradient(to right, ${platform.accentColor}, ${platform.accentColor})`,
            backgroundPosition: "0% 0%",
            backgroundSize: "0% 100%",
            backgroundRepeat: "no-repeat",
            transition: "background-size 0.4s ease-out"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundSize = "100% 100%";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundSize = "0% 100%";
          }}
        />

        {/* Content */}
        <div className="p-6 flex flex-col gap-6">
          {/* Platform header */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
              <Image
                src={platform.logoSrc}
                alt={platform.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              {platform.name}
            </h3>
          </div>

          {/* Courses list */}
          <div className="flex flex-col gap-2">
            {platform.courses.map((course) => (
              <CourseRow
                key={course.id}
                course={course}
                accentColor={platform.accentColor}
                onCertificateClick={handleCertificateClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCourse && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedCourse(null);
          }}
          certificateImage={selectedCourse.certificateImage}
          courseName={selectedCourse.name}
        />
      )}
    </>
  );
};
