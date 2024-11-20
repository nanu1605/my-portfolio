import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

//Skills.js
export const SkillsSection = styled.section`
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

//SkillsCard.js
export const CardContainer = styled.div`
  width: 240px;
  height: 260px;
  perspective: 1000px;
  margin: 1.5em;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  /* Scale effect on hover */
  &:hover {
    transform: scale(1.2);
  }
`;

// Inner card with conditional rotation and scale effect for flip
export const CardInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ flipped }) =>
    flipped ? "rotateY(180deg) scale(1.1)" : "rotateY(0) scale(1)"};
`;

// Front of the card
export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 30px;
  font-family: "Pacifico", cursive;
  background-color: ${({ color }) => color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  backface-visibility: hidden;
  padding: 20px;
`;

// Back of the card
export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: "Pacifico", cursive;
  background-color: ${({ color }) => color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 20px;
`;

export const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
`;

export const SkillItem = styled.li`
  margin: 0.5em 0;
`;

//SkillsGrid.js
export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em; /* Space between cards */
  padding: 2em;
  flex-wrap: wrap; /* Wrap cards if screen is too narrow */
`;
