import { useState } from "react";
import {
	FormErrorWrapper,
	FormSubmitButton,
	Input,
	InputLabel,
	WrapperForm,
	WrapperFormItem,
	WrapperFormItems,
} from "../Form.style";
import { useMutation } from "@tanstack/react-query";
import { signupMutation } from "../../../mutations/auth";
import { useNavigate } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";

export interface FormSignupType {
	username: string;
	password: string;
	repassword: string;
}

const FormSignup = () => {
	const [formSignup, setFormSignup] = useState<FormSignupType>({
		username: "",
		password: "",
		repassword: "",
	});

	const {
		error,
		mutate: signup,
		isError,
	} = useMutation<
		AxiosResponse,
		AxiosError<{ error: { message: string } }>,
		{ username: string; password: string; repassword: string }
	>({
		mutationFn: signupMutation,
	});

	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		signup(
			{
				username: formSignup.username,
				password: formSignup.password,
				repassword: formSignup.repassword,
			},
			{
				onSuccess() {
					navigate("/profile", { replace: true });
				},
			}
		);
	};

	return (
		<WrapperForm>
			<WrapperFormItems>
				{isError && error?.response?.data?.error && (
					<FormErrorWrapper>{error.response.data.error.message}</FormErrorWrapper>
				)}
				<WrapperFormItem>
					<InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
					<Input
						id="username"
						type="text"
						placeholder="Votre nom d'utilisateur"
						value={formSignup.username}
						onChange={e => {
							setFormSignup(
								(prev: FormSignupType): FormSignupType => ({
									...prev,
									username: e.target.value,
								})
							);
						}}
					/>
				</WrapperFormItem>
				<WrapperFormItem>
					<InputLabel htmlFor="password">Mot de passe</InputLabel>
					<Input
						id="password"
						type="password"
						placeholder="Votre mot de passe"
						value={formSignup.password}
						onChange={e => {
							setFormSignup(
								(prev: FormSignupType): FormSignupType => ({
									...prev,
									password: e.target.value,
								})
							);
						}}
					/>
				</WrapperFormItem>
				<WrapperFormItem>
					<InputLabel htmlFor="repassword">Confirmation du mot de passe</InputLabel>
					<Input
						id="repassword"
						type="password"
						placeholder="Votre mot de passe"
						value={formSignup.repassword}
						onChange={e => {
							setFormSignup(
								(prev: FormSignupType): FormSignupType => ({
									...prev,
									repassword: e.target.value,
								})
							);
						}}
					/>
				</WrapperFormItem>
			</WrapperFormItems>
			<FormSubmitButton onClick={handleSubmit}>Créer un compte</FormSubmitButton>
		</WrapperForm>
	);
};

export default FormSignup;
