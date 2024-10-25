import React from "react";
import {
  HomeSection,
  HeroTitle,
  HeroSubtitle,
  AnimatedPhoto,
  Quote,
  ButtonContainer,
  NavButton,
} from "./Styles/HomeStyles";
import { Link } from "react-scroll";
import Me from "../assets/Me.jpg";

const Home = () => {
  return (
    <HomeSection>
      <AnimatedPhoto src={Me} alt="Tanishq Jain" />
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
