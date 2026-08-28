export interface News {
  date: string;
  title: string;
  titleHtml?: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "August 2026",
    title: "Started Ph.D. at University of Michigan, advised by Prof. Stella Yu",
    description: "",
  },
  {
    date: "June 2026",
    title: "Completed three-year mandatory military service at the Agency for Defense Development (ADD)",
    description: "",
  },
  {
    date: "May 2026",
    title: "Selected as Gold Reviewer at ICML 2026",
    description: "",
  },
  {
    date: "May 2026",
    title: "Google Scholar citations reached 100",
    description: "",
  },
  {
    date: "March 2026",
    title: "CroBo accepted to CVPR 2026 Workshop on Pixel-level Video Understanding in the Wild",
    titleHtml: "<a href='https://seokminlee-chris.github.io/CroBo-ProjectPage/' target='_blank' rel='noopener noreferrer' style='text-decoration: underline; color: inherit;'>CroBo</a> accepted to CVPR 2026 Workshop on Pixel-level Video Understanding in the Wild",
    description: "",
  },
];
