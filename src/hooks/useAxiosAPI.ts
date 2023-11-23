import { useEffect } from "react";
import { axiosAPI } from "../client/axios";
import { useAuth } from ".";
import { useRefreshToken } from "./useRefreshToken";

export const useAxiosAPI = () => {
	const { auth, setAuth } = useAuth();
	const { refreshToken } = useRefreshToken();
	useEffect(() => {
		const requestInterceptorId = axiosAPI.interceptors.request.use(config => {
			const token = auth?.token;
			if (token) config.headers.Authorization = `Bearer ${token}`;

			return config;
		});
		const responseInterceptorId = axiosAPI.interceptors.response.use(
			response => response,
			async error => {
				const prevRequest = error?.config;
				const status = error?.response?.status;
				if (status === 403) {
					try {
						const token = await refreshToken();
						prevRequest.headers.Authorization = `Bearer ${token}`;
						return axiosAPI(prevRequest);
					} catch (e) {
						setAuth({ token: null, isLogout: true });
						console.log(e);
					}
				}
				return Promise.reject(error);
			}
		);

		return () => {
			axiosAPI.interceptors.request.eject(requestInterceptorId);
			axiosAPI.interceptors.response.eject(responseInterceptorId);
		};
	}, [auth, setAuth, refreshToken]);

	return { axiosAPI };
};
