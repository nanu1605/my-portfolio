import React from "react";
import { SkillsGrid } from "./SkillsGrid"; // Import SkillsGrid component
import { SkillsSection, Title } from "./Styles/SkillsStyles";

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Title>My Skills</Title>
      <SkillsGrid /> {/* Display SkillsGrid component here */}
    </SkillsSection>
  );
};

export default Skills;
