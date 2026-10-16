
const projects = [
  {
    id: "flowboard",
    title: "FlowBoard",
    category: "REAL-TIME COLLABORATION",
    summary: "A collaborative workspace built for real-time teamwork.",
    description:
      "A web application focused on collaborative workflows and real-time communication between users.",
    stack: ["React", "TypeScript", "Node.js", "Socket.IO", "MongoDB"],
    highlights: [
      "Real-time communication using WebSockets",
      "Interactive and responsive React interface",
      "Backend API for managing application data"
    ],
    github: "",
    demo: ""
  },
  {
    id: "ai-pdf",
    title: "AI PDF Assistant",
    category: "GENERATIVE AI",
    summary: "Extract and understand information from complex PDF documents.",
    description:
      "An AI-powered document assistant that combines PDF text extraction, image understanding, and structured document processing.",
    stack: ["Python", "PyMuPDF", "Gemini API", "AI"],
    highlights: [
      "Extracts text from PDF documents",
      "Uses vision models to interpret document images",
      "Combines extracted content into a unified output"
    ],
    github: "",
    demo: ""
  },
  {
    id: "image-classifier",
    title: "Cats vs Dogs Classifier",
    category: "DEEP LEARNING",
    summary: "An image classification model trained to recognize cats and dogs.",
    description:
      "A computer vision project using transfer learning with MobileNet to classify images into two animal categories.",
    stack: ["Python", "PyTorch", "MobileNet", "Google Colab"],
    highlights: [
      "Transfer learning for image classification",
      "Training and validation pipeline",
      "Evaluation on a separate test dataset"
    ],
    github: "",
    demo: ""
  },
  {
    id: "specs",
    title: "S.P.E.C.S.",
    category: "AGENTIC AI",
    summary: "An agent pipeline for discovering and processing resources.",
    description:
      "A multi-step pipeline that discovers resources, extracts relevant information, normalizes the results, and produces structured output.",
    stack: ["Python", "Groq", "Tavily", "AI Agents"],
    highlights: [
      "Resource discovery and information extraction",
      "Normalization of collected data",
      "Pipeline-based processing architecture"
    ],
    github: "",
    demo: ""
  }
];

export default projects;
