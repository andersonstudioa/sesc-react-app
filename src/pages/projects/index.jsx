import { useContext } from "react";
import { Footer, Header, ProjectForm, ProjectsList } from "../../components";
import { ProjectContext } from "../../context/project-context";

function ProjectsPage() {

  const { projects, addProject, deleteProject, editProject, projectToBeEdited, setProjectToBeEdited } = useContext(ProjectContext);

  return (
    <>
      <Header />
      <ProjectForm addProject={addProject} projectToBeEdited={projectToBeEdited} setProjectToBeEdited={setProjectToBeEdited} />
      <ProjectsList
        projects={projects}
        deleteProject={deleteProject}
        editProject={editProject}
      />
      <Footer />
    </>
  )
}

export default ProjectsPage;
