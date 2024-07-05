import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/index.tsx";
import Layout from "./page/layout.tsx";
import ProjectsPage from "./page/projects/index.tsx";

const router = createBrowserRouter([
  // I recommend you reflect the routes here in the pages folder
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <>NotFound</>,
  },
]);

export default router;
