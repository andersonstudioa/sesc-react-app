import Task from "../task";
import './style.css';

function TasksList( {tasks, startTask, closeTask, deleteTask} ) {
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
              title={task.attributes.title}
              idMember={task.attributes.member.data.id}
              idCategory={task.attributes.category.data.id}
              idProject={task.attributes.project.data.id}
              status={task.attributes.status}
              startTask={startTask}
              closeTask={closeTask}
              deleteTask={deleteTask}
            />
          )
        })}
        {/* FIM DA TASK */}
      </div>
    </section>
  )
}

export default TasksList;