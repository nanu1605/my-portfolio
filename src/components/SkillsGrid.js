import React from "react";
import { SkillsCard } from "./SkillsCard";
import { HorizontalContainer } from "./Styles/SkillsStyles";

// Sample data for skills categories
const skillsData = [
  {
    title: "Languages",
    skills: ["Python", "R", "Java", "Go", "SQL", "JavaScript"],
    color: "#4CAF50",
  },
  {
    title: "Frameworks",
    skills: ["ReactJS", "Selenium", "JUnit", "TestNG"],
    color: "#E91E63",
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "Docker",
      "Kubernetes",
      "Maven",
      "Jenkins",
      "Terraform",
      "Azure",
      "AWS",
    ],
    color: "#00BCD4",
  },
];

export const SkillsGrid = () => {
  return (
    <HorizontalContainer>
      {skillsData.map((category, index) => (
        <SkillsCard
          key={index}
          title={category.title}
          skills={category.skills}
          color={category.color}
        />
      ))}
    </HorizontalContainer>
  );
};
