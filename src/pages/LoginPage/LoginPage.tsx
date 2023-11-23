import { Navigate } from "react-router-dom";
import { FormLogin } from "../../components";
import { PageTitle, WrapperPage } from "../Page.style";
import { LinkToAccountCreation, WrapperNeedAccount } from "./LoginPage.style";
import { useAuth } from "../../hooks";

const LoginPage = () => {
	const { auth } = useAuth();
	if (!auth?.isLogout) {
		return <Navigate to="/profile" />;
	}
	return (
		<WrapperPage>
			<PageTitle>Connexion</PageTitle>
			<FormLogin />
			<WrapperNeedAccount>
				Vous n'êtes pas inscrit(e) ?{" "}
				<LinkToAccountCreation to="/signup">Créez un compte !</LinkToAccountCreation>
			</WrapperNeedAccount>
		</WrapperPage>
	);
};

export default LoginPage;
