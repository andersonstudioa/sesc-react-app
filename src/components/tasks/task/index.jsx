import { useContext } from 'react';
import { Typography } from '@mui/material';
import './style.css'
import { ProjectContext } from "../../../context/project-context"
import { TaskContext } from '../../../context/task-context';


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
  const { categories, members } = useContext(TaskContext);

  const getTitleProjectById = (id) => {
    const filteredProject = projects.find((currentProject) => currentProject.id === id )
    return filteredProject?.attributes.title ? filteredProject?.attributes.title : "Erro";
  }
  const getMemberNameById = (id) => {
    const filteredMember = members.find((currentMember) => currentMember.id === id )
    return filteredMember?.attributes.name ? filteredMember?.attributes.name : "Erro";
  }
  const getMemberProfileById = (id) => {
    const filteredMember = members.find((currentMember) => currentMember.id === id )
    return filteredMember?.attributes.profile ? filteredMember?.attributes.profile : "Erro";
  }
  const getCategoryNameById = (id) => {
    const filteredCategory = categories.find((currentCategory) => currentCategory.id === id )
    return filteredCategory?.attributes.title ? filteredCategory?.attributes.title : "Erro";
  }

  return (
    <>
      <div className='task'>
        <img src={`https://github.com/${getMemberProfileById(member)}.png`} className='task-img-member' />
        <div className='task-content'>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" marginBottom={2}>{getTitleProjectById(idProject)}</Typography>
          <span className='task-member'>{getMemberNameById(member)}</span>
          <span className='task-category'>{getCategoryNameById(category)}</span>
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