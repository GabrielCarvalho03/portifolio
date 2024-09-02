import styled from "styled-components";
import { DarkTheme } from "@styles/darkTheme";

export const Wapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  align-items: center;
  background-color: ${DarkTheme.colors.primary};
`;
