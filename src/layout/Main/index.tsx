import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "..";
import { useContext, PropsWithChildren } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Login } from "../Login";
import { Dashboard } from "../../pages/Dashboard";
import { Shop } from "../../pages/Shop";
import { Library } from "../../pages/Library";

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const user = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/library" element={<Library />} />
    </Route>,
    <Route path="/login" element={<Login />} />,
  ]),
);

export function Main() {
  return <RouterProvider router={router} />;
}
