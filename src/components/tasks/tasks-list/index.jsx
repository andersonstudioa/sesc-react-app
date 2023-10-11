import Task from "../task";

function TasksList( {tasks} ) {
  return (
    <section className='section-main'>
      <div className='container-card'>
        <h1>Lista de tarefas</h1>
        <hr />

        {/* INÍCIO DA TASK */}
        {tasks && tasks.map((task) => {
          return(
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              member={task.member}
              category={task.category}
              status={task.status}
            />
          )
        })}
        {/* FIM DA TASK */}
      </div>
    </section>
  )
}

export default TasksList;