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
    title: "Joining Ph.D. Program at University of Michigan",
    description: "Advised by Prof. Stella Yu.",
  },
  {
    date: "May 2026",
    title: "Selected as Gold Reviewer at ICML 2026",
    description: "See you in Seoul!",
  },
  {
    date: "March 2026",
    title: "CroBo accepted to CVPR 2026 Workshop on Pixel-level Video Understanding in the Wild",
    titleHtml: "<a href='https://seokminlee-chris.github.io/CroBo-ProjectPage/' target='_blank' rel='noopener noreferrer' style='text-decoration: underline; color: inherit;'>CroBo</a> accepted to CVPR 2026 Workshop on Pixel-level Video Understanding in the Wild",
    description: "My first publication as a corresponding author. Seokmin will be presenting at the venue.",
  },
];
