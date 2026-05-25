import Image from "next/image";
import {
  Mail,
  Github,
  Twitter,
  GraduationCap,
  Download,
  MapPin,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { MapMyVisitors } from "@/components/map-my-visitors";
import { PublicationEntry } from "@/components/publication-entry";
import { ExperienceEntry } from "@/components/experience-entry";

import { aboutMe } from "@/data/aboutme";
import { newsData } from "@/data/news";
import { publicationData } from "@/data/publication";
import { experienceData } from "@/data/experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />

      <main className="pt-16">

        {/* ════════════════════════════════════════
            HOME / ABOUT
        ════════════════════════════════════════ */}
        <section id="home" className="bg-[#FFFFFF] py-10 md:py-12">
          <div className="max-w-[980px] mx-auto px-6">

            {/* Profile row: photo + info */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-10">
              {aboutMe.imageUrl && (
                <div className="flex-shrink-0">
                  <div className="relative w-36 h-[168px] sm:w-44 sm:h-52">
                    <Image
                      src={aboutMe.imageUrl}
                      alt={aboutMe.name}
                      fill
                      priority
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col">
                {/* Top: name + title + institution */}
                <div className="pt-3">
                  <h1 className="font-sans text-[2.2rem] leading-tight font-bold text-[#2E2E2F] tracking-[0.01em] mb-1">
                    {aboutMe.name}
                  </h1>
                  {aboutMe.altName && (
                    <p className="text-stone-500 text-sm mb-2">{aboutMe.altName}</p>
                  )}
                  <p className="text-stone-600 text-sm">{aboutMe.title}</p>
                  <p className="text-stone-600 text-sm">
                    {aboutMe.institutionUrl ? (
                      <a
                        href={aboutMe.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-stone-900 transition-colors"
                      >
                        {aboutMe.institution}
                      </a>
                    ) : (
                      aboutMe.institution
                    )}
                  </p>
                </div>

                {/* Spacer */}
                <div className="flex-grow" />

                {/* Bottom: location + contact links */}
                <div>
                  {/* Location — own line */}
                  {aboutMe.addressOffice && aboutMe.addressURL && (
                    <div className="mb-2">
                      <a
                        href={aboutMe.addressURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
                      >
                        <MapPin size={14} />
                        Daejeon, Korea
                      </a>
                    </div>
                  )}

                  {/* Contact links */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    <a
                      href={`mailto:${aboutMe.email}`}
                      className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      <Mail size={14} />
                      Email
                    </a>
                    {aboutMe.cvUrl && (
                      <a
                        href={aboutMe.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
                      >
                        <Download size={14} />
                        CV
                      </a>
                    )}
                    {aboutMe.googleScholarUrl && (
                      <a
                        href={aboutMe.googleScholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
                      >
                        <GraduationCap size={14} />
                        Google Scholar
                      </a>
                    )}
                    {aboutMe.githubUsername && (
                      <a
                        href={`https://github.com/${aboutMe.githubUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                    {aboutMe.twitterUsername && (
                      <a
                        href={`https://twitter.com/${aboutMe.twitterUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
                      >
                        <Twitter size={14} />
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio + Research Interests */}
            {aboutMe.description && (
              <div className="border-t border-stone-200 pt-8">
                <p
                  className="font-serif text-[0.97rem] leading-relaxed text-stone-700 [&_a]:underline [&_a]:text-stone-800 [&_a:hover]:text-stone-500 mb-5"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
                {aboutMe.researchInterests && (
                  <details className="mb-4">
                    <summary className="cursor-pointer select-none font-serif text-sm text-stone-600 mb-1 tracking-wide font-bold">
                      Research
                    </summary>
                    <div
                      className="mt-2 font-serif text-[0.97rem] leading-relaxed text-stone-700"
                      dangerouslySetInnerHTML={{ __html: aboutMe.researchInterests }}
                    />
                  </details>
                )}
                {aboutMe.lastUpdated && (
                  <p className="text-xs text-stone-400 mt-6">
                    Last updated: {aboutMe.lastUpdated}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════════
            NEWS
        ════════════════════════════════════════ */}
        {newsData.length > 0 && (
          <section id="news" className="bg-[#FAFAFA] py-14">
            <div className="max-w-[980px] mx-auto px-6">
              <h2 className="font-sans text-[1.65rem] font-semibold text-[#2E2E2F] mb-8">
                News
              </h2>
              <div className="space-y-5">
                {newsData.map((news, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row gap-1 sm:gap-8"
                  >
                    <span className="text-sm text-stone-500 whitespace-nowrap sm:w-24 flex-shrink-0 pt-px">
                      {news.date}
                    </span>
                    <div>
                      <p className="text-sm text-stone-700 font-medium">
                        {news.title}
                        {news.link && (
                          <a
                            href={news.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-stone-400 hover:text-stone-700 transition-colors"
                          >
                            ↗
                          </a>
                        )}
                      </p>
                      {news.description && (
                        <p className="text-sm text-stone-500 mt-0.5">
                          {news.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════
            PUBLICATIONS
        ════════════════════════════════════════ */}
        {publicationData.length > 0 && (
          <section id="publications" className="bg-[#FFFFFF] py-14">
            <div className="max-w-[980px] mx-auto px-6">
              <h2 className="font-sans text-[1.65rem] font-semibold text-[#2E2E2F] mb-8">
                Publications
              </h2>
              <div className="space-y-0">
                {publicationData.map((pub, i) => (
                  <div key={i}>
                    <PublicationEntry publication={pub} />
                    {i < publicationData.length - 1 && (
                      <div className="h-px bg-stone-200 my-10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════
            WORK EXPERIENCE
        ════════════════════════════════════════ */}
        {experienceData.length > 0 && (
          <section className="bg-[#FAFAFA] py-14">
            <div className="max-w-[980px] mx-auto px-6">
              <h2 className="font-sans text-[1.65rem] font-semibold text-[#2E2E2F] mb-8">
                Work Experience
              </h2>
              <div className="space-y-6">
                {experienceData.map((exp, i) => (
                  <ExperienceEntry key={i} experience={exp} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════
            FOOTER
        ════════════════════════════════════════ */}
        <footer className="bg-[#FFFFFF] border-t border-stone-200 py-8">
          <div className="max-w-[980px] mx-auto px-6 flex items-start justify-between flex-wrap gap-4">
            <p className="text-xs text-stone-400">
              © {new Date().getFullYear()} {aboutMe.name}
            </p>
            <MapMyVisitors />
          </div>
        </footer>

      </main>
    </div>
  );
}
