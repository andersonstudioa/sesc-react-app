import { useContext } from 'react';
import { Typography } from '@mui/material';
import './style.css'
import { ProjectContext } from "../../../context/project-context"

function Task( {
  id,
  title,
  member,
  category,
  idProject,
  status,
  startTask,
  closeTask,
  deleteTask
  } ) {

  const { projects } = useContext(ProjectContext);

  const getTitleProjectById = (id) => {
    const filteredProject = projects.find((currentProject) => currentProject.id === id )
    return filteredProject?.title ? filteredProject?.title : "Erro";
  }

  return (
    <>
      <div className='task'>
        <img src={`https://github.com/${member}.png`} className='task-img-member' />
        <div className='task-content'>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" marginBottom={2}>{getTitleProjectById(idProject)}</Typography>
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