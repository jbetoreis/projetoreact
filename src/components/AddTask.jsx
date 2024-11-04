import { useState } from "react";

function AddTask(props) {
  const [task, updateTask] = useState({
    title: "",
    done: false,
  });
  const [isValid, setIsValid] = useState(true);

  return (
    <div className="bg-slate-500 p-5 rounded-lg shadow-md flex flex-col gap-3">
      <form
        id="formAddTask"
        onSubmit={(event) => {
          event.preventDefault();
          if (!task.title.trim()) {
            setIsValid(false);
          } else {
            props.addTask(task);
            updateTask({ ...task, title: "" });
            setIsValid(true);
          }
        }}
      >
        <div className="mb-3">
          <label
            htmlFor="input-title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Título
          </label>
          <input
            type="text"
            id="input-title"
            value={task.title}
            onChange={(e) =>
              updateTask((prevTask) => ({
                ...prevTask,
                title: e.target.value,
              }))
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
          {isValid ? (
            ""
          ) : (
            <p className="text-yellow-400">Preencha o título da tarefa</p>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
export default AddTask;
