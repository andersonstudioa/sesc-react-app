import { useState } from 'react'
import '../../App.css'
import dataTasks from '../../data/data-tasks.json'
import { Footer, TaskForm, TasksList } from '../../components'

function TasksPage() {
  
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

  const startTask = (id) => {
    const newTasks = [...tasks];
    newTasks.map((task) => 
      task.id === id ? (task.status = 'doing') : task
    );
    setTasks(newTasks);
  }

  const closeTask = (id) => {
    const newTasks = [...tasks];
    newTasks.map((task) => 
      task.id === id ? (task.status = 'done') : task
    );
    setTasks(newTasks);
  }

  const deleteTask = (id) => {
    const newTasks = [...tasks];
    const filteredTasks = newTasks.filter(task => task.id !== id ? task : null);
    setTasks(filteredTasks);
  }

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TasksList 
        tasks={tasks}
        startTask={startTask}
        closeTask={closeTask}
        deleteTask={deleteTask}
      />
      <Footer />
    </div>
  )
}

export default TasksPage