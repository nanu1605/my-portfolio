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
            • Architected and maintained CI/CD pipelines, automating testing, building, and deployment processes, which slashed deployment time by 60% and improved application availability by 20%.<br />
            • Engineered a custom Jenkins Plugin tailored to streamline internal processes for the community, resulting in a 40% reduction in build times and a 25% increase in deployment accuracy.<br />
            • Spearheaded the implementation and management of Docker containerization, leading to a 30% increase in application scalability and reducing deployment time by 50%.<br />
            • Led the implementation of auto-scaling in Kubernetes, resulting in a 60% reduction in manual intervention, increasing system responsiveness during peak loads, and saving 20 hours per week in operational tasks.<br />
            • Designed and Authored automation scripts in Python and Shell, enhancing daily operations by saving 20 hours weekly and elevating task completion rates by 35%.<br />
          </Description>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Full Stack Engineer</JobTitle>
          <Company>BOSCH Global Software Technologies, Bangalore, India</Company>
          <Description>
            • Brainstormed an accessible “docs-as-code” framework with DocHub aimed at simplifying document processes, allowing teams to focus on core activities by decreasing manual effort by 40 hours monthly.<br />
            • Developed an automated visualization tool integrating Sphinx with Graphviz and PlantUML that generated complex UML diagrams effortlessly, enhanced the quality of technical documentation while saving team members 15 hours monthly on visual tasks.<br />
            • Created a CI/CD-driven documentation solution, integrating Source Code Management (SCM) tools such as GitHub, GitLabs, and Azure DevOps, ensuring that documentation stays in sync with software releases.<br />
            • Deployed an innovative, secure role-based access control (RBAC) strategy on cloud infrastructure which facilitated controlled visibility into project documents across departments with zero data breaches reported.<br />
            • Implemented a fully automated CI/CD pipeline that transformed rst files into HTML utilizing Sphinx, resulting in seamless documentation publishing and reducing time spent on manual formatting by over 15 hours weekly.<br />
          </Description>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Google Summer of Code Contributor</JobTitle>
          <Company>Google Summer of Code 2022 - PEcAn Projects</Company>
          <Timeline>Jun. 2022 - Sept 2022</Timeline>
          <Description>
            • Refactored 10+ R packages for CRAN compliance, improving code quality and maintainability.<br />
            • Selected as a Google Summer of Code (GSoC) student for the PEcAn project in 2022, contributing to the integration of packages into CRAN (Comprehensive R Archive Network).<br />
            • Directed the refactoring of 10+ R packages, ensuring compliance with CRAN guidelines and enhancing code quality and maintainability by 30%.<br />
            • Engineered critical functions in R to eliminate non-CRAN dependencies, optimizing code performance and reducing software maintenance overhead by 40%.<br />
            • Optimized the download process for users by enhancing accessibility to PEcAn packages, simplified installation through ’install.packages()’ command, resulting in 40% faster download speeds on personal machines.<br />
          </Description>
        </ExperienceItem>
      </ExperienceList>
    </ExperienceSection>
  );
};

export default Experience;
