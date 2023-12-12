import React, { useState, useContext } from 'react'
import './style.css'
import { ProjectContext } from '../../../context/project-context';
import { TaskContext } from '../../../context/task-context';

function TaskForm ( {addTask} ) {

  const { projects } = useContext(ProjectContext);
  const { categories, members } = useContext(TaskContext);

  const [currentTask, setCurrentTask] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentMember, setCurrentMember] = useState("");
  const [currentProject, setCurrentProject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Impede o navegador de recarregar a página
    //Validação dos campos
    if(!currentTask || !currentCategory || !currentMember || !currentProject) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    //Adicionar uma nova tarefa à lista de tarefas
    addTask(currentTask, currentCategory, currentMember, currentProject);
    setCurrentTask("");
    setCurrentCategory("");
    setCurrentMember("");
    setCurrentProject("");
    alert("Tarefa cadastrada com sucesso!");
  }

  return (
    <section className='section-main'>
      <div className='container-card'>
        <h1>Cadastrar tarefa</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Título</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Digite o título'
            value={currentTask}
            onChange={
              (event) => 
              setCurrentTask(event.target.value)
            }
          />
          <label htmlFor='category'>Categoria</label>
          <select
            name='category'
            id='category'
            value={currentCategory}
            onChange={
              (event) => 
                setCurrentCategory(event.target.value)
            }
          >
            <option value="">Selecione uma categoria</option>
            {categories && categories.map((category => {
              return (
                <React.Fragment key={category.id}>
                  <option value={category.id}>{category.attributes.title}</option>
                </React.Fragment>
              )
            }))}
          </select>
          <label htmlFor='member'>Membro</label>
          <select
            name='member'
            id='member'
            value={currentMember}
            onChange={
              (event) => {
              setCurrentMember(event.target.value)
              }
            }
          >
            <option value="">Selecione um membro da equipe</option>
            {members && members.map((member) => {
              return (
                <React.Fragment key={member.id}>
                  <option value={member.id}>{member.attributes.name}</option>
                </React.Fragment>
              )
            })}
          </select>
          <label htmlFor='project'>Projeto</label>
          <select
            name='project'
            id='project'
            value={currentProject}
            onChange={
              (event) => {
              setCurrentProject(event.target.value)
              }
            }
          >
            <option value="">Selecione um projeto</option>
            {projects && projects.map((project) => {
              return (
                <React.Fragment key={project.id}>
                  <option value={project.id}>{project.attributes.title}</option>
                </React.Fragment>
              )
            })}
          </select>
          <button className='btn-register' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}

export default TaskForm;