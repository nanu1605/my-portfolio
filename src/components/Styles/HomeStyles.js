import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const HomeSection = styled.section`
  display: flex;
  font-family: "Pacifico", cursive;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2em;
  background: linear-gradient(135deg, #333, #4ca1af, #84b067);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 10s ease infinite;
  color: white;
  text-align: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 4em;
  margin-bottom: 0.5em;
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.5em;
  white-space: nowrap;
  overflow: hidden;
`;

export const AnimatedPhoto = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
`;

export const Quote = styled(motion.div)`
  font-size: 1.2em;
  color: #f5f5dc;
  max-width: 600px;
  text-align: center;
  margin-top: 1.5em;
  font-style: italic;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 2em;
`;

export const NavButton = styled(motion.div)`
  display: inline-block;
  padding: 0.8em 1.5em;
  border-radius: 30px;
  margin-left: 0.5em;
  background: linear-gradient(135deg, #84b067, #4ca1af);
  color: white;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, background 0.3s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    background: linear-gradient(135deg, #4ca1af, #84b067);
    transform: scale(1.2);
    z-index: 10;
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

export const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 2em;
  color: #fff;
  opacity: 0.8;
`;
export const floating = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};
