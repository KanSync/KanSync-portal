import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./routes/landing-page.tsx";
import Dashboard from "./routes/dashboard.tsx";
import ErrorPage from "./routes/error-page.tsx";
import "./index.css";
import { ProjectProvider } from "./providers/ProjectProvider.tsx";
import KanbanPage from "./routes/kanban-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/kanban",
    element: <KanbanPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProjectProvider>
      <RouterProvider router={router} />
    </ProjectProvider>
  </React.StrictMode>,
);
