import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, addTask] = useState([
    {
      id: 1,
      title: "Estudar React",
      done: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-slate-50 text-center text-3xl font-bold">
          Gerenciador Tarefas
        </h1>
        <TaskList />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
