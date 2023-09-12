import React, { useState } from 'react'
import './App.css'
import dataTasks from '../src/data/data-tasks.json'
import dataCategories from '../src/data/data-categories.json'
import dataMembers from '../src/data/data-members.json'
//import '../src/excercises/class2'

function App() {

  //Etapa 1
  const [tasks, setTasks] = useState(dataTasks);
  const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers);

  //Etapa 2
  const addTask = (title, category, member) => {
    if(!title || !category || !member) return;
    const newTask = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        member,
        status: "todo"
      }
    ]

    setTasks(newTask);
  }

  //Etapa 3
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
    <div>
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
      <section className='section-main'>
        <div className='container-card'>
          <h1>Lista de tarefas</h1>
          <hr />
          {tasks && tasks.map((task) => {
            return (
              <React.Fragment key={task.id}>
                <div className='task'>
                  <img src={`https://github.com/${task.member}.png`} className='task-img-member'/>
                  <div className='task-content'>
                    <h2 className='task-title'>{task.title}</h2>
                    <span className='task-member'>{task.member}</span>
                    <span className='task-category'>{task.category}</span>
                    <span className={`task-${task.status}`}>{task.status}</span>
                  </div>
                  <div className='task-actions'>
                    <button className='btn-start'>Iniciar</button>
                    <button className='btn-close'>Finalizar</button>
                    <button className='btn-delete'>x</button>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            )
          })}
        </div>
      </section>
      <footer className='footer-main'>
        <p><strong>Introdução ao Desenvolvimento Front-end com React</strong></p>
        <p><em>Professor: Anderson Carvalho</em></p>
      </footer>
    </div>
  )
}

export default App
