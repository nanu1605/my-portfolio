import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Particle background
const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent 50%);
`;

// Section container for experience
const ExperienceSection = styled.section`
  position: relative;
  background: linear-gradient(135deg, #F5F5DC 0%, #4ca1af 100%);
  // background: linear-gradient(135deg, #F5F5DC 0%, #333 100%);
  padding: 4em 2em;
  text-align: center;
  overflow: hidden;
`;

// Title for the section
const Title = styled.h1`
  font-size: 3em;
  font-family: 'Pacifico', cursive;
  color: #333;
  margin-bottom: 2em;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
`;

// Floating Card container
const ExperienceList = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3em;
  perspective: 1000px; /* 3D perspective */
`;

// Individual experience card with floating effect
// Individual experience card with floating effect
const ExperienceItem = styled(motion.div)`
  background: linear-gradient(135deg, #333 0%, #84b067 100%);
  font-family: 'Pacifico', cursive;
  border-radius: 15px;
  padding: 2em; /* Initial padding */
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.6s ease, box-shadow 0.6s ease, padding 0.6s ease; /* Added padding transition */
  position: relative;
  background-size: 200% 200%;
  transform: rotate3d(1, 1, 1, 10deg);
  cursor: pointer;
  z-index: 1; /* Default z-index */
  overflow: hidden; /* Ensure content stays inside the card */

  &:hover {
    transform: scale(1.2) rotate3d(1, 1, 1, 360deg);
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.5);
    padding: 2em; /* Increase padding on hover to allow more space */
    background-position: right center;
    z-index: 10; /* Bring the card above all other components on hover */
  }

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    z-index: -1;
    border-radius: 20px;
    filter: blur(10px);
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #fff;
  line-height: 1.8;
  transform: perspective(400px);
  transition: transform 0.6s ease;

  ${ExperienceItem}:hover & {
    transform: perspective(800px); /* Remove scale and only apply perspective */
  }
`;


// Rotating title for job roles
const JobTitle = styled.h3`
  font-size: 2.2em;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.5em;
  transition: color 0.5s ease;
  transform: rotate(0deg);

  ${ExperienceItem}:hover & {
    color: #333; /* Job Title */
    transform: rotate(360deg); /* Rotate title on hover */
  }
`;

const Company = styled.h4`
  font-size: 1.5em;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1em;
  transition: color 0.5s ease;
  transform: rotate(0deg);

  ${ExperienceItem}:hover & {
    color: #333;
    transform: rotateY(360deg); /* Rotate company in 3D */
  }
`;

const Timeline = styled.h5`
  font-size: 1.1em;
  color: #ccc;
  margin-bottom: 1em;
`;



// Add particles or custom floating animations (optional)
const FloatingParticles = () => {
  useEffect(() => {
    // You can add a custom particle animation library here, or simple canvas animations.
  }, []);

  return <ParticleContainer />;
};

const Experience = () => {
  return (
    <ExperienceSection>
      <FloatingParticles />
      <Title>My Experience</Title>
      <ExperienceList
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeInOut', staggerChildren: 0.4 } },
        }}
      >
        {/* Experience Items */}
        <ExperienceItem>
          <JobTitle>Associate Software Engineer</JobTitle>
          <Company>BOSCH Global Software Technologies, Bangalore, India</Company>
          <Timeline>Jul. 2023 - Present</Timeline>
          <JobTitle>DevOps Engineer</JobTitle>
          <Description>
            • Architected and maintained CI/CD pipelines, automating testing, building, and deployment processes.<br />
            • Engineered a custom Jenkins Plugin, reducing build times by 40% and increasing deployment accuracy by 25%.<br />
            • Spearheaded Docker containerization, boosting application scalability by 30% and reducing deployment time by 50%.<br />
            • Implemented auto-scaling in Kubernetes, reducing manual intervention by 60%.<br />
            • Designed automation scripts in Python and Shell, saving 20 hours weekly and elevating task completion by 35%.<br />
          </Description>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Full Stack Engineer</JobTitle>
          <Company>BOSCH Global Software Technologies, Bangalore, India</Company>
          <Description>
            • Developed a “docs-as-code” framework, reducing manual effort by 40 hours monthly.<br />
            • Created an automated visualization tool integrating Sphinx with Graphviz and PlantUML.<br />
            • Developed CI/CD-driven documentation solutions, integrating SCM tools like GitHub and Azure DevOps.<br />
            • Deployed a role-based access control strategy on cloud infrastructure ensuring zero data breaches.<br />
            • Automated Sphinx documentation publishing, reducing manual formatting by 15 hours weekly.<br />
          </Description>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Google Summer of Code Contributor</JobTitle>
          <Company>Google Summer of Code 2022 - PEcAn Projects</Company>
          <Timeline>Jun. 2022 - Sept 2022</Timeline>
          <Description>
            • Refactored 10+ R packages for CRAN compliance, improving code quality and maintainability.<br />
            • Optimized download processes for PEcAn packages, resulting in 40% faster download speeds.<br />
            • Engineered critical functions in R to eliminate non-CRAN dependencies, reducing software maintenance overhead by 40%.<br />
          </Description>
        </ExperienceItem>
      </ExperienceList>
    </ExperienceSection>
  );
};

export default Experience;
