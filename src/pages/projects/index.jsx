import { useContext } from 'react';
import { Footer, Header, ProjectForm, ProjectsList } from "../../components";
import { ProjectContext } from '../../context/project-context';

function ProjectsPage() {
  const {projects, addProject, deleteProject, editProject } = useContext(ProjectContext);
  return (
    <>
      <Header />
      <ProjectForm addProject={addProject} />
      <ProjectsList
        projects={projects}
        deleteProject={deleteProject}
        editProject = {editProject}
      />
      <Footer />
    </>
  )
}

export default ProjectsPage;