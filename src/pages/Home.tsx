import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { user, login } = useAuth();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      login(name.trim());         // lagrer brukernavnet
      navigate("/velg");         // sender til neste side
    }
  };

  if (user) {
    navigate("/velg"); // Hvis allerede logget inn, send videre
    return null;
  }

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Velkommen til SBE reservasjon</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-lg font-medium">Registrer navnet ditt her:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Ditt navn"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Fortsett
        </button>
      </form>
    </div>
  );
}
