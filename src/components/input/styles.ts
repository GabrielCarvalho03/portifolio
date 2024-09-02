import { DarkTheme } from "@styles/darkTheme";
import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: 0.5px solid ${DarkTheme.colors.gray[100]};
  border-radius: 5px;
  padding: 10px;
  outline: none;

  &::placeholder {
    color: ${DarkTheme.colors.gray[500]};
  }
`;

export const IconWapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${DarkTheme.colors.gray[500]};
`;
