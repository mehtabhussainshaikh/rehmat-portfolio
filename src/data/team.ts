export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mehtab Shaikh",
    role: "Founder & CEO",
    image: "https://pub-82f7463d8b074a0c96f61eb289378ccb.r2.dev/mehtab.jpeg",
    bio: "Software engineer and technology leader focused on turning business challenges into reliable, scalable digital products. Mehtab leads product strategy, technical direction, and client partnerships with an emphasis on clear communication and long-term value.",
    social: {
      linkedin: "https://linkedin.com/in/mehtabshaikh",
      github: "https://github.com/mehtabhussainshaikh",
    },
  },
  {
    id: 2,
    name: "Jatin Vishwakarma",
    role: "Co-Founder & Software Engineer",
    image: "https://pub-82f7463d8b074a0c96f61eb289378ccb.r2.dev/jatin.png",
    bio: "Full-stack engineer experienced in backend architecture, payment platforms, real-time applications, and scalable cloud services. Jatin works across Python, Node.js, React, and modern infrastructure to deliver dependable systems from architecture through production.",
    social: {
      github: "https://github.com/jatin7425",
    },
  },
];
