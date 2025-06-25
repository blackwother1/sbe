import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleRegister(event: React.FormEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const name = nameInput.value.trim();
    if (!name) return;
    login(name);
    navigate("/velg");
  }

  return (
    <form onSubmit={handleRegister} className="p-6 max-w-sm mx-auto space-y-4">
      <h1 className="text-xl font-bold">Registrer deg</h1>
      <input
        type="text"
        name="name"
        placeholder="Skriv inn navnet ditt"
        className="border px-4 py-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Registrer
      </button>
    </form>
  );
}
