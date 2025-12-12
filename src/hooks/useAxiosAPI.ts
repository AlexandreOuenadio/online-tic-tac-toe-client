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
				const errorType = error?.response?.data?.error?.type;
				if (status === 401) {
					try {
						if (errorType === "NO_REFRESH_TOKEN") {
							setAuth(prev => ({ ...prev, token: null, isLogout: true }));
							return Promise.reject(error);
						}
						else if (errorType === "TOKEN_EXPIRED") {

							const { token } = await refreshToken();
							setAuth(prev => ({ ...prev, token, isLogout: false }));
							prevRequest.headers.Authorization = `Bearer ${token}`;
							return axiosAPI(prevRequest);
						}
					}
					catch (e) {
						setAuth(prev => ({ ...prev, token: null, isLogout: true }));
						return Promise.reject(error);
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
