import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

const AuthRequired = () => {
	const { auth } = useAuth();
	if (auth?.isLogout || !auth?.token) return <Navigate to="/login" replace />;

	return <Outlet />;
};

export default AuthRequired;
