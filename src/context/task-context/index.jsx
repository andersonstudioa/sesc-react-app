"use client"

import { createContext, useState } from "react"
import dataTasks from '../../data/data-tasks.json'

export const TaskContext = createContext({});

export const TasksProvider = ({
  children,
}) => {

  const [tasks, setTasks] = useState(dataTasks);

  const addTask = (title, category, member, project) => {
    if(!title || !category || !member || !project) return;
    const newTaskArray = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        member,
        project,
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
    <TaskContext.Provider value={{tasks, addTask, startTask, closeTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};