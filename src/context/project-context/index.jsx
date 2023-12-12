import { createContext, useState, useEffect } from "react";
import { format } from 'date-fns';
import { projectsApi } from "../../api/projects";
import { teamsApi } from "../../api/teams";

export const ProjectContext = createContext({});

export const ProjectProvider = ({children}) => {
  const [projects, setProjects] = useState(null);
  const [teams, setTeams] = useState(null);

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

  useEffect(() => {
    const fetchDataProjects = async () => {
      const result = await projectsApi.getProjects();
      setProjects(result);
    }
    if(projects === null) {
      fetchDataProjects();
    }
  },[projects]);

  useEffect(() => {
    const fetchDataTeams = async () => {
      const result = await teamsApi.getTeams();
      setTeams(result);
    }
    if(teams === null) {
      fetchDataTeams();
    }
  },[teams]);

  return(
    <ProjectContext.Provider value={{ projects, teams, addProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

