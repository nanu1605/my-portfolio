import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Me.jpg';

// Home section styling
const HomeSection = styled.section`
  display: flex;
  font-family: 'Pacifico', cursive;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2em;
  background: linear-gradient(135deg, #333, #4ca1af);
  color: white;
  text-align: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

// Title and subtitle
const HeroTitle = styled.h1`
  font-size: 4em;
  margin-bottom: 0.5em;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5em;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
  
  @keyframes typing {
    from { width: 0 }
    to { width: 28% }
  }
  
  @keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: white; }
  }
`;

// Floating photo with animation
const AnimatedPhoto = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
`;

const Quote = styled(motion.div)`
  font-size: 1.2em;
  color: #f5f5dc;
  max-width: 600px;
  text-align: center;
  margin-top: 1.5em;
  font-style: italic;
`;

// Floating animation
const floating = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

// Floating icons around photo
const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 1.5em;
  color: #fff;
  opacity: 0.7;
`;

const Home = () => {
  return (
    <HomeSection>
      {/* Floating skill icons */}
      <FloatingIcon style={{ top: '15%', left: '10%' }}>🐳</FloatingIcon> {/* Docker icon */}
      <FloatingIcon style={{ top: '20%', right: '10%' }}>☁️</FloatingIcon> {/* Cloud icon */}
      <FloatingIcon style={{ bottom: '15%', left: '15%' }}>⚙️</FloatingIcon> {/* Gear icon */}
      <FloatingIcon style={{ bottom: '20%', right: '15%' }}>📊</FloatingIcon> {/* Analytics icon */}

      {/* Main content */}
      <AnimatedPhoto
        src={Me}
        alt="Tanishq Jain"
        initial="initial"
        animate="animate"
        variants={floating}
      />
      <HeroTitle>Hi, I'm Tanishq Jain</HeroTitle>

      {/* Typewriter subtitle */}
      <HeroSubtitle>DevOps Engineer | Full-Stack Developer</HeroSubtitle>

      {/* Quote Section */}
      <Quote initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
        "Turning ideas into reality through code and automation."
      </Quote>
    </HomeSection>
  );
};

export default Home;
