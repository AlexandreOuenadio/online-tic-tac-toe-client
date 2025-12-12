import { useCallback } from "react";
import { useAuth } from ".";
import { useAxiosAuth } from "./useAxiosAuth";

export const useRefreshToken = () => {
	const { setAuth } = useAuth();
	const { axiosAuth } = useAxiosAuth();

	const refreshToken = useCallback(async () => {
		const response = await axiosAuth.get("/refreshtoken", { withCredentials: true });
		return { token: response.data?.token };
	}, [setAuth]);

	return { refreshToken };
};
