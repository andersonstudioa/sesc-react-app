import { useContext } from 'react';
import { Typography } from '@mui/material';
import './style.css'
import { ProjectContext } from "../../../context/project-context"
import { TaskContext } from '../../../context/task-context';


function Task( {
  id,
  title,
  idMember,
  idCategory,
  idProject,
  status,
  startTask,
  closeTask,
  deleteTask
} ) {
  
  const { projects } = useContext(ProjectContext);
  const { categories, members } = useContext(TaskContext);

  const getTitleProjectById = () => {
    const filteredProject = projects.find((currentProject) => currentProject.id === idProject )
    return filteredProject?.attributes.title ? filteredProject?.attributes.title : "Erro";
  }
  const getMemberNameById = () => {
    const filteredMember = members.find((currentMember) => currentMember.id === idMember )
    return filteredMember?.attributes.name ? filteredMember?.attributes.name : "Erro";
  }
  const getMemberProfileById = () => {
    const filteredMember = members.find((currentMember) => currentMember.id === idMember )
    return filteredMember?.attributes.profile ? filteredMember?.attributes.profile : "Erro";
  }
  const getCategoryNameById = () => {
    const filteredCategory = categories.find((currentCategory) => currentCategory.id === idCategory )
    return filteredCategory?.attributes.title ? filteredCategory?.attributes.title : "Erro";
  }

  return (
    <>
      <div className='task'>
        <img src={`https://github.com/${getMemberProfileById(idMember)}.png`} className='task-img-member' />
        <div className='task-content'>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" marginBottom={2}>{getTitleProjectById()}</Typography>
          <span className='task-member'>{getMemberNameById()}</span>
          <span className='task-category'>{getCategoryNameById()}</span>
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