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
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginMutation } from "../../../mutations/auth";
import { useAuth } from "../../../hooks";
import { AxiosError, AxiosResponse } from "axios";

export interface FormLoginType {
	username: string;
	password: string;
}

const FormLogin = () => {
	const { setAuth } = useAuth();
	const [formLogin, setFormLogin] = useState<FormLoginType>({
		username: "",
		password: "",
	});

	const {
		mutate: login,
		error,
		isError,
	} = useMutation<
		AxiosResponse<{ token: string }>,
		AxiosError,
		{ username: string; password: string }
	>({
		mutationFn: loginMutation,
	});

	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		login(
			{
				username: formLogin.username,
				password: formLogin.password,
			},
			{
				onSuccess({ data }) {
					setAuth({ token: data?.token, isLogout: false });
					navigate("/", { replace: true });
				},
			}
		);
	};

	return (
		<WrapperForm>
			<WrapperFormItems>
				{isError && error?.response?.status === 401 && (
					<FormErrorWrapper>Mauvais identifiants</FormErrorWrapper>
				)}
				<WrapperFormItem>
					<InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
					<Input
						id="username"
						type="text"
						placeholder="Votre nom d'utilisateur"
						value={formLogin.username}
						onChange={e => {
							setFormLogin(
								(prev: FormLoginType): FormLoginType => ({
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
						value={formLogin.password}
						onChange={e => {
							setFormLogin(
								(prev: FormLoginType): FormLoginType => ({
									...prev,
									password: e.target.value,
								})
							);
						}}
					/>
				</WrapperFormItem>
			</WrapperFormItems>
			<FormSubmitButton onClick={handleSubmit}>Se connecter</FormSubmitButton>
		</WrapperForm>
	);
};

export default FormLogin;
