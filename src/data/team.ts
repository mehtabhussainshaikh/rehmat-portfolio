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
    bio: "With over three years of experience in software development, I specialize in building reliable, scalable, and user-focused digital solutions. As the founder of the company, I combine technical expertise with a commitment to helping businesses solve real-world problems through modern technology.",
    social: {
      linkedin: "https://linkedin.com/in/mehtabshaikh",
      github: "https://github.com/mehtabhussainshaikh",
    },
  },
  {
    id: 2,
    name: "Jatin Vishwakarma",
    role: "Founder & Software Developer",
    image: "https://pub-82f7463d8b074a0c96f61eb289378ccb.r2.dev/jatin.png",
    bio: "Full-stack engineer with 2+ years of professional experience building production-grade systems using Python, Node.js, React, and cloud platforms. Proven expertise in backend architecture, payment systems, real-time applications, and scalable microservices. Rapidly escalated from intern to Software Engineer with a strong track record in end-to-end delivery and technical leadership.",
    social: {
      github: "https://github.com/jatin7425",
    },
  },
];
