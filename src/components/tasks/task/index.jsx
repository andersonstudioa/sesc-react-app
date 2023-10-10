function Task({id, member, title, category, status, deleteTask, startTask, closeTask}) {
  return (
    <>
      <div className='task'>
        <img src={`https://github.com/${member}.png`} className='task-img-member'/>
        <div className='task-content'>
          <h2 className='task-title'>{title}</h2>
          <span className='task-member'>{member}</span>
          <span className='task-category'>{category}</span>
          <span className={`task-${status}`}>{status}</span>
        </div>
        <div className='task-actions'>
          <button className='btn-start' onClick={() => startTask(id)}>Iniciar</button>
          <button className='btn-close' onClick={() => closeTask(id)}>Finalizar</button>
          <button className='btn-delete' onClick={() => deleteTask(id)}>x</button>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Task;