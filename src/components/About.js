import React from "react";
import { AboutSection, Title, Description } from "./Styles/AboutStyles";
const About = () => {
  return (
    <AboutSection id="about">
      {/* Fancy Title */}
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </Title>

      {/* Animated description paragraph */}
      <Description
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I’m a DevOps Engineer specializing in CI/CD pipelines, containerization,
        and automation at BOSCH Global Software Technologies. My experience
        includes building scalable deployment solutions with Jenkins, Docker,
        and Kubernetes, streamlining processes that enhance application
        reliability and reduce manual work. I also developed a “docs-as-code”
        framework with DocHub, automating documentation and improving
        accessibility.
        <br />
        In addition to DevOps, I enjoy tackling open-source projects. My recent
        work in Google Summer of Code involved enhancing R packages for CRAN
        compliance, and my personal projects include a Virtual Dressing Room
        with AI and an automated Attendance System. With a passion for
        technology-driven solutions, I aim to make a positive impact through
        development and operations.
        <br />
      </Description>
    </AboutSection>
  );
};

export default About;
