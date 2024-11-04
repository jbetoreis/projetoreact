import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { v4 } from "uuid";

function App() {
  const [tasks, updateTasks] = useState([]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    updateTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    updateTasks(newTasks);
  }

  function addTask(task) {
    task.id = v4();
    const newTask = [...tasks, task];
    updateTasks(newTask);
  }

  return (
    <div className="w-screen h-screen bg-gray-400 flex justify-center p-6">
      <div className="w-[500px] flex flex-col gap-5">
        <h1 className="text-slate-50 text-center text-3xl font-bold">
          Gerenciador Tarefas
        </h1>
        <AddTask addTask={addTask} />
        <TaskList
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
