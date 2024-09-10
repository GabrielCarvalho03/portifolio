import IconFilter from "@assets/icons/Icon-filter";
import * as S from "./styles";
import { Input } from "@components/input/input";
import { MultipleSelect } from "@components/multiple-select";
import { Option } from "@mui/joy";
import { ValueFilter } from "../valueFilter/value-filter";
import { CustomOption } from "@components/option/styles";
import { FlagIcon } from "../flag/objFlagIcon";
import { ListFilter } from "./listFilter";
import { useProjects } from "@hooks/useProjects/use-projects";

export const Filter = () => {
  const { setTags } = useProjects();
  return (
    <S.BoxInputFilter>
      <MultipleSelect
        onchange={(event, value) => setTags(value)}
        iconStart={<IconFilter />}
        placeholder="Filter by technologies"
        renderValue={(selected) => <ValueFilter selected={selected} />}
      >
        {ListFilter.map((item, index) => {
          const IconComponent = FlagIcon[item.icon];
          return (
            <CustomOption value={item.value}>
              {IconComponent && <IconComponent />}
              <S.WapperOption>{item.name}</S.WapperOption>
            </CustomOption>
          );
        })}
      </MultipleSelect>
    </S.BoxInputFilter>
  );
};
