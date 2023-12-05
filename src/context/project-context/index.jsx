"use client"

import { createContext, useState } from "react"
import dataProjects from '../../data/data-projects.json'
import { format } from 'date-fns';

export const ProjectContext = createContext({});

export const ProjectsProvider = ({
  children,
}) => {

  const [projects, setProjects] = useState(dataProjects);

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

  return (
    <ProjectContext.Provider value={{projects, addProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};