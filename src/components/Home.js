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
      {/* Floating Icons */}
      <FloatingIcon
        style={{ top: "15%", left: "10%" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🐳
      </FloatingIcon>
      <FloatingIcon
        style={{ top: "20%", right: "10%" }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ☁️
      </FloatingIcon>
      <FloatingIcon
        style={{ bottom: "15%", left: "15%" }}
        animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ⚙️
      </FloatingIcon>
      <FloatingIcon
        style={{ bottom: "20%", right: "15%" }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        📊
      </FloatingIcon>

      <AnimatedPhoto
        src={Me}
        alt="Tanishq Jain"
        initial="initial"
        animate="animate"
        variants={floating}
      />

      <HeroTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Tanishq Jain
      </HeroTitle>
      <HeroSubtitle
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        DevOps Engineer | Full-Stack Developer
      </HeroSubtitle>
      <Quote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
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
