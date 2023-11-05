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
              title={task.title}
              member={task.member}
              category={task.category}
              status={task.status}
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