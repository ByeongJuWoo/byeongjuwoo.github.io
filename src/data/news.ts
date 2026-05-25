export interface News {
  date: string;
  title: string;
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
];
