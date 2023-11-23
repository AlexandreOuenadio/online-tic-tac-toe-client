import { useQuery } from "@tanstack/react-query";
import { useAxiosAPI } from "./useAxiosAPI";
import { useAuth } from ".";

export const useUserProfile = () => {
	const { axiosAPI } = useAxiosAPI();
	const { auth } = useAuth();

	const { data } = useQuery({
		queryFn: () => axiosAPI.get("/user/profile"),
		queryKey: ["userProfile"],
		enabled: !auth?.isLogout,
	});

	const user = data?.data || {};

	return { user };
};
