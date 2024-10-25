import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Section container for About Me
const AboutSection = styled.section`
  padding: 4em;
  background: linear-gradient(135deg, #333 0%, #F5F5DC 100%);
  color: white;
  text-align: center;
  min-height: 40vh;
`;

// Animated section title
const Title = styled(motion.h2)`
  font-size: 3em;
  margin-bottom: 1em;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: -webkit-linear-gradient(135deg, #ff9a9e, #fad0c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Animated paragraph
const Description = styled(motion.p)`
  font-size: 1.2em;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  color: white;
`;

const About = () => {
  return (
    <AboutSection>
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
        I'm a DevOps Engineer at BOSCH Global Software Technologies with experience in automating CI/CD pipelines, Docker, Kubernetes, and more. I am passionate about optimizing deployment processes and ensuring smooth and scalable infrastructures.
      </Description>
    </AboutSection>
  );
};

export default About;
