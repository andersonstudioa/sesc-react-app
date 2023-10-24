function HomePage() {
  return (
    <div>
      <h1 style={{color: 'white'}}>Página Inicial</h1>
      <ul>
        <li><a href="/tasks">Tarefas</a></li>
        <li><a href="/projects">Projetos</a></li>
      </ul>
    </div>
  )
}
  
export default HomePage;