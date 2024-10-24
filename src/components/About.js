import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4em;
  background: #f4f4f4;
  color: #333;
`;

export const About = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <p>
        I'm a DevOps Engineer at BOSCH Global Software Technologies with experience in automating CI/CD pipelines, Docker, Kubernetes, and more.
      </p>
    </AboutSection>
  );
};

export default About;