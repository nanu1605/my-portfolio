import React, { useState } from "react";
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  SkillList,
  SkillItem,
} from "./Styles/SkillsStyles";

export const SkillsCard = ({ title, skills, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <CardInner flipped={isFlipped}>
        {/* Front side of the card */}
        <CardFront color={color}>{title}</CardFront>

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
