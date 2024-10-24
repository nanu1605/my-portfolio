import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import your Me.jpg image
import Me from '../assets/Me.jpg'; // Adjust the path to match your file location

// Container for the home section
const HomeSection = styled.section`
  display: flex;
  font-family: 'Pacifico', cursive;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2em;
  background-color: #333;
  color: white;
  text-align: center;
  min-height: 100vh;
`;

// Container for the photo and text
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

// Title text
const HeroTitle = styled.h1`
  font-size: 4em;
  margin-bottom: 0.5em;
`;

// Subtitle text
const HeroSubtitle = styled.p`
  font-size: 1.5em;
`;

// Motion animation for the photo
const AnimatedPhoto = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
`;

// Animation settings for the floating effect
const floating = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

const Home = () => {
  return (
    <HomeSection>
      <ContentWrapper>
        {/* Animated photo */}
        <AnimatedPhoto
          src={Me} // Use the imported image here
          alt="Your Photo"
          initial="initial"
          animate="animate"
          variants={floating} // Applying the floating animation
        />

        {/* Title and subtitle */}
        <HeroTitle>Hi, I'm Tanishq Jain</HeroTitle>
        <HeroSubtitle>DevOps Engineer | Full-Stack Developer</HeroSubtitle>
      </ContentWrapper>
    </HomeSection>
  );
};

export default Home;
