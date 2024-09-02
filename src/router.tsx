import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "@pages/home/home";
import { Project } from "@pages/projects/projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
]);
