import React from "react";
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  SkillList,
  SkillItem,
} from "./Styles/SkillsStyles";

export const SkillsCard = ({ title, skills, color }) => {
  return (
    <CardContainer>
      <CardInner whileHover={{ rotateY: 180, scale: 1.1 }} /* Flip on hover */>
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
