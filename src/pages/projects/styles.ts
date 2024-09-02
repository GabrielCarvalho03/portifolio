import styled from "styled-components";
import { DarkTheme } from "@styles/darkTheme";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 1rem 5rem;
  background-color: ${DarkTheme.colors.primary};
  color: ${DarkTheme.colors.white};
  padding: 0 3rem;
`;

export const Wapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WapperListProject = styled.div`
  padding-top: 10rem;
  overflow-y: auto;
`;

export const BoxFilter = styled.div`
  width: 100%;
  display: flex;
  padding-top: 10rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 5rem;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
`;
