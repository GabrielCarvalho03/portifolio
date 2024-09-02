import { api } from "../../../global-services";

export const getProjects = async () => {
  try {
    const response = await api.get("/projects");
    console.log("return response.data", response.data);
    return response.data;
  } catch (error) {
    console.log("erro ao buscar", error);
  }
};
