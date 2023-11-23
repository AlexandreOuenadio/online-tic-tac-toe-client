import { axiosAuth } from "../client/axios";
import { FormLoginType } from "../components/Forms/FormLogin/FormLogin";
import { FormSignupType } from "../components/Forms/FormSignup/FormSignup";

export const signupMutation = async ({ username, password, repassword }: FormSignupType) => {
	return axiosAuth.post("/signup", {
		username,
		password,
		repassword,
	});
};

export const loginMutation = async ({ username, password }: FormLoginType) => {
	return axiosAuth.post(
		"/login",
		{
			username,
			password,
		},
		{ withCredentials: true }
	);
};

export const logoutMutation = async () => {
	return axiosAuth.post("/logout", {}, { withCredentials: true });
};
