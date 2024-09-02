import { Line, Space } from "@styles/global";
import * as S from "./styles";
import imgTeste from "@assets/svg/imgTeste.svg";
import { Flag } from "../flag/flag";
import { useProjects } from "@hooks/useProjects/use-projects";
import { ProjectsObj } from "@hooks/useProjects/types";

type CardProps = {
  tags: string[];
  data: ProjectsObj;
};
export const Card = ({ tags, data }: CardProps) => {
  return (
    <S.BoxCard>
      <S.Img src={data.photoUrl} alt="" />
      <Space size={1} />
      <S.WapperInfo>
        <S.Title>{data.name}</S.Title>
        <S.Description>{data.description}</S.Description>
        <Space size={3} />

        <S.BoxFlags>
          {tags.map((tag) => (
            <Flag key={data._id} name={tag} />
          ))}
        </S.BoxFlags>

        <Space size={1} />
        <Line />
      </S.WapperInfo>

      <S.Button onClick={() => window.open(`https://${data.link}`, "_blank")}>
        see live project
      </S.Button>
    </S.BoxCard>
  );
};
