import { Navigate, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import "./Layout.scss";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const user = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="Layout">
      <Sidebar />
      <main className="Main">
        <Outlet />
      </main>
    </div>
  );
}
