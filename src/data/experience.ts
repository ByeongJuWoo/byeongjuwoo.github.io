export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  points?: string[];
}

export const experienceData: Experience[] = [
  {
    date: "June 2023 - May 2026",
    title: "Research Officer for National Defense (ROND)",
    company: "Agency for Defense Development (ADD)",
    companyUrl: "https://www.add.re.kr/eps",
    points: [
      "Served as a First Lieutenant in the Republic of Korea Air Force (ROKAF) and worked as a research officer.",
      "Researched Domain Generalized Object Detection for UAV detection.",
      "Served on the execution team of AI Transformation Task Force (Feb 2026 – Mar 2026).",
    ],
  },
  {
    date: "June 2021 - July 2021",
    title: "Computer Vision Research Intern",
    company: "SK Hynix",
    points: [
      "Developed an automated algorithm to pre-check for rejects in 3D NAND manufacturing with DL models.",
      "Received an Industry-Academia Scholarship with guaranteed employment upon graduation.",
    ],
  },
];
