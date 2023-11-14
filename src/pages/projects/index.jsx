import { useState } from 'react';
import { Footer, Header, ProjectForm, ProjectsList } from "../../components";

import dataProjects from '../../data/data-projects.json';

function ProjectsPage() {

  const [projects, setProjects] = useState(dataProjects);

  const addProject = (title, category, member) => {
    if(!title || !category || !member) return;
    const newProjectArray = [
      ...projects,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        member,
        status: "todo"
      }
    ];
    setProjects(newProjectArray);
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