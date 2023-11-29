"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a studying{" "}
        <span className="font-medium">Information Technology</span> at Netaji
        Subhas University of Technology, here I decided my passion for
        programming. Through bootcamps and 3 internships, I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is to
        build new applications and watch them have an impact. I also{" "}
        <span className="underline">love</span> the feeling of solving problems.
        I have solved over <span className="font-medium">400 Leetcode</span>{" "}
        problems. My core web development stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, SQL and MongoDB
        </span>
        . I also developed apps in{" "}
        <span className="italic">Python, Java and Flutter</span>. I am also
        familiar with JavaScript, C++, TypeScript, Prisma and Firebase. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, trekking, lego building and playing
        football. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about the <span className="font-medium">arduino</span>.
      </p>
    </motion.section>
  );
}
