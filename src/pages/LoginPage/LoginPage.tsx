import { FormLogin } from "../../components";
import { PageTitle, WrapperPage } from "../Page.style";
import { LinkToAccountCreation, LoginCard, WrapperNeedAccount } from "./LoginPage.style";

const LoginPage = () => {

	return (
		<WrapperPage>
			<LoginCard>
				<PageTitle>Connexion</PageTitle>
				<FormLogin />
				<WrapperNeedAccount>
					Vous n'êtes pas inscrit(e) ?{" "}
					<LinkToAccountCreation to="/signup">Créez un compte !</LinkToAccountCreation>
				</WrapperNeedAccount>
			</LoginCard>
		</WrapperPage>
	);
};

export default LoginPage;
