import { createContext, useState, useEffect } from "react"
import dataTasks from "../../data/data-tasks.json"
import { categoriesApi } from "../../services/categories-api";

export const TaskContext = createContext({});

export const TaskProvider = ({children}) => {

  const [tasks, setTasks] = useState(dataTasks);
  const [categories, setCategories] = useState(null);

  const addTask = (title, category, member, idProject) => {
    if(!title || !category || !member || !idProject) return;
    const newTaskArray = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        member,
        idProject,
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
  
  useEffect(() => {
    const fetchDataCategories = async () => {
      const cat = await categoriesApi.getCategories();
      setCategories(cat);
    }
    if(categories === null) {
      fetchDataCategories();
    }
  },[categories]);

  return (
    <TaskContext.Provider value={{ tasks, categories, addTask, startTask, closeTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}