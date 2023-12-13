import { createContext, useState, useEffect } from "react";

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
      const newTasksList = await tasksApi.getTasks();
      setTasks(newTasksList);
    }
  }

  const startTask = async (id) => {
    const dataFetch = {
      data: {
        status: 'doing'
      }
    }
    const result = await tasksApi.updateStatusTask(dataFetch, id);
    if(result) {
      const newTasksList = await tasksApi.getTasks();
      setTasks(newTasksList);
    }
  }

  const closeTask = async (id) => {
    const dataFetch = {
      data: {
        status: 'done'
      }
    }
    const result = await tasksApi.updateStatusTask(dataFetch, id);
    if(result) {
      const newTasksList = await tasksApi.getTasks();
      setTasks(newTasksList);
    }
  }

  const deleteTask = async (id) => {
    const result = await tasksApi.deleteTask(id);
    if(result) {
      const newTasksList = await tasksApi.getTasks();
      setTasks(newTasksList);
    }
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
    <TaskContext.Provider value={{
      tasks,
      categories,
      members,
      addTask,
      startTask,
      closeTask,
      deleteTask
    }}>
      {children}
    </TaskContext.Provider>
  );
}