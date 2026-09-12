export type Project = {
  id: string; number: string; title: string; subtitle: string; discipline: string;
  description: string; technologies: string[]; accent: string; github: string | null; live?: string;
  problem: string; motivation: string; architecture: {label: string; detail: string}[];
  challenges: {title: string; body: string}[]; features: string[]; learning: string;
};
export const projects: Project[] = [
  {
    id: "forgeai", number: "01", title: "FORGEAI", subtitle: "AI Orchestration Platform", discipline: "AI SYSTEMS / DEVELOPER TOOLS", accent: "#dab37e", github: "https://github.com/santhosh18v/ForgeAI",
    description: "A multi-agent engineering platform where specialized AI agents collaborate across product planning, backend development, testing, and documentation.",
    technologies: ["Python", "LangGraph", "Ollama", "SQLite", "Multi-Agent Systems"],
    problem: "Engineering work moves through many responsibilities. A single AI conversation can lose track of the plan, implementation decisions, tests, and documentation as that work grows.",
    motivation: "Explore how specialized agents can share a structured workflow and keep engineering work understandable from the initial brief through implementation.",
    architecture: [{label:"Project brief",detail:"A task enters the engineering workflow."},{label:"LangGraph orchestration",detail:"The graph coordinates specialized agent responsibilities."},{label:"Specialist agents",detail:"Product planning, backend development, testing, and documentation."},{label:"Local inference & state",detail:"Ollama supplies model inference; SQLite stores workflow checkpoints."}],
    challenges: [{title:"Coordination",body:"Define clear agent responsibilities and explicit handoffs so each step has the context it needs."},{title:"Recoverable state",body:"Persist workflow progress so an interrupted engineering task can resume from a meaningful checkpoint."},{title:"Trust in output",body:"Treat generated code as a proposal that needs testing, review, and clear documentation."}],
    features: ["Specialized engineering agents", "Graph-based task orchestration", "Local LLM integration", "SQLite workflow checkpoints", "Testing and documentation stages"],
    learning: "Agent quality depends on the surrounding system: clear task boundaries, shared context, durable state, and verification. More agents alone do not make a better workflow."
  },
  {
    id: "dentos-ai", number: "02", title: "DENTOS AI", subtitle: "AI-Powered Dental Clinic OS", discipline: "FULL STACK / APPLIED AI", accent: "#abc6c5", github: null, live: "https://dentos-ai.onrender.com",
    description: "A multi-tenant dental clinic platform combining patient management, appointments, billing, clinical workflows, role-based access, and AI-assisted clinical dictation.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "FastAPI", "Whisper", "Ollama", "Docker"],
    problem: "Clinic operations span patient records, scheduling, billing, and clinical notes. These workflows need a shared system with clear access boundaries.",
    motivation: "Bring everyday clinic workflows into one application and explore how speech transcription can support clinical documentation.",
    architecture: [{label:"Clinic interface",detail:"Next.js and TypeScript organize the patient and staff experience."},{label:"Application services",detail:"Authenticated routes enforce roles and clinic-specific access."},{label:"Structured records",detail:"Prisma and PostgreSQL manage the clinic's operational data."},{label:"Dictation service",detail:"FastAPI connects Whisper transcription with Ollama-assisted note structuring."}],
    challenges: [{title:"Tenant isolation",body:"Carry the authenticated clinic identity through each data access so one clinic's records remain separate from another's."},{title:"Role-aware workflows",body:"Align administrator, dentist, and receptionist actions with their actual responsibilities."},{title:"AI-assisted notes",body:"Keep transcription and generated clinical structure reviewable before a clinician approves a note."}],
    features: ["Patient and appointment management", "Billing and clinical notes", "Multi-tenant data access", "Role-based authorization", "AI-assisted clinical dictation"],
    learning: "Good full-stack architecture follows the workflow. Authentication, data ownership, and human review are part of the product, especially when AI contributes to sensitive records."
  },
  {
    id: "agriai", number: "03", title: "AGRIAI", subtitle: "Intelligent Agriculture Platform", discipline: "FULL STACK / AGRICULTURAL AI", accent: "#a8bf91", github: "https://github.com/santhosh18v/AgriAI",
    description: "An AI-powered agriculture platform designed around crop health, pest identification, soil guidance, farming assistance, and intelligent agricultural decision support.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "AI Integration"],
    problem: "Agricultural questions connect crop symptoms, pests, soil conditions, and practical decisions. Useful assistance needs to organize these related questions into a clear experience.",
    motivation: "Explore a practical interface for agricultural AI, connecting visual crop questions and conversational assistance with a farmer's next decision.",
    architecture: [{label:"Farming workspace",detail:"Next.js provides task-specific crop, pest, soil, and chat experiences."},{label:"Application layer",detail:"TypeScript connects the interface, authentication, and AI requests."},{label:"AI integration",detail:"Model-assisted analysis supports crop and farming questions."},{label:"History & records",detail:"MongoDB stores application records and user history."}],
    challenges: [{title:"Useful guidance",body:"Translate model output into readable, task-specific assistance without implying that a prediction is a guaranteed diagnosis."},{title:"Provider boundaries",body:"Keep model integration separate from the interface so the application can evolve with its AI providers."},{title:"Connected workflows",body:"Give crop health, pest identification, soil guidance, and chat a consistent place in the product."}],
    features: ["Crop health assistance", "Pest identification", "Soil guidance", "AI farming chat", "Dashboard and history"],
    learning: "The model is one part of an AI product. Input quality, a clear interface, contextual guidance, and honest handling of uncertainty make the output more useful."
  },
  {
    id: "lipspeak", number: "04", title: "LIPSPEAK", subtitle: "Visual Speech Recognition", discipline: "COMPUTER VISION / ACCESSIBILITY", accent: "#b1bdcc", github: "https://github.com/santhosh18v/LipSpeak",
    description: "An AI system exploring lip reading and visual speech recognition to help improve communication accessibility.",
    technologies: ["Python", "PyTorch", "Computer Vision", "MediaPipe", "Deep Learning"],
    problem: "Speech contains visual information as well as sound. Learning from mouth movement is challenging because different speakers, lighting, and timing change the visual signal.",
    motivation: "Explore how visual speech recognition could contribute to communication accessibility through a focused computer vision research project.",
    architecture: [{label:"Video frames",detail:"A recorded sequence provides the visual speech input."},{label:"Face & mouth region",detail:"MediaPipe supports locating and preparing the relevant visual region."},{label:"Temporal learning",detail:"PyTorch models learn features and movement across a frame sequence."},{label:"Prediction & evaluation",detail:"Predicted labels are evaluated across examples and speakers."}],
    challenges: [{title:"Unseen speakers",body:"A model can perform well on familiar faces while struggling with a new speaker. Evaluation must test that difference."},{title:"Temporal information",body:"Lip reading depends on motion across frames, so frame preparation and sequence modeling both matter."},{title:"Real-world variation",body:"Account for changes in face position, lighting, and camera conditions when moving toward live inference."}],
    features: ["Video-based speech experiments", "Mouth-region preprocessing", "Deep learning with PyTorch", "Temporal visual feature modeling", "Speaker-aware evaluation"],
    learning: "A strong training result is only a beginning. Generalization to new speakers and real camera conditions is the central engineering challenge. This remains an exploratory accessibility project."
  }
];
