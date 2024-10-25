import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container for the contact section
const ContactSection = styled.section`
  background: linear-gradient(135deg, #333 0%, #F5F5DC 100%);
  padding: 3em 2em;
  text-align: center;
  font-family: 'Pacifico', cursive;
`;

// Title for the section
const Title = styled.h1`
  font-size: 2.5em;
  color: #fad0c4;
  margin-bottom: 1em;
`;

// Fancy and animated contact button
const ContactButton = styled.a`
  background-color: #84b067; /* Initial background color */
  color: white;
  padding: 1em 2em;
  text-decoration: none;
  border-radius: 50px;
  margin-top: 1em;
  display: inline-block;
  font-size: 1.2em;
  text-transform: uppercase;
  transition: background-color 0.6s ease, transform 0.3s ease; /* Smooth background-color transition */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #2c3e50; /* Smooth color change on hover */
    transform: translateY(-5px); /* Lifts the button slightly on hover */
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.4); /* Deepens shadow on hover */
  }

  &:active {
    transform: translateY(2px); /* Press effect on click */
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;


// Contact info styled component
const ContactInfo = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column; /* Align items vertically */
  align-items: center; /* Center the content */
  gap: 1em; /* Space between items */
`;

// Animated contact detail items
const InfoItem = styled(motion.p)`
  font-size: 1.3em;
  margin: 0.1em 0;
  color: #333;
  display: block; /* Ensure each item is a block */
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #fff;
    transform: scale(1.05); /* Slight enlargement on hover */
    cursor: pointer;
  }
`;

const Link = styled.a`
  color: #F5F5DC;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #fecfef;
    text-decoration: underline;
    transform: scale(1.1); /* Enlarges link slightly on hover */
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <Title>Contact Me</Title>
      <ContactButton href="mailto:tanishqjain010@gmail.com">Send me an Email</ContactButton>
      
      <ContactInfo>
        {/* LinkedIn */}
        <InfoItem>
          LinkedIn: <Link href="https://www.linkedin.com/in/tanishqjain010/" target="_blank">Tanishq Jain</Link>
        </InfoItem>

        {/* Slack Username */}
        <InfoItem>Slack: nanu1605</InfoItem>

        {/* GitHub */}
        <InfoItem>
          GitHub: <Link href="https://github.com/nanu1605" target="_blank">nanu1605</Link>
        </InfoItem>
      </ContactInfo>
    </ContactSection>
  );
};

export default Contact;
