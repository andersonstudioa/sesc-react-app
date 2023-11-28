import { useState } from 'react';
import { format } from 'date-fns';
import { Footer, Header, ProjectForm, ProjectsList } from "../../components";

import dataProjects from '../../data/data-projects.json';

function ProjectsPage() {

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

    console.log('newProjectsArray', newProjectsArray);
    setProjects(newProjectsArray);
  }

  const deleteProject = (id) => {
    const newProjects = [...projects];
    const filteredProjects = newProjects.filter(project => project.id !== id ? project : null);
    setProjects(filteredProjects);
  }

  return (
    <>
      <Header />
      <ProjectForm addProject={addProject} />
      <ProjectsList
        projects={projects}
        deleteProject={deleteProject}
      />
      <Footer />
    </>
  )
}

export default ProjectsPage;