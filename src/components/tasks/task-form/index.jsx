import dataCategories from '../../../data/data-categories.json';
import dataMembers from '../../../data/data-members.json';
import React, { useState } from 'react'
import './style.css'

function TaskForm ( {addTask} ) {
  const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers);
  const [currentTask, setCurrentTask] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentMember, setCurrentMember] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Impede o navegador de recarregar a página
    //Validação dos campos
    if(!currentTask || !currentCategory || !currentMember) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    //Adicionar uma nova tarefa à lista de tarefas
    addTask(currentTask, currentCategory, currentMember);
    setCurrentTask("");
    setCurrentCategory("");
    setCurrentMember("");
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