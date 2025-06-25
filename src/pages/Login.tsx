import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("sbe-user", name);
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Logg inn</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Logg inn</button>
      </form>
    </div>
  );
}
