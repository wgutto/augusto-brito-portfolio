"use client"

import { CERTIFICATIONS } from "@/config/certifications.data";
import { PlatformCard } from "../certifications/PlatformCard";
import { RevealTop } from "../ui/reveal-top";

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative min-h-screen flex flex-col items-center justify-center snap-start px-4 py-20 overflow-hidden dark:bg-linear-to-b dark:from-black dark:to-[#020617]"
    >
      <RevealTop>
        <h1 className="text-2xl md:text-3xl font-bold">Certificações</h1>
      </RevealTop>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {CERTIFICATIONS.map((certification) => (
          <RevealTop key={certification.id}>
            <PlatformCard platform={certification} />
          </RevealTop>
        ))}
      </div>

      {/* Empty state message when no certifications */}
      {CERTIFICATIONS.length === 0 && (
        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            Certificações em breve...
          </p>
        </div>
      )}
    </section>
  );
};
