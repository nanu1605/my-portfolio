import React from 'react';
import { SkillsGrid } from './SkillsGrid'; // Import SkillsGrid component
import styled from 'styled-components';

// Styled section for Skills
const SkillsSection = styled.section`
  background-color: #fff;
  padding: 4em 2em;
  font-family: 'Pacifico', cursive;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 1em;
`;

const Skills = () => {
  return (
    <SkillsSection>
      <Title>My Skills</Title>
      <SkillsGrid /> {/* Display SkillsGrid component here */}
    </SkillsSection>
  );
};

export default Skills;
