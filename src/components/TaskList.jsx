import { Check, Eye, Square, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskList(props) {
  const navigate = useNavigate();

  function navigateToTaskDatail(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="bg-slate-500 p-5 rounded-lg shadow-md flex flex-col gap-3">
      {props.tasks.length === 0 ? (
        <div
          className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
          role="alert"
        >
          Não há tarefas cadastradas!
        </div>
      ) : (
        props.tasks.map((task) => (
          <li key={task.id} className="flex flex-row gap-2">
            <button
              onClick={() => props.onTaskClick(task.id)}
              className={`bg-slate-300 p-3 text-white text-left rounded-md w-full flex gap-1 ${
                task.done && "line-through"
              }`}
            >
              {task.done ? <Check /> : <Square />}
              {task.title}
            </button>
            <button
              onClick={() => navigateToTaskDatail(task)}
              className="bg-slate-300 p-3 text-white rounded-md"
            >
              <Eye />
            </button>
            <button
              onClick={() => props.deleteTask(task.id)}
              className="bg-slate-300 p-3 text-white rounded-md"
            >
              <Trash />
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default TaskList;
