import { useEffect, useState } from "react";

export default function Home() {
  const mockTasks = [
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      completed: true,
    },
  ];

  const [tasks, setTasks] = useState(mockTasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleCheckTask = (taskId) => {
    const newTasks = [...tasks];

    const selectedTask = newTasks.find((x) => x.id == taskId);
    selectedTask.completed = !selectedTask.completed;

    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = [...tasks];
    setTasks(newTasks.filter((x) => x.id != taskId));
  };

  const handleAddTask = () => {
    const newId = Math.max(...tasks.map((x) => x.id)) + 1;
    const newTasks = [
      ...tasks,
      { id: newId, title: newTaskTitle, completed: false },
    ];

    setTasks(newTasks);
    setNewTaskTitle("");
  };

  return (
    <main>
      <h1>Checklist</h1>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              <input
                onChange={() => handleCheckTask(task.id)}
                checked={task.completed}
                type="checkbox"
              />
              <p>{task.title}</p>
              <button onClick={() => handleDeleteTask(task.id)}>Remove</button>
            </li>
          ))}
        <li>
          <input
            onChange={(e) => {
              setNewTaskTitle(e.target.value);
            }}
            value={newTaskTitle}
          />
          <button onClick={handleAddTask}>Add</button>
        </li>
      </ul>
    </main>
  );
}
