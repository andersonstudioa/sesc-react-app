// import dataCategories from '../../../data/data-categories.json';
// import dataMembers from '../../../data/data-members.json';
// import dataProjects from '../../../data/data-projects.json';
import dataTeams from '../../../data/data-teams.json';
import React, { useState } from 'react'
import './style.css'

function ProjectForm ( {addProject} ) {

  // const [projects] = useState(dataProjects);
  const [teams] = useState(dataTeams);
  // const [members] = useState(dataMembers);
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
        <h1>Cadastrar projeto</h1>
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
          <label htmlFor='description'>Descrição</label>
          <textarea
            name='description'
            id='description'
            placeholder='Digite a descrição do projeto'
            value={currentDescription}
            onChange={
              (event) => 
              setCurrentDescription(event.target.value)
            }
          />
          <label htmlFor='team'>Equipe</label>
          <select
            name='team'
            id='team'
            value={currentTeam}
            onChange={
              (event) => 
                setCurrentTeam(event.target.value)
            }
          >
            <option value="">Selecione uma equipe</option>
            {teams && teams.map((team => {
              return (
                <React.Fragment key={team.id}>
                  <option value={team.id}>{team.name}</option>
                </React.Fragment>
              )
            }))}
          </select>
          <button className='btn-register' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}

export default ProjectForm;