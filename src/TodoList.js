import React, { useState, useEffect } from "react";
import "./styles.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskText.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    if (tasks.some((task) => task.text === taskText)) {
      alert("Task already exists!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      priority,
      dueDate,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
    setDueDate("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id) => {
    const newText = prompt(
      "Edit your task:",
      tasks.find((task) => task.id === id).text
    );
    if (newText) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newText } : task
        )
      );
    }
  };

  return (
    <div className="todo-app">
      <h1>📌 To-Do List</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="What do you need to do?"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">🔥 High</option>
        <option value="Medium">⚡ Medium</option>
        <option value="Low">🟢 Low</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={addTask}>➕ Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.completed ? "completed" : ""}`}
          >
            <span>
              {task.text} ({task.priority}) 📅 {task.dueDate || "No due date"}
            </span>
            <button onClick={() => editTask(task.id)}>✏️ Edit</button>
            <button onClick={() => toggleComplete(task.id)}>✅ Done</button>
            <button onClick={() => deleteTask(task.id)}>🗑 Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
