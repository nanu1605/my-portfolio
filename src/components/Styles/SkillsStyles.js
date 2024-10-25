import styled from "styled-components";
import { motion } from "framer-motion";

//Skills.js
export const SkillsSection = styled.section`
  // background: linear-gradient(135deg, #333 0%, #F5F5DC 100%);
  background: linear-gradient(135deg, #333 0%, #f5f5dc 100%);
  padding: 4em 2em;
  font-family: "Pacifico", cursive;
  text-align: center;
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #fad0c4;
  margin-bottom: 1em;
`;

//SkillsCard.js
// Styled container for the card
export const CardContainer = styled.div`
  width: 240px;
  height: 260px;
  perspective: 1000px;
  margin: 1.5em;
`;

export const CardInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s, scale 0.3s; /* Reduced transition time for faster flip */
  transform: ${({ flipped }) =>
    flipped
      ? "rotateY(180deg) scale(1.1)"
      : "rotateY(0) scale(1)"}; /* Scale up on flip */
`;

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

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: "Pacifico", cursive;
  background-color: ${({ color }) =>
    color}; /* Same background color as front */
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
// Styled container for the horizontal layout
export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em; /* Space between cards */
  padding: 2em;
  flex-wrap: wrap; /* Wrap cards if screen is too narrow */
`;
