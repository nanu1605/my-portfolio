import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const ContactSection = styled.section`
  background: linear-gradient(135deg, #333 0%, #f5f5dc 100%);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 10s ease infinite;
  padding: 3em 2em;
  text-align: center;
  font-family: "Pacifico", cursive;
`;

// Title for the section
export const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 1em;
`;

// Fancy and animated contact button
export const ContactButton = styled.a`
  text-decoration: none;
  border-radius: 50px;
  margin-top: 1em;
  margin-left: 1em;
  font-size: 1.2em;
  text-transform: uppercase;
  transition: background-color 0.6s ease, transform 0.3s ease; /* Smooth background-color transition */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  display: inline-block;
  padding: 0.8em 1.5em;
  background: linear-gradient(135deg, #84b067, #4ca1af);
  color: white;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #4ca1af, #84b067);
    transform: scale(1.1);
    z-index: 10;
  }

  &:active {
    transform: translateY(2px); /* Press effect on click */
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: skewX(-25deg);
    transition: left 0.7s ease;
  }

  &:hover:before {
    left: 150%;
  }
`;

// Contact info styled component
export const ContactInfo = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column; /* Align items vertically */
  align-items: center; /* Center the content */
  gap: 1em; /* Space between items */
`;

// Animated contact detail items
export const InfoItem = styled(motion.p)`
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

export const Link = styled.a`
  color: #f5f5dc;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #fecfef;
    text-decoration: underline;
    transform: scale(1.1); /* Enlarges link slightly on hover */
  }
`;
