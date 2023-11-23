import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosAPI } from "../client/axios";

export const useUploadProfilePicture = () => {
	const queryClient = useQueryClient();
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
