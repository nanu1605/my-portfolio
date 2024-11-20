import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

// Particle background
export const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.1),
    transparent 50%
  );
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Section container for experience
export const ExperienceSection = styled.section`
  position: relative;
  background: linear-gradient(135deg, #f5f5dc 0%, #4ca1af 100%);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 10s ease infinite;
  // background: linear-gradient(135deg, #F5F5DC 0%, #333 100%);
  padding: 4em 2em;
  text-align: center;
  overflow: hidden;
`;

// Title for the section
export const Title = styled.h1`
  font-size: 3em;
  font-family: "Pacifico", cursive;
  color: #333;
  margin-bottom: 2em;
  letter-spacing: 3px;
  position: relative;
`;

// Floating Card container
export const ExperienceList = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3em;
  perspective: 1000px; /* 3D perspective */
`;

export const ExperienceItem = styled(motion.div)`
  background: linear-gradient(135deg, #333 0%, #84b067 100%);
  font-family: "Pacifico", cursive;
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
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
    z-index: -1;
    border-radius: 20px;
    filter: blur(10px);
  }
`;

export const Description = styled.p`
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
export const JobTitle = styled.h3`
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

export const Company = styled.h4`
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

export const Timeline = styled.h5`
  font-size: 1.1em;
  color: #ccc;
  margin-bottom: 1em;
`;
