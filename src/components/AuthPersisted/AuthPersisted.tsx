import { useEffect, useState } from "react";
import { useAuth, useRefreshToken } from "../../hooks";
import { Outlet } from "react-router-dom";

import { Loader } from "..";

const AuthPersisted = () => {
	const [isLoading, setLoading] = useState(true);
	const { auth } = useAuth();
	const { refreshToken } = useRefreshToken();

	useEffect(() => {
		const verifyToken = async () => {
			try {
				await refreshToken();
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		};

		!auth.token && !auth?.isLogout ? verifyToken() : setLoading(false);
	}, [auth, refreshToken]);

	return isLoading ? <Loader /> : <Outlet />;
};

export default AuthPersisted;
