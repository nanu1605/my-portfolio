import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

// Section container for About Me
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

//Skills.js
export const AboutSection = styled.section`
  // background: linear-gradient(135deg, #333 0%, #F5F5DC 100%);
  background: linear-gradient(135deg, #333 0%, #f5f5dc 100%);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 10s ease infinite;
  padding: 4em 2em;
  font-family: "Pacifico", cursive;
  text-align: center;
  color: white;
`;

export const Title = styled.h1`
  font-size: 3em;
  color: #333;
  margin-bottom: 1em;
`;
// Animated paragraph
export const Description = styled(motion.p)`
  font-size: 1.5em;
  line-height: 1.8;
  max-width: 1300px;
  margin: 0 auto;
  text-align: justify;
  color: white;
`;