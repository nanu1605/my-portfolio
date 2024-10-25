import React from "react";
import {
  ProjectsSection,
  Title,
  ProjectsGrid,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
} from "./Styles/ProjectsStyles";

const Projects = () => {
  // Project data array
  const projectData = [
    {
      title: "Virtual Dressing Room",
      description:
        "A virtual try-on experience powered by augmented reality to simulate outfits",
      link: "https://github.com/nanu1605/virtual-dressing-room",
    },
    {
      title: "My Portfolio",
      description:
        "An interactive and animated developer portfolio showcasing projects, skills, and experience with a modern, responsive design",
      link: "https://github.com/nanu1605/my-portfolio",
    },
    {
      title: "Attendance System",
      description:
        "A smart attendance system utilizing facial recognition for automated check-ins",
      link: "https://github.com/nanu1605/attendance-system",
    },
    {
      title: "Rain Forecast using AUTO ARIMA Model",
      description:
        "The machine learning model uses Linear Regression Model to forecast rain in a certain area",
      link: "https://github.com/nanu1605/Rain-forecast-using-AUTO-ARIMA-model",
    },
    {
      title: "Basic Calculator Flutter App",
      description:
        "Calculator app in Flutter for basic arithmetic on mobile, web, and desktop",
      link: "https://github.com/nanu1605/flutter_calculator",
    },
    // Add more projects here...
  ];

  return (
    <ProjectsSection id="projects">
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
