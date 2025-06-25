import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Velg() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">Hei {user}!</h1>
      <p className="mb-4">Hva vil du reservere?</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/trailers")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Henger
        </button>
        <button
          onClick={() => navigate("/tools")}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Verktøy
        </button>
      </div>
    </div>
  );
}
