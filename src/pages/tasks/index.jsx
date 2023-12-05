import '../../App.css'
import { useContext } from "react";
import { Footer, Header, TaskForm, TasksList } from '../../components'
import { TaskContext } from '../../context/task-context/index.jsx'

function TasksPage() {

  const { tasks, addTask, startTask, closeTask, deleteTask } = useContext(TaskContext);

  return (
    <div>
      <Header />
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
