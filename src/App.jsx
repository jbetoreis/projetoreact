import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, updateTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      done: false,
    },
    {
      id: 2,
      title: "Estudar .NET",
      done: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    updateTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-gray-400 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-slate-50 text-center text-3xl font-bold">
          Gerenciador Tarefas
        </h1>
        <AddTask />
        <TaskList tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
