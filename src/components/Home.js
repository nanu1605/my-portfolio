import React from "react";

import {
  HomeSection,
  HeroTitle,
  HeroSubtitle,
  AnimatedPhoto,
  Quote,
  ButtonContainer,
  NavButton,
  FloatingIcon,
  floating,
} from "./Styles/HomeStyles";
import { Link } from "react-scroll";
import Me from "../assets/Me.jpg";

const Home = () => {
  return (
    <HomeSection>
      <FloatingIcon style={{ top: '15%', left: '10%' }}>🐳</FloatingIcon> {/* Docker icon */}
      <FloatingIcon style={{ top: '20%', right: '10%' }}>☁️</FloatingIcon> {/* Cloud icon */}
      <FloatingIcon style={{ bottom: '15%', left: '15%' }}>⚙️</FloatingIcon> {/* Gear icon */}
      <FloatingIcon style={{ bottom: '20%', right: '15%' }}>📊</FloatingIcon> {/* Analytics icon */}

      <AnimatedPhoto
        src={Me}
        alt="Tanishq Jain"
        initial="initial"
        animate="animate"
        variants={floating}
      />
      <HeroTitle>Hi, I'm Tanishq Jain</HeroTitle>
      <HeroSubtitle>DevOps Engineer | Full-Stack Developer</HeroSubtitle>
      <Quote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        "Turning ideas into reality through code and automation."
      </Quote>

      <ButtonContainer>
        <Link to="about" smooth={true} duration={800}>
          <NavButton>About</NavButton>
        </Link>
        <Link to="experience" smooth={true} duration={800}>
          <NavButton>Experience</NavButton>
        </Link>
        <Link to="skills" smooth={true} duration={800}>
          <NavButton>Skills</NavButton>
        </Link>
        <Link to="projects" smooth={true} duration={800}>
          <NavButton>Projects</NavButton>
        </Link>
        <Link to="contact" smooth={true} duration={800}>
          <NavButton>Contact</NavButton>
        </Link>
      </ButtonContainer>
    </HomeSection>
  );
};

export default Home;
