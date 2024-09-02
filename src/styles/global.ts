import styled from "styled-components";
import { DarkTheme } from "./darkTheme";

type stylesProps = {
  size?: number;
};

export const Space = styled.div<stylesProps>`
  height: ${({ size }) => size}rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 0.5px solid ${DarkTheme.colors.gray[300]};
`;
