import React from "react";
import ReactDOM from "react-dom/client";
import { TaskProvider } from "./context/task-context";
import { ProjectProvider } from "./context/project-context";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, ProjectsPage, TasksPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <ProjectProvider>
        <RouterProvider router={router} />
      </ProjectProvider>
    </TaskProvider>
  </React.StrictMode>
);
