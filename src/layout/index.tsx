import { auth } from "../../firebase";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export function Layout() {
  const user = useContext(AuthContext);

  const signOut = async () => {
    await auth.signOut();
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>gas gas</h1>
      <button type="button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}
