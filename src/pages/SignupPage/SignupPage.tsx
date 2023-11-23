import { Navigate } from "react-router-dom";
import { FormSignup } from "../../components";
import { useAuth } from "../../hooks";
import { PageTitle, WrapperPage } from "../Page.style";
import { LinkToLoginPage, WrapperAlreadyHaveAccount } from "./SignupPage.style";

const SignupPage = () => {
	const { auth } = useAuth();
	if (!auth?.isLogout) {
		return <Navigate to="/profile" />;
	}
	return (
		<WrapperPage>
			<PageTitle>Inscription</PageTitle>
			<FormSignup />
			<WrapperAlreadyHaveAccount>
				Vous avez déjà un compte ?{" "}
				<LinkToLoginPage to="/login">Connectez-vous !</LinkToLoginPage>
			</WrapperAlreadyHaveAccount>
		</WrapperPage>
	);
};

export default SignupPage;
