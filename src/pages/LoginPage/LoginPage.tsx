import { FormLogin } from "../../components";
import { PageTitle, WrapperPage } from "../Page.style";
import { LinkToAccountCreation, WrapperNeedAccount } from "./LoginPage.style";

const LoginPage = () => {

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
