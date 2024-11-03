import { Check, Eye, Square } from "lucide-react";

function TaskList(props) {
  return (
    <ul className="bg-slate-500 p-5 rounded-lg flex flex-col gap-3">
      {props.tasks.map((task) => (
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
          <button className="bg-slate-300 p-3 text-white rounded-md">
            <Eye />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
