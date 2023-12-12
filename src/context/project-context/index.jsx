import { createContext, useState } from "react"
import { format } from 'date-fns'
import dataProjects from "../../data/data-projects.json"


export const ProjectContext = createContext({});

export const ProjectProvider = ({children}) => {
  const [projects, setProjects] = useState(dataProjects);
  const [edit, setEdit] = useState(false);

  const addProject = (
    title,
    description,
    startDate,
    deadline,
    endDate,
    client,
    status,
    idTeam
  ) => {
    if(!title || !description || !deadline || !client || !status || !idTeam) return;
    const newProjectsArray = [
      ...projects,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        description,
        startDate: startDate ? format(startDate, 'yyyy/MM/dd') : '',
        deadline: deadline ? format(deadline, 'yyyy/MM/dd') : '',
        endDate: endDate ? format(endDate, 'yyyy/MM/dd') : '',
        client,
        idTeam,
        status: "todo"
      }
    ];
    setProjects(newProjectsArray);
  }

  const deleteProject = (id) => {
    const newProjects = [...projects];
    const filteredProjects = newProjects.filter(project => project.id !== id ? project : null);
    setProjects(filteredProjects);
  }

  const editProject = (id) => {
    setEdit(true)
    const newProjects = [...projects];
    const filteredProjects = newProjects.filter(project => project.id !== id ? project : null);
    setProjects({
      id: Math.floor(Math.random() * 10000),
      title,
      description,
      startDate: startDate ? format(startDate, 'yyyy/MM/dd') : '',
      deadline: deadline ? format(deadline, 'yyyy/MM/dd') : '',
      endDate: endDate ? format(endDate, 'yyyy/MM/dd') : '',
      client,
      idTeam,
      status: "todo"
    });
  }

  return(
    <ProjectContext.Provider value={{ projects, addProject, deleteProject, editProject, edit }}>
      {children}
    </ProjectContext.Provider>
  );
}

