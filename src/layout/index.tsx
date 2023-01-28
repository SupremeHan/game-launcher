import { auth } from "../../firebase";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import "./Layout.scss";
import { Button } from "@chakra-ui/react";

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
      <div className="Sidebar">
        <div className="Sidebar__nav">
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/library"}>Library</NavLink>
        </div>

        <Button colorScheme={"red"} size="sm" type="button" onClick={signOut}>
          Sign Out
        </Button>
      </div>
      <main className="Main">
        <Outlet />
      </main>
    </div>
  );
}
