import { useProjects } from "@hooks/useProjects/use-projects";
import { Card } from "../card/card";
import * as S from "./styles";
import { useEffect } from "react";
import { Loader } from "@components/loader";

export const Listprojects = () => {
  const { handleGetProjects, loadingProjects } = useProjects();

  useEffect(() => {
    handleGetProjects();
  }, []);
  const { projects, tags } = useProjects();

  const filteredProjects = projects?.filter((project) =>
    tags.some((tag) => project.tags.includes(tag))
  );
  return (
    <S.Container>
      {loadingProjects && <Loader />}
      {!projects?.length && !loadingProjects && (
        <S.Title>projetos não encontrados</S.Title>
      )}

      {(!tags.length ? projects : filteredProjects)?.map((item, index) => (
        <Card key={item._id} data={item} tags={item.tags} />
      ))}
    </S.Container>
  );
};
