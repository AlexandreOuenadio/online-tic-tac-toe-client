import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../client/axios";

export const useUsers = () => {
	const { data } = useQuery({
		queryFn: () => axiosPublic.get("/users"),
		queryKey: ["users"],
	});

	const users = data?.data || [];

	return { users };
};
