import { useContext } from "react";
import { ProjectContext } from '../../../context/project-context';
import './style.css';
import { Typography } from "@mui/material";

function Task( {
  id,
  title,
  member,
  category,
  project,
  status,
  startTask,
  closeTask,
  deleteTask
  } ) {

  const { projects } = useContext(ProjectContext);

  const geTitleProjectById = (id) => {
    const projectsParsed = [...projects];
    const filteredProject = projectsParsed.find((currentProject) => currentProject.id === id )
    return filteredProject.title;
  }
  return (
    <>
      <div className='task'>
        <img src={`https://github.com/${member}.png`} className='task-img-member' />
        <div className='task-content'>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" marginBottom={2}>{geTitleProjectById(project)}</Typography>
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