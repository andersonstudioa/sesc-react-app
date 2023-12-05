import { useContext } from "react";
import { Footer, Header, ProjectForm, ProjectsList } from "../../components";

import { ProjectContext } from '../../context/project-context';

function ProjectsPage() {

  const {projects, addProject, deleteProject } = useContext(ProjectContext);

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