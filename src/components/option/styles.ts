import { Option, Select } from "@mui/joy";
import { DarkTheme } from "@styles/darkTheme";
import styled from "styled-components";

export const CustomOption = styled(Option)`
  &.MuiOption-root {
    color: black;
    border: none !important;
    padding: 10px !important;
    margin: 0 !important; /* Remove qualquer margem */
    box-shadow: none; /* Remove qualquer sombra */
    line-height: normal !important; /* Ajusta a altura da linha */
    height: 100% !important; /* Ajusta a altura */
    border-radius: 0 !important;
    &:hover {
      background-color: ${DarkTheme.colors.gray[200]};
    }

    &.MuiOption-root::before,
    &.MuiOption-root::after {
      content: none !important; /* Remove pseudo-elementos */
    }
  }
`;
