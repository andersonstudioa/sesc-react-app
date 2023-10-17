import React, { useState } from 'react'
//import '../../../App.css'

//import dataTasks from '../../../data/data-tasks.json'
import dataCategories from '../../../data/data-categories.json'
import dataMembers from '../../../data/data-members.json'

function TaskForm({addTask}) {

  //const [tasks, setTasks] = useState(dataTasks);
  const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers);

  const [currentTask, setCurrentTask] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentMember, setCurrentMember] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //Validação dos campos
    if(!currentTask || !currentCategory || !currentMember) {
      alert ("Todos os campos são obrigatórios");
      return;
    }
    //console.log(currentTask, currentCategory, currentMember);
    addTask(currentTask, currentCategory, currentMember);
    setCurrentTask("");
    setCurrentCategory("");
    setCurrentMember("");
  }

  return (
    <section className='section-main'>
        <div className='container-card'>
          <h1>Cadastrar tarefa</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <label>Título</label>
            <input type='text' name='title' value={currentTask} onChange={(e) => setCurrentTask(e.target.value)} placeholder='Digite o título da tarefa'/>
            <label>Categoria</label>
            <select name='category' value={currentCategory} onChange={(e) => setCurrentCategory(e.target.value)}>
              <option value="">Selecione uma categoria</option>
              {categories && categories.map((category) => {
                return (
                  <React.Fragment key={category.id}>
                    <option value={category.title}>{category.title}</option>
                  </React.Fragment>
                )
              })}
            </select>
            <label>Membro</label>
            <select name='member' value={currentMember} onChange={(e) => setCurrentMember(e.target.value)}>
              <option value="">Selecione um membro da equipe</option>
              {members && members.map((member) => {
                return (
                  <React.Fragment key={member.id}>
                    <option value={member.profile}>{member.name}</option>
                  </React.Fragment>
                )
              })}
            </select>
            <button className='btn-register' type='submit'>Cadastrar</button>
          </form>
        </div>
      </section>
  )
}

export default TaskForm;