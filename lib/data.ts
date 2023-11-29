import Quizlify from "@/public/quizlify.png";
import CryptoNewt from "@/public/cryptoNewt.png";
import ABCC from "@/public/abcc.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern - Venture Gulf Engineering",
    location: "Industrial Area, Qatar",
    description:
      "Collaborated to build and maintain data servers, resulting in a 10% increase in server capacity and improved overall system reliability.",
    icon: "https://media.licdn.com/dms/image/C4D0BAQGRv18cOHQV0w/company-logo_200_200/0/1631370490391/vengulfoilandgas_logo?e=1709164800&v=beta&t=oq0u2u1jcrmqI3qU8pDg1u01nUnhFMYONPxuQIxYP5c",
    date: "Dec 2021 - Jan 2022",
  },
  {
    title: "SDE Intern - Qatar Design Consortium",
    location: "Doha",
    description:
      "Worked on the project management portal with over 10 modules. Implemented a summarising dashboard for better data visualization and UI enhancements, ensuring theme coordination.",
    icon: "https://media.licdn.com/dms/image/C4D0BAQFkqQ2hxgy7Cg/company-logo_200_200/0/1631329880279?e=1709164800&v=beta&t=h6L76xyuy02PsK12o887SPcNfneGTvFG2OQARGJls8w",
    date: "Jan 2022 - Mar 2022",
  },
  {
    title: "SDE Intern - Petrotec",
    location: "Doha, Qatar",
    description:
      "Developed a Next.JS application for tracking IT complaints and notifications. Implemented login mechanisms using Next Auth. Created API calls for CRUD operations on the complaints table.",
    icon: "https://media.licdn.com/dms/image/D4D0BAQHkt1da-i6HJQ/company-logo_200_200/0/1686038907238/petrotec_logo?e=1709164800&v=beta&t=fd1AFQVK6IFwlRblhHvO0xG-iALNbEDidD8SbeDB8gc",
    date: "May 2023 - July 2023",
  },
] as const;

export const projectsData = [
  {
    title: "AnyBody Can Chat",
    description:
      "ABCC is a messaging platform, boasting end-to-end encryption, innovative automatic translation feature for seamless chat and Stripe API for a paywall.",
    tags: [
      "Next.js",
      "Firebase",
      "Tailwind",
      "Zustand",
      "Radix UI",
      "Stripe API",
    ],
    imageUrl: ABCC,

    projectURL:
      "https://anybody-can-chat-alphanewton-alphanewtons-projects.vercel.app/",
  },
  {
    title: "Quizlify",
    description:
      "Quizlify is a quiz app that allows you to create custom quizzes, save and share them. It has a unique ranking system and an integrated word cloud.",
    tags: ["Next.js", "Tailwind", "Shadcn", "Zod", "Prisma"],
    imageUrl: Quizlify,
    projectURL: "https://quizlify.vercel.app/",
  },
  {
    title: "CryptoNewt",
    description:
      "Developed a user-friendly web app offering quick access to comprehensive crypto coin data. Users can save and monitor coins.",
    tags: ["React.js", "Firebase", "Prisma", "Tailwind"],
    imageUrl: CryptoNewt,
    projectURL: "https://newtdoescrypto.web.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Python",
  "Flutter",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Java",
  "C++",
  "Data Structures and Algorithms",
] as const;
