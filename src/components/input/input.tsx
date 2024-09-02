import IconFilter from "@assets/icons/Icon-filter";
import * as S from "./styles";
import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...props }, ref) => {
    return (
      <S.InputWrapper>
        <S.CustomInput {...props} />
        <S.IconWapper>{icon}</S.IconWapper>
      </S.InputWrapper>
    );
  }
);
