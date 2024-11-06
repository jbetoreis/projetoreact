import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  return (
    <div className="w-screen h-screen bg-gray-400 flex justify-center p-6">
      <h1>{title}</h1>
    </div>
  );
}

export default TaskPage;
