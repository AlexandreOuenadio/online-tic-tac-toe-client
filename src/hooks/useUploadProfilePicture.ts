import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxiosAPI } from "./useAxiosAPI";

export const useUploadProfilePicture = () => {
	const queryClient = useQueryClient();
	const { axiosAPI } = useAxiosAPI();
	const { mutate: upload } = useMutation({
		mutationFn: (formData: FormData) =>
			axiosAPI.post<{ username: string; profilePictureURL: string }>(
				"/user/profile/picture",
				formData
			),
		onSuccess: data => {
			queryClient.setQueryData(["userProfile"], data);
		},
	});
	const uploadProfilePicture = (file: File) => {
		const formData = new FormData();
		formData.append("fileToUpload", file);
		upload(formData);
	};

	return { uploadProfilePicture };
};
