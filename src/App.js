import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const getStarted = () => {
    navigate("/signin");
  };

  return (
    <Background>
      <Title>Your Personal Calendar</Title>
      <StartButton onClick={getStarted}>Let's Get Started</StartButton>
    </Background>
  );
};

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: url("/background.png") center center / cover no-repeat fixed;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 4rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to right, #2193b0, #6dd5ed);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease-in-out;
  margin: 1rem auto;
  margin-bottom: 320px;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
    padding: 1rem 0;
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const StartButton = styled.button`
  padding: 15px 30px;
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
  background-image: linear-gradient(to right, #2193b0, #6dd5ed);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 123, 255, 0.2);
  transition: all 0.3s ease-out;
  animation: ${float} 2s ease-in-out infinite;
  &:hover {
    background-image: linear-gradient(to right, #1dd5ed, #3503b0);
    transform: translateY(-2px);
    box-shadow: 0 15px 25px rgba(0, 123, 255, 0.3);
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 12px 24px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 1.75rem;
    padding: 14px 28px;
    margin-top: 2rem;
  }
  @media (min-width: 481px) {
    margin-top: 10vh;
  }
`;

export default App;
