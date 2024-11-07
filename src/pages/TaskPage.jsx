import { CornerUpLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const title = searchParams.get("title");
  return (
    <div className="w-screen h-screen bg-gray-400 flex justify-center p-6 relative">
      <button
        onClick={() => navigate(-1)}
        className="flex flex-row gap-1 text-white font-bold bg-slate-500 p-2 rounded-lg absolute left-3 top-3 shadow-md"
      >
        <CornerUpLeft /> Voltar
      </button>
      <div className="w-[500px] flex flex-col gap-5">
        <h1 className="text-slate-50 text-center text-3xl font-bold">
          Detalhes da Tarefa
        </h1>
        <div className="p-6 bg-slate-500 rounded-md">
          <h2 className="text-white text-1xl">
            <strong>Tarefa</strong>: {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
