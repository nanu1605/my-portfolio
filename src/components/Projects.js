import React from 'react';
import styled from 'styled-components';

// Section container
const ProjectsSection = styled.section`
  // background: linear-gradient(135deg, #fad0c4 0%, #4ca1af 100%);
  // background: linear-gradient(135deg, #F5F5DC 0%, #333 100%);
  background: linear-gradient(135deg, #F5F5DC 0%, #4ca1af 100%);
  padding: 4em 2em;
  text-align: center;
  font-family: 'Pacifico', cursive;
`;

// Section title
const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 2em;
`;

// Projects grid container
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
  max-width: 1200px;
  margin: 0 auto;
`;

// Individual project card with dynamic hover effects
const ProjectCard = styled.div`
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  border-radius: 15px;
  padding: 2em;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease, color 0.4s ease, z-index 0s;
  cursor: pointer;
  perspective: 1000px; /* For 3D perspective on hover */
  position: relative;   /* Make sure z-index works properly */

  &:hover {
    transform: scale(1.2) rotateY(10deg); /* Fancy 3D rotation and scaling */
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3); /* Deeper shadow */
    background: linear-gradient(135deg, #333 0%, #fecfef 100%); /* New background color on hover */
    z-index: 10; /* Bring the card above others */
  }
`;

// Project title
const ProjectTitle = styled.h3`
  font-size: 1.8em;
  color: #333;
  font-weight: bold;
  margin-bottom: 1em;
  transition: color 0.4s ease;

  ${ProjectCard}:hover & {
    color: #ffffff; /* Title color changes to white on hover */
  }
`;

// Project description
const ProjectDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 1em;
  transition: color 0.4s ease;

  ${ProjectCard}:hover & {
    color: #ffffff; /* Description color changes to white on hover */
  }
`;

// Project link button
const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #28a745;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #1d7a33;
    transform: translateY(-5px); /* Lift button slightly on hover */
  }
`;

const Projects = () => {
  // Project data array
  const projectData = [
    {
      title: 'Virtual Dressing Room',
      description: 'A virtual try-on experience powered by augmented reality to simulate outfits.',
      link: 'https://github.com/nanu1605/virtual-dressing-room',
    },
    {
      title: 'Attendance System',
      description: 'A smart attendance system utilizing facial recognition for automated check-ins.',
      link: 'https://github.com/nanu1605/attendance-system',
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'An automated CI/CD pipeline implementation using Jenkins and Docker.',
      link: 'https://github.com/nanu1605/cicd-pipeline',
    },
    
    // Add more projects here...
  ];

  return (
    <ProjectsSection>
      <Title>My Projects</Title>
      <ProjectsGrid>
        {projectData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
