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
    name: "Aisha Verma",
    role: "CTO",
    image: "/images/team/aisha.svg",
    bio: "Full-stack developer specializing in cloud architecture and distributed systems.",
    social: {
      linkedin: "https://linkedin.com/in/aishaverma",
      github: "https://github.com/aishaverma",
    },
  },
  {
    id: 3,
    name: "Daniel Cruz",
    role: "Lead Product Designer",
    image: "/images/team/daniel.svg",
    bio: "Product designer focused on clean, accessible interfaces for B2B software.",
    social: {
      linkedin: "https://linkedin.com/in/danielcruz",
    },
  },
];
