// src/components/BackToTopButton.js

import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const TopButton = styled.button`
  position: fixed;
  bottom: 2em;
  right: 2em;
  background: linear-gradient(135deg, #84b067, #4ca1af);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5em;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(135deg, #4ca1af, #84b067);
  }
`;

const BackToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800, // Duration of the scroll effect
      smooth: true,
    });
  };

  return <TopButton onClick={scrollToTop}>↑</TopButton>;
};

export default BackToTopButton;
