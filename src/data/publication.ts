export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  pageUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // {
  //   year: "(TBD)",
  //   conference: "In Preparation",
  //   title: "From Static to Dynamic Maps: Scene Flow-Driven Mapping for Robust Robotic Policy Learning",
  //   authors: "Byeonghyun Pak, Sunghwan Kim, Kehan Long, Nikolay Atanasov",
  //   paperUrl: "",
  //   codeUrl: "",
  //   pageUrl: "",
  //   // tldr: "We propose a multirate integration method that accelerates diffusion model inference.",
  //   // imageUrl: "/images/tortoise_hare.gif",
  // },
  {
    year: "",
    conference: "In submission",
    title: "Aligning Forest and Trees in Images and Long Captions for Visually Grounded Understanding",
    authors: "Byeongju Woo, Zilin Wang, Byeonghyun Pak, Sangwoo Mo, Stella X. Yu",
    paperUrl: "https://arxiv.org/pdf/2407.09033v1",
    codeUrl: "https://github.com/ByeongHyunPak/tqdm",
    pageUrl: "https://byeonghyunpak.github.io/tqdm/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Textual object queries enable domain-invariant semantic pixel grouping, allowing models to generalize to entirely unseen domains.",
    imageUrl: "/images/CAFT.png"
  },
  {
    year: "2024",
    conference: "ECCV",
    title: "Textual Query-Driven Mask Transformer for Domain Generalized Segmentation",
    authors: "Byeongju Woo*, Byeonghyun Pak*, Sunghwan Kim*, Dae-hwan Kim, Hoseong Kim",
    paperUrl: "https://arxiv.org/pdf/2407.09033v1",
    codeUrl: "https://github.com/ByeongHyunPak/tqdm",
    pageUrl: "https://byeonghyunpak.github.io/tqdm/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Textual object queries enable domain-invariant semantic pixel grouping, allowing models to generalize to entirely unseen domains.",
    imageUrl: "/images/tqdm.gif"
  },
  {
    year: "2023",
    conference: "CVPR",
    title: "Human Pose Estimation in Extremely Low-Light Conditions",
    authors: "Sohyun Lee*, Jaesung Rim*, Boseung Jeong, Geonu Kim, Byungju Woo, Haechan Lee, Sunghyun Cho, Suha Kwak",
    paperUrl: "https://arxiv.org/abs/2303.15410",
    codeUrl: "https://github.com/sohyun-l/ExLPose",
    pageUrl: "https://cg.postech.ac.kr/research/ExLPose/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "B‑spline implicit neural representation for super-resolution of screen content images achieves superior edge and text fidelity.",
    // imageUrl:"https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Highlight (Top 2.5%)",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/btc.gif"
    imageUrl: "/images/ExlPose.png"
  },
];

// award: "🏆 Best Paper Award",
