import React from 'react'
import Task from '../task'

function TasksList ({tasks}) {
  return (
    <section className='section-main'>
      <div className='container-card'>
        <h1>Lista de tarefas</h1>
        <hr />
        {tasks && tasks.map((task) => {
          return (
            <React.Fragment key={task.id}>
              <Task 
                member={task.member}
                title={task.title}
                category={task.category}
                status={task.status}
              />
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default TasksList