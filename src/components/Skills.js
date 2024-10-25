import React from 'react';
import { SkillsGrid } from './SkillsGrid'; // Import SkillsGrid component
import styled from 'styled-components';

// Styled section for Skills with new background gradient
const SkillsSection = styled.section`
  // background: linear-gradient(135deg, #333 0%, #F5F5DC 100%);
  background: linear-gradient(135deg, #333 0%, #F5F5DC 100%);
  padding: 4em 2em;
  font-family: 'Pacifico', cursive;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #fad0c4;
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
