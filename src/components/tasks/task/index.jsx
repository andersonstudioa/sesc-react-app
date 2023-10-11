function Task( {title, member, category, status} ) {
  return (
    <>
      <div className='task'>
        <img src={`https://github.com/${member}.png`} className='task-img-member' />
        <div className='task-content'>
          <h2 className='task-title'>{title}</h2>
          <span className='task-member'>{member}</span>
          <span className='task-category'>{category}</span>
          <span className={`task-${status}`}>{status}</span>
        </div>
        <div className='task-actions'>
          <button className='btn-start'>Iniciar</button>
          <button className='btn-close'>Finalizar</button>
          <button className='btn-delete'>x</button>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Task;