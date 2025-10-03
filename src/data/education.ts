export interface Education {
  date: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  // {
  //   date: "2021—Present",
  //   institution: "Stanford University",
  //   degree: "Ph.D. in Computer Science",
  //   advisor: "Prof. Sarah Johnson",
  // },
  {
    date: "Mar 2019 – Feb 2023",
    institution: "Pohang University of Science and Technology (POSTECH)",
    degree: "B.S. in Computer Science and Engineering",
    // advisor: "Prof. Kyong Hwan Jin",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  }
];
