import dataCategories from '../../../data/data-categories.json';
import dataMembers from '../../../data/data-members.json';
import dataProjects from '../../../data/data-projects.json';
import dataTeams from '../../../data/data-teams.json';
import React, { useState } from 'react'
import './style.css'

function ProjectForm ( {addProject} ) {
  const [projects] = useState(dataProjects);
  const [teams] = useState(dataTeams);
  const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState("");
  const [currentDeadline, setCurrentDeadline] = useState("");
  const [currentEndDate, setCurrentEndDate] = useState("");
  const [currentClient, setCurrentClient] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentTeam, setCurrentTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Impede o navegador de recarregar a página
    //Validação dos campos
    if(
        !currentTitle || 
        !currentDescription || 
        !currentStartDate ||
        !currentDeadline ||
        !currentEndDate ||
        !currentClient ||
        !currentStatus ||
        !currentTeam
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    //Adicionar uma nova tarefa à lista de tarefas
    addProject(
        currentTitle,
        currentDescription,
        currentStartDate,
        currentDeadline,
        currentEndDate,
        currentClient,
        currentStatus,
        currentTeam
    );
    setCurrentTitle("");
    setCurrentDescription("");
    setCurrentStartDate("");
    setCurrentDeadline("");
    setCurrentEndDate("");
    setCurrentClient("");
    setCurrentTitle("");
    setCurrentStatus("");
    setCurrentTeam("");

    alert("Projeto cadastrado com sucesso!");
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
            value={currentTitle}
            onChange={
              (event) => 
              setCurrentTitle(event.target.value)
            }
          />
          <label htmlFor='description'>Categoria</label>
          {/* TODO: Finalizar formulário */}
          {/* <select
            name='description'
            id='description'
            value={currentDescription}
            onChange={
              (event) => 
                setCurrentDescription(event.target.value)
            }
          >
            <option value="">Selecione uma categoria</option>
            {categories && categories.map((category => {
              return (
                <React.Fragment key={category.id}>
                  <option value={category.title}>{category.title}</option>
                </React.Fragment>
              )
            }))}
          </select>
          <label htmlFor='member'>Membros</label>
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
                  <option value={member.profile}>{member.name}</option>
                </React.Fragment>
              )
            })}
          </select> */}
          <button className='btn-register' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}

export default TaskForm;