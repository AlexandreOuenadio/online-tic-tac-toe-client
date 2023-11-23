import { lostImage } from "../../assets";
import { PageTitle, WrapperPage } from "../Page.style";
import * as S from "./NotFoundPage.style";
const NotFoundPage = () => {
	return (
		<WrapperPage>
			<PageTitle>Désolé poto mais t'es perdu</PageTitle>
			<S.LostImage src={lostImage} />
		</WrapperPage>
	);
};

export default NotFoundPage;
