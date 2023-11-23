import { useUserProfile } from "../../hooks";
import { useUploadProfilePicture } from "../../hooks/useUploadProfilePicture";
import { PageTitle, WrapperPage } from "../Page.style";
import * as S from "./ProfilePage.style";

const ProfilePage = () => {
	const { user } = useUserProfile();
	const { uploadProfilePicture } = useUploadProfilePicture();

	return (
		<WrapperPage>
			<PageTitle>Mon Profil</PageTitle>
			<S.WrapperProfilePage>
				<S.WrapperProfilePictureUsername>
					<S.WrapperProfilePicture htmlFor="changeProfilePicture">
						<S.ProfilePicture src={user?.profilePictureURL || ""} />
					</S.WrapperProfilePicture>
					<S.WrapperUsername>{user?.username}</S.WrapperUsername>
				</S.WrapperProfilePictureUsername>

				<S.WrapperEdition>
					<S.EditButton>Changer de mot de passe</S.EditButton>
					<S.ChangeProfilePictureButton
						onChange={e => {
							if (!e.target?.files?.[0]) return null;

							uploadProfilePicture(e.target?.files?.[0]);
						}}
						id="changeProfilePicture"
						style={{ display: "none" }}
						type="file"
						accept="image/*"
					/>
				</S.WrapperEdition>
			</S.WrapperProfilePage>
		</WrapperPage>
	);
};

export default ProfilePage;
