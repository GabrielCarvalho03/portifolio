import styled from "styled-components";
import { DarkTheme } from "@styles/darkTheme";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 1rem 0;
  background-color: ${DarkTheme.colors.primary};
  color: ${DarkTheme.colors.white};
  padding: 0 3rem;

  margin-bottom: 5rem;
`;

export const Wapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 10rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 408px) {
    flex-direction: column-reverse;
    margin-top: 12rem;
    margin-bottom: 5rem;
  }
`;

export const WapperText = styled.div`
  font-size: 22px;
  font-weight: 200;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

export const Text = styled.span``;

export const BopxTypical = styled.div`
  color: ${DarkTheme.colors.blue.ocean};
  font-weight: 900;
  font-size: 35px;

  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

export const HeroImgContainer = styled.div`
  position: relative;
  padding-right: 5rem;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    margin-top: 40rem;
  }
`;

export const WapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

export const Button = styled.button`
  background-color: ${DarkTheme.colors.white};
  color: ${DarkTheme.colors.black};
  padding: 1rem 10rem;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: 450px) {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgHeroTop = styled.img`
  width: 100%;
  height: auto;
  animation: rotate 20s linear infinite;

  @media (max-width: 800px) {
    width: 200px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(60deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ImgHeroBottom = styled.img`
  width: 100%;
  height: auto;
  animation: rotate 10s linear infinite;

  @media (max-width: 800px) {
    width: 200px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(60deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ImgBallonTop = styled.img`
  height: auto;
  animation: rotateBallonTop 10s linear infinite;
  position: absolute;
  top: 50%;
  left: -6rem;

  @media (max-width: 800px) {
    width: 50px;
  }
  @keyframes rotateBallonTop {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(20px, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export const BallonBottom = styled.img`
  height: auto;
  animation: rotateBallonBottom 10s linear infinite;

  @media (max-width: 800px) {
    width: 150px;
  }
  @keyframes rotateBallonTop {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-20px, -10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
