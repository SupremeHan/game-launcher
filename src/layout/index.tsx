import { auth } from "../../firebase";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import "./Layout.scss";

export function Layout() {
  const user = useContext(AuthContext);
  const signOut = async () => {
    await auth.signOut();
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="Layout">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/library"}>Library</NavLink>

        <button type="button" onClick={signOut}>
          Sign Out
        </button>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
