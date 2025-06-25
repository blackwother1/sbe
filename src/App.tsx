import { Routes, Route, Navigate } from "react-router-dom";
import type { JSX } from "react";
import { AuthProvider, useAuth } from "./hooks/useAuth.tsx";

import Velg from "./pages/Velg";
import Home from "./pages/Home";
import Trailers from "./pages/Trailers";
import Tools from "./pages/Tools";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  // ✅ henter navnet på innlogget bruker
  const user = useAuth();

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        {/* header med brukernavn */}
        <header className="bg-blue-600 text-white p-4 text-xl font-bold flex justify-between items-center">
          <span>SBE</span>
         {user.user && <span className="text-sm">Innlogget som: {user.user}</span>}
        </header>

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/trailers"
              element={
                <RequireAuth>
                  <Trailers />
                </RequireAuth>
              }
            />
            <Route
              path="/tools"
              element={
                <RequireAuth>
                  <Tools />
                </RequireAuth>
              }
            />
            <Route path="/velg" element={<RequireAuth><Velg /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const user = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
