import { useState } from 'react'
import './App.css'
import dataTasks from '../src/data/data-tasks.json'
import { Footer, TaskForm, TasksList } from './components'

function App() {
  
  const [tasks, setTasks] = useState(dataTasks);

  const addTask = (title, category, member) => {
    if(!title || !category || !member) return;
    const newTaskArray = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        member,
        status: "todo"
      }
    ];
    setTasks(newTaskArray);
  }

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TasksList tasks={tasks} />
      <Footer />
    </div>
  )
}

export default App
