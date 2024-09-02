import { Select } from "@mui/joy";
import { DarkTheme } from "@styles/darkTheme";
import styled from "styled-components";

export const CustomMultipleSelect = styled(Select)`
  &.MuiSelect-root {
    background-color: transparent;
    border: 0.5px solid ${DarkTheme.colors.gray[100]};
    color: white;
  }
  &:hover {
    background-color: transparent !important; /* Remove o efeito de hover */
  }
`;
