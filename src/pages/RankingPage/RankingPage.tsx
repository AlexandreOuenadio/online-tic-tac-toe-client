import { Ranking } from "../../components";
import { PageTitle, WrapperPage } from "../Page.style";

const RankingPage = () => {
	return (
		<WrapperPage topAligned>
			<PageTitle>Classement</PageTitle>
			<Ranking />
		</WrapperPage>
	);
};

export default RankingPage;
