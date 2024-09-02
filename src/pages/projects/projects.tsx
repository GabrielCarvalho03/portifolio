import { Header } from "@components/header/header";
import * as S from "./styles";
import { Filter } from "./components/filter/filter";
import { Listprojects } from "./components/list-projects/list-projects";

export const Project = () => {
  const projects = [];

  return (
    <S.Container>
      <Header />

      <S.Wapper>
        <S.BoxFilter>
          <S.Title>Main projects</S.Title>
          <Filter />
        </S.BoxFilter>

        <S.WapperListProject>{<Listprojects />}</S.WapperListProject>
      </S.Wapper>
    </S.Container>
  );
};
