import React from "react";

const TaskItem = ({ task, editTask, deleteTask, toggleCompletion }) => {
  const handleEdit = () => {
    const updatedName = prompt("Update task name:", task.name);
    const updatedDescription = prompt(
      "Update task description:",
      task.description
    );
    if (updatedName && updatedDescription) {
      editTask({ ...task, name: updatedName, description: updatedDescription }); // Update task
    }
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      <span onClick={() => toggleCompletion(task.id)}>{task.name}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
