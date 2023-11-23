import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

const RedirectIfAuthenticated = () => {
    const { auth } = useAuth();

    if (auth.token) {
        return <Navigate to="/ranking" replace />;
    }

    return <Outlet />;
};

export default RedirectIfAuthenticated;
