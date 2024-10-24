import React from 'react';
import styled from 'styled-components';

// Container for the contact section
const ContactSection = styled.section`
  background-color: #f7f7f7;
  padding: 4em 2em;
  text-align: center;
`;

// Title for the section
const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 1em;
`;

// Contact button
const ContactButton = styled.a`
  background-color: #4CAF50;
  color: white;
  padding: 1em 2em;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1em;
  display: inline-block;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
`;

// Contact info styled component
const ContactInfo = styled.div`
  margin: 2em 0;
`;

const InfoItem = styled.p`
  font-size: 1.2em;
  margin: 0.5em 0;
`;

const Link = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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

        {/* Mobile Number */}
        <InfoItem>Mobile: +91-9479811499</InfoItem>

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
