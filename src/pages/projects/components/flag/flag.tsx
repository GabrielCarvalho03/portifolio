import * as S from "./styles";
import { FlagIcon } from "./objFlagIcon";

type FlagProps = {
  name: string;
};

export const Flag = ({ name }: FlagProps) => {
  const IconComponent = FlagIcon[name];

  return <S.BoxFlag>{IconComponent && <IconComponent />}</S.BoxFlag>;
};
