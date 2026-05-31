import React from "react";
import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  const formattedDate = experience.date.replace(' - ', ' – ');

  return (
    <div className="mb-6">
      {/* Company name (prominent) + date */}
      <div className="flex justify-between items-baseline">
        <h3 className="text-md font-serif text-stone-900">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-stone-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        <span className="text-sm text-stone-500 flex-shrink-0 ml-4">{formattedDate}</span>
      </div>

      {/* Job title */}
      <p className="text-sm text-stone-600 mb-1.5">{experience.title}</p>

      {/* Bullet points */}
      {experience.points && experience.points.length > 0 ? (
        <ul className="list-disc pl-5 text-sm text-stone-600 space-y-1">
          {experience.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      ) : (
        experience.description && (
          <p className="text-sm italic text-stone-600">{experience.description}</p>
        )
      )}
    </div>
  );
}
