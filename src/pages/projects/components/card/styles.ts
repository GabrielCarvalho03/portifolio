import { DarkTheme } from "@styles/darkTheme";
import styled from "styled-components";

export const BoxCard = styled.div`
  width: 300px;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 10px;
  color: ${DarkTheme.colors.black};
  position: relative;
`;

export const WapperInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Description = styled.span`
  color: ${DarkTheme.colors.black};
  opacity: 0.7;
`;

export const Button = styled.button`
  position: absolute;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: ${DarkTheme.colors.primary};
  bottom: 10px;
  left: 1rem;
  color: ${DarkTheme.colors.white};
`;

export const BoxFlags = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

export const Img = styled.img`
  border-radius: 10px 10px 0 0;
`;
