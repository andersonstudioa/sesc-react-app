import { createContext, useState } from "react";
import { format } from "date-fns";
import dataProjects from "../../data/data-projects.json";

export const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(dataProjects);

  const addProject = (
    title,
    description,
    startDate,
    deadline,
    endDate,
    client,
    status,
    idTeam,
  ) => {
    if (!title || !description || !deadline || !client || !status || !idTeam)
      return;

    const newProjectsArray = [...projects];

    if (projectToBeEdited) {
      newProjectsArray.map((project) => {
        if (project.id == projectToBeEdited.id) {
          project.id = projectToBeEdited.id;
          project.status = projectToBeEdited.status;
          project.title = title;
          project.description = description;
          (project.startDate = startDate
            ? format(startDate, "yyyy/MM/dd")
            : ""),
            (project.deadline = deadline ? format(deadline, "yyyy/MM/dd") : ""),
            (project.endDate = endDate ? format(endDate, "yyyy/MM/dd") : ""),
            (project.client = client);
          project.idTeam = idTeam;
          setProjects(newProjectsArray);
          setProjectToBeEdited(null);
        } else {
          project;
        }
      });
    } else {
      newProjectsArray.push({
        id: projectToBeEdited ? projectToBeEdited.id : Math.floor(Math.random() * 10000),
        title,
        description,
        startDate: startDate ? format(startDate, "yyyy/MM/dd") : "",
        deadline: deadline ? format(deadline, "yyyy/MM/dd") : "",
        endDate: endDate ? format(endDate, "yyyy/MM/dd") : "",
        client,
        idTeam,
        status: projectToBeEdited ? projectToBeEdited.status : "todo",
      });
    }
    setProjects(newProjectsArray);
  };

  const deleteProject = (id) => {
    const newProjects = [...projects];
    const filteredProjects = newProjects.filter((project) =>
      project.id !== id ? project : null,
    );
    setProjects(filteredProjects);
  };

  const getProjectByID = (id) => {
    const targetProject = projects.find((project) => project.id == id);
    return targetProject;
  };

  const [projectToBeEdited, setProjectToBeEdited] = useState(null);

  const editProject = (id) => {
    setProjectToBeEdited(getProjectByID(id));
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        deleteProject,
        editProject,
        projectToBeEdited,
        setProjectToBeEdited,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
