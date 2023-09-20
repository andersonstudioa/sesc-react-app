import { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState(2);

  return (
    <div>
      <section className='section-main'>
        <div className='container-card'>
          <h1>Cadastrar tarefa</h1>
          <hr />
          <form>
            <label for='title'>Título</label>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Digite o título'
            />
            <label for='category'>Categoria</label>
            <select name='category' id='category'>
              <option value="">Selecione uma categoria</option>
              <option value="UX/UI">UX/UI</option>
              <option value="Testes">Testes</option>
            </select>
            <label for='member'>Membros</label>
            <select name='member' id='member'>
              <option value="">Selecione um membro da equipe</option>
              <option value="Anderson">Anderson</option>
              <option value="José">José</option>
            </select>
            <button className='btn-register' type='submit'>
              Cadastrar
            </button>
          </form>
        </div>
      </section>
      <section className='section-main'>
        <div className='container-card'>
          <h1>Lista de tarefas</h1>
          <hr />
        </div>
      </section>
      <footer className='footer-main'>
        <p>
          <strong>
            Introdução ao Desenvolvimento
            Front-end com React
          </strong>
        </p>
        <p>
          <em>
            Professor: Anderson Carvalho
          </em>
        </p>
      </footer>
    </div>
  )
}

export default App
