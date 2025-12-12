import { useEffect } from "react";
import { axiosAuth } from "../client/axios";
import { useAuth } from ".";

export const useAxiosAuth = () => {
    const { auth, setAuth } = useAuth();
    useEffect(() => {

        const responseInterceptorId = axiosAuth.interceptors.response.use(
            response => response,
            async error => {
                const status = error?.response?.status;
                const errorType = error?.response?.data?.error?.type;
                if (status === 401) {
                    try {
                        if (errorType === "NO_REFRESH_TOKEN") {
                            setAuth(prev => ({ ...prev, token: null, isLogout: true }));
                            return Promise.reject(error);
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
            axiosAuth.interceptors.response.eject(responseInterceptorId);
        };
    }, [auth, setAuth]);

    return { axiosAuth };
};
