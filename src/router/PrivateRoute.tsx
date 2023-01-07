import React from "react";

interface PrivateRouteProps {
  component: React.ComponentType;
  path?: string;
}

export const PrivateRoute = ({ component: RouteComponent }: PrivateRouteProps) => {};
