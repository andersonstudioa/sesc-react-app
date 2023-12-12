import { createContext, useState, useEffect } from "react"
import { categoriesApi } from "../../api/categories";
import { tasksApi } from "../../api/tasks";
import { membersApi } from "../../api/members";

export const TaskContext = createContext({});

export const TaskProvider = ({children}) => {

  const [tasks, setTasks] = useState(null);
  const [categories, setCategories] = useState(null);
  const [members, setMembers] = useState(null);

  const addTask = async (title, idCategory, idMember, idProject) => {
    if(!title || !idCategory || !idMember || !idProject) return;
    const dataTask = {
      data: {
        title,
        status: "todo",
        member: idMember,
        category: idCategory,
        project: idProject
      }
    }
    const result = await tasksApi.insertTask(dataTask);
    if(result) {
      const result = await tasksApi.getTasks();
      setTasks(result);
    }
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
    const fetchDataTasks = async () => {
      const result = await tasksApi.getTasks();
      setTasks(result);
    }
    if(tasks === null) {
      fetchDataTasks();
    }
  },[tasks]);

  useEffect(() => {
    const fetchDataCategories = async () => {
      const result = await categoriesApi.getCategories();
      setCategories(result);
    }
    if(categories === null) {
      fetchDataCategories();
    }
  },[categories]);

  useEffect(() => {
    const fetchDataMembers = async () => {
      const result = await membersApi.getMembers();
      setMembers(result);
    }
    if(members === null) {
      fetchDataMembers();
    }
  },[members]);

  return (
    <TaskContext.Provider value={{ tasks, categories, members, addTask, startTask, closeTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}