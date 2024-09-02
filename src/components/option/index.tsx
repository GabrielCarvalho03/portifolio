import React, { ElementType } from "react";

import * as S from "./styles";
type OptionProps = {
  value: string | number;
  children: React.ReactNode;
};

export const MultipleSelect = ({ children, value }: OptionProps) => {
  return <S.CustomOption value={value}>{children}</S.CustomOption>;
};
