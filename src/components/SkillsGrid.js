import React from 'react';
import styled from 'styled-components';
import { SkillsCard } from './SkillsCard';

// Styled container for the horizontal layout
const HorizontalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em; /* Space between cards */
  padding: 2em;
  flex-wrap: wrap; /* Wrap cards if screen is too narrow */
`;

// Sample data for skills categories
const skillsData = [
  {
    title: 'Languages',
    skills: ['Python', 'R', 'Java', 'Go', 'SQL', 'JavaScript'],
    color: '#4CAF50',
  },
  {
    title: 'Frameworks',
    skills: ['ReactJS', 'Selenium', 'JUnit', 'TestNG'],
    color: '#E91E63',
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'Docker', 'Kubernetes', 'Maven', 'Jenkins', 'Terraform', 'Azure', 'AWS'],
    color: '#00BCD4',
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
