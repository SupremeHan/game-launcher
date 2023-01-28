import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { auth } from "../../../firebase";

export function Sidebar() {
  const signOut = async () => {
    await auth.signOut();
  };
  return (
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
  );
}
