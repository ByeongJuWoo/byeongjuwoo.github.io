export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  researchInterests: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  rsUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
  addressOffice?: string;
  addressURL?: string;
  lastUpdated?: string;
}

// export const aboutMe: AboutMe = {
//   name: "Jane R. Smith",
//   title: "Ph.D. Candidate",
//   institution: "Stanford University",
//   // Note that links work in the description
//   description:
//     "I'm a final-year <a href='https://www.stanford.edu'>PhD candidate</a> working at the intersection of causal inference and machine learning. My research focuses on developing robust, interpretable systems that can reason about cause and effect in complex environments.",
//   email: "______@stanford.edu",
//   imageUrl:
//     "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
//   githubUsername: "janesmith",
//   linkedinUsername: "janesmith",
//   twitterUsername: "janesmith",
//   blogUrl: "https://",
//   cvUrl: "https://",
//   institutionUrl: "https://www.stanford.edu",
//   // altName: "",
//   // secretDescription: "I like dogs.",
// };

export const aboutMe: AboutMe = {
  name: "Byeongju Woo",
  title: "Research Officer",
  institution: "Agency for Defense Development",
  // Note that links work in the description
  description:
    // "I'm a final-year <a href='https://www.stanford.edu'>PhD candidate</a> working at the intersection of causal inference and machine learning. My research focuses on developing robust, interpretable systems that can reason about cause and effect in complex environments.",
    // until 26.01.16
    // "I am a first lieutenant in the Republic of Korea Air Force (ROKAF), currently serving as a research officer \
    // at the <a href='https://www.add.re.kr/eps'>Agency for Defense Development (ADD)</a>, the Korean counterpart \
    // to the U.S. DARPA. I am fortunate to work under the guidance of <a href='https://web.eecs.umich.edu/~stellayu/'>Prof. Stella X. Yu</a> \
    // from the <a href='https://umich.edu/'>University of Michigan</a> and <a href='https://sites.google.com/view/sangwoomo'>Prof. Sangwoo Mo</a> \
    // from <a href='https://www.postech.ac.kr/eng/'>POSTECH</a>. Previously, I completed my bachelor's degree (<em>Summa Cum Laude</em>) \
    // in Computer Science and Engineering at <a href='https://www.postech.ac.kr/eng/'>POSTECH</a>.\
    // ",
    // from 26.01.17
    "I am an incoming Ph.D. student in Computer Science and Engineering at the University of Michigan, \
    advised by Prof. <a href='https://web.eecs.umich.edu/~stellayu/'>Stella Yu</a>, starting Fall 2026.<br /><br /> \
    I am currently serving as a First Lieutenant in the Republic of Korea Air Force \
    and working as a research officer at the Agency for Defense Development, the Korean counterpart to the U.S. DARPA. \
    Previously, I completed my bachelor's degree (<em>Summa Cum Laude</em>) \
    in Computer Science and Engineering at POSTECH. \
    ",
  researchInterests:  
    // "\
    // <div style='margin-bottom: 0.5rem;'>\
    //   My research goal is to develop robots with human-level versatility that can \
    //   (1) generalize across diverse tasks and environments, \
    //   (2) adapt to unseen domains via physics-aware reasoning, and \
    //   (3) deploy in dynamic, real-world settings.\
    // </div>\
    // <div style='margin-bottom: 0.5rem;'>\
    //   To this end, my research focuses on three core areas:\
    // </div>\
    // <div style='margin-left: 0.3rem; margin-bottom: 0.1rem;'>\
    //     • <strong>Vision–Language Representations (ECCV 2024)</strong>\
    // </div>\
    // <div style='margin-left: 0.6rem; margin-bottom: 0.3rem;'>\
    //     for open-world semantics and domain generalization.\
    // </div>\
    // <div style='margin-left: 0.3rem; margin-bottom: 0.1rem;'>\
    //   • <strong>Neural Scene Dynamics (ongoing)</strong>\
    // </div>\
    // <div style='margin-left: 0.6rem; margin-bottom: 0.3rem;'>\
    //     for learning physics-aware policies.\
    // </div>\
    // <div style='margin-left: 0.3rem; margin-bottom: 0.1rem;'>\
    //   • <strong>Implicit Neural Representations (CVPR 2023)</strong>\
    // </div>\
    // <div style='margin-left: 0.6rem; margin-bottom: 0.5rem;'>\
    //     for continuous scene representations from sensor observations.\
    // </div>\
    //     "
    "<div style='margin-bottom: 0.5rem;'>\
     My research interests lie in computer vision and deep learning, with a particular focus on developing systems that emulate human cognitive processes. \
     I aim to create machines that perceive not merely to recognize, but to truly comprehend the physical world. \
     Accordingly, I am currently focusing on the following topics, among others:\
    </div>\
    <div style='margin-left: 0.3rem; margin-bottom: 0.1rem;'>\
      Grounded visual understanding \
    </div> \
    <div style='margin-left: 0.3rem; margin-bottom: 0.1rem;'> \
      Structured visual priors \
    </div>\
    <div style='margin-left: 0.3rem; margin-bottom: 0.1rem;'> \
      Robust generalization \
    </div>\
    <div style='margin-left: 0.3rem; margin-bottom: 0.1rem;'> \
      Context-aware representation \
    </div>\ "
        ,
    
  email: "byeongju@umich.edu",
  imageUrl: "/images/profile_3.jpg",
  googleScholarUrl: "https://scholar.google.co.kr/citations?user=GuMKuJwAAAAJ&hl=en",
  githubUsername: "ByeongJuWoo",
  linkedinUsername: "byeongju-woo",
  twitterUsername: "byeongju903",
  blogUrl: "https://innate-ship-06e.notion.site/Byeongju-Woo-2eb36f71c91e803982c5d5b7329b53b0?pvs=74",
  // cvUrl: "https://byeonghyunpak.github.io/CV_byeonghyunpak.pdf",
  cvUrl: "/CV_26_02_13.pdf",
  // rsUrl: "/CV_byeonghyunpak.pdf",
  institutionUrl: "https://www.add.re.kr/eps",
  // altName: "",
  // secretDescription: "I like dogs.",
  addressOffice:"Daejeon, Republic of Korea",
  addressURL:"https://maps.app.goo.gl/UDcczVBM8Kp2APpm8",
  lastUpdated: "February 13, 2026",
};
