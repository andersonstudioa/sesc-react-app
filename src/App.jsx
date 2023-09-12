import React, { useState } from 'react'
import './App.css'
import dataTasks from '../src/data/data-tasks.json'
import dataCategories from '../src/data/data-categories.json'
import dataMembers from '../src/data/data-members.json'
//import '../src/excercises/class2'

function App() {

  const [tasks] = useState(dataTasks);
  const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers);

  return (
    <div>
      <section className='section-main'>
        <div className='container-card'>
          <h1>Cadastrar tarefa</h1>
          <hr />
          <form>
            <label>Título</label>
            <input type='text' name='title' placeholder='Digite o título da tarefa'/>
            <label>Categoria</label>
            <select name='category'>
              {categories && categories.map((category) => {
                return (
                  <React.Fragment key={category.id}>
                    <option value={category.title}>{category.title}</option>
                  </React.Fragment>
                )
              })}
            </select>
            <label>Membro</label>
            <select name='category'>
              {members && members.map((member) => {
                return (
                  <React.Fragment key={member.id}>
                    <option value={member.profile}>{member.name}</option>
                  </React.Fragment>
                )
              })}
            </select>
            <button className='btn-register'>Cadastrar</button>
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
                  <div className='actions'>
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
