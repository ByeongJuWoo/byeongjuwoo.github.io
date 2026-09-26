export interface News {
  date: string;
  title: string;
  titleHtml?: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "Sep 2026",
    title: "CAFT was accepted to NeurIPS 2026. See you at Atlanta!",
    titleHtml: "<a href='https://byeongju.me/CAFT/' target='_blank' rel='noopener noreferrer' style='text-decoration: underline; color: inherit;'>CAFT</a> was accepted to NeurIPS 2026. See you at Atlanta!",
    description: "",
  },
  {
    date: "Sep 2026",
    title: "VVSQ was accepted to Neurocomputing",
    titleHtml: "<a href='https://www.sciencedirect.com/science/article/abs/pii/S0925231226022861?via%3Dihub' target='_blank' rel='noopener noreferrer' style='text-decoration: underline; color: inherit;'>VVSQ</a> was accepted to Neurocomputing",
    description: "",
  },
  {
    date: "Aug 2026",
    title: "Started Ph.D. at University of Michigan, advised by Prof. Stella Yu",
    description: "",
  },
  {
    date: "Jun 2026",
    title: "Completed military service at the Agency for Defense Development (ADD)",
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
    date: "Mar 2026",
    title: "CroBo was accepted to CVPR 2026 Workshop on Pixel-level Video Understanding in the Wild",
    titleHtml: "<a href='https://seokminlee-chris.github.io/CroBo-ProjectPage/' target='_blank' rel='noopener noreferrer' style='text-decoration: underline; color: inherit;'>CroBo</a> was accepted to CVPR 2026 Workshop on Pixel-level Video Understanding in the Wild",
    description: "",
  },
];
