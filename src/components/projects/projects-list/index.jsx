import Project from "../project";

function ProjectsList( {projects, deleteProject} ) {
  return (
    <section className='section-main'>
      <div className='container-card'>
        <h1>Lista de Projetos</h1>
        <hr />

        {/* INÍCIO DA TASK */}
        {projects && projects.map((project) => {
          return(
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              startDate={project.startDate}
              deadline={project.deadline}
              endDate={project.endDate}
              client={project.client}
              idTeam={project.idTeam}
              status={project.status}
              deleteProject={deleteProject}
            />
          )
        })}
        {/* FIM DA TASK */}
      </div>
    </section>
  )
}

export default ProjectsList;