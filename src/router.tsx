import { createBrowserRouter } from "react-router-dom";
import HomePage from "./index.tsx";
import Layout from "./layout.tsx";

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
    ],
  },
  {
    path: "*",
    element: <>NotFound</>,
  },
]);

export default router;
