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
    name: "Rehmat",
    role: "Founder & CEO",
    image: "/images/team/rehmat.svg",
    bio: "Software engineer with 5+ years of experience building scalable systems for startups and enterprises.",
    social: {
      linkedin: "https://linkedin.com/in/rehmat",
      github: "https://github.com/rehmat",
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
