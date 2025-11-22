export interface Post {
  title: string;
  experience: string;
  description: string;
  requiredSkills: string[];
  applyUrl: string;
}

export const dummyPosts: Post[] = [
  {
    title: "Frontend Developer",
    experience: "2+ years",
    description: "Work on modern web applications using React and Next.js.",
    requiredSkills: ["React", "Next.js", "JavaScript", "CSS"],
    applyUrl: "https://example.com/apply/frontend",
  },
  {
    title: "Backend Developer",
    experience: "3+ years",
    description: "Develop robust backend services with Node.js and Express.",
    requiredSkills: ["Node.js", "Express", "MongoDB", "REST API"],
    applyUrl: "https://example.com/apply/backend",
  },
  {
    title: "Full Stack Engineer",
    experience: "4+ years",
    description: "Build and maintain full stack applications.",
    requiredSkills: ["React", "Node.js", "TypeScript", "SQL"],
    applyUrl: "https://example.com/apply/fullstack",
  },
  {
    title: "UI/UX Designer",
    experience: "2+ years",
    description: "Design user interfaces and improve user experience.",
    requiredSkills: ["Figma", "Sketch", "Adobe XD", "User Research"],
    applyUrl: "https://example.com/apply/uiux",
  },
  {
    title: "DevOps Engineer",
    experience: "3+ years",
    description: "Manage CI/CD pipelines and cloud infrastructure.",
    requiredSkills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    applyUrl: "https://example.com/apply/devops",
  },
];
