// data/projects.ts
export const projects = [
  {
    slug: "brats-app",
    title: "Brain Tumor Segmentation App",
    description:
      "Web app to visualize tumor segmentations on MRI scans using deep learning models.",
    github: "https://github.com/brianna-huang/brats-app",
    image: "/brats-demo.png",
    image_desc: "Main viewer allowing slice scrolling and AI-detected tumor overlays.",
    tags: ["Python", "Flask", "React", "PyTorch", "Medical imaging"]
  },
  {
    slug: "medical-imaging",
    title: "Medical Imaging Analysis with Deep Learning",
    description:
      "Using AI tools for segmentation, anomaly detection, and reconstruction of medical images.",
    github: "https://github.com/brianna-huang/medical-imaging",
    image: "/medical-imaging-demo.png",
    image_desc: "Reconstructed ultrasound using Fourier Transform.",
    tags: ["Python", "Computer vision", "pydicom", "SimpleITK"]
  },
  {
    slug: "movie-chain-game",
    title: "Movie Chain Game",
    description:
      "Movie-themed chain game supported by movie & IMDB databases",
    github: "https://github.com/brianna-huang/syntax-terror",
    image: "/movie-game-demo.png",
    image_desc: "Main game instructions page.",
    tags: ["Python", "SQL", "React", "Auth0"]
  },
  {
    slug: "ai-fundamentals",
    title: "AI Fundamentals",
    description:
      "AI projects covering search algorithms, RL, constraint satisfaction, language models, and neural networks.",
    github: "https://github.com/brianna-huang/ai-fundamentals",
    image: "/sudoku-demo.png",
    image_desc: "Sudoku solver using AC3 algorithm and inference.",
    tags: ["Python", "Game playing", "Neural networks", "Algorithms"]
  },
  {
    slug: "bay-area-housing",
    title: "Bay Area Housing Project",
    description:
      "Using big data to investigate factors affecting high housing prices in the Bay Area.",
    github: "https://github.com/brianna-huang/bay-area-housing/",
    image: "/housing-demo.png",
    image_desc: "California housing cost graphic",
    tags: ["Python", "Numpy", "Pandas"]
  },
];