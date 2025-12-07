import { useCallback } from "react";
import { useAuth } from ".";
import { axiosAuth } from "../client/axios";

export const useRefreshToken = () => {
	const { setAuth } = useAuth();

	const refreshToken = useCallback(async () => {
		const response = await axiosAuth.get("/refreshtoken", { withCredentials: true });
		setAuth({ token: response.data?.token });
		return { token: response.data?.token };
	}, [setAuth]);

	return { refreshToken };
};
