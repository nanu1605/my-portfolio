import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled container for the card
const CardContainer = styled.div`
  width: 240px;
  height: 260px;
  perspective: 1000px;
  margin: 1.5em;
`;

const CardInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s, scale 0.3s; /* Reduced transition time for faster flip */
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg) scale(1.1)' : 'rotateY(0) scale(1)')}; /* Scale up on flip */
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 30px;
  font-family: 'Pacifico', cursive;
  background-color: ${({ color }) => color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  backface-visibility: hidden;
  padding: 20px;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: 'Pacifico', cursive;
  background-color: ${({ color }) => color}; /* Same background color as front */
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

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
`;

const SkillItem = styled.li`
  margin: 0.5em 0;
`;

export const SkillsCard = ({ title, skills, color }) => {
  return (
    <CardContainer>
      <CardInner
        whileHover={{ rotateY: 180, scale: 1.1 }} /* Flip on hover */
      >
        {/* Front side of the card */}
        <CardFront color={color}>
          {title}
        </CardFront>

        {/* Back side of the card */}
        <CardBack color={color}>
          <SkillList>
            {skills.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};
