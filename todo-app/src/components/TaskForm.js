import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState(""); // State for task name
  const [taskDescription, setTaskDescription] = useState(""); // State for task description

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (!taskName || !taskDescription) {
      alert("Both fields are required!"); // Validation
      return;
    }
    addTask({
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    }); // Add task
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} // Update task name state
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)} // Update task description state
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
