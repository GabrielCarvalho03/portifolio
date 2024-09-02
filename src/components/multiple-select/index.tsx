import React, { ElementType } from "react";

import * as S from "./styles";

type MultipleSelectProps = {
  children?: React.ReactNode;
  iconStart: React.ReactNode;
  placeholder?: string;
  renderValue?: (selected: any) => React.ReactNode;
  onchange?: (
    event:
      | React.MouseEvent<Element>
      | React.KeyboardEvent<Element>
      | React.FocusEvent<Element, Element>
      | null,
    value: any
  ) => void;
};

export const MultipleSelect = ({
  children,
  iconStart,
  placeholder,
  renderValue,
  onchange,
}: MultipleSelectProps) => {
  return (
    <S.CustomMultipleSelect
      multiple
      placeholder={placeholder}
      onChange={onchange}
      startDecorator={<>{iconStart}</>}
      renderValue={renderValue}
      slotProps={{
        listbox: {
          sx: {
            width: "100%",
          },
        },
      }}
    >
      {children}
    </S.CustomMultipleSelect>
  );
};
