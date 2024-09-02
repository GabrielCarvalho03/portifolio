import { DarkTheme } from "@styles/darkTheme";
import styled from "styled-components";

export const BoxFlag = styled.div`
  height: 25px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid ${DarkTheme.colors.gray[300]};
`;
