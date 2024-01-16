import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: ReactElement;
  isAuthenticated: boolean;
  admin?: boolean;
  adminOnly?: boolean;
  redirect?: string;
}

export default function Protectedroute({
  children,
  isAuthenticated,
  admin,
  adminOnly,
  redirect = "/",
}: Props) {
  if (!isAuthenticated) return <Navigate to={redirect} />;
  if (adminOnly && !admin) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
}
