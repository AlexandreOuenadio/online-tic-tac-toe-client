import { useUserProfile } from "../../hooks";
import { useUploadProfilePicture } from "../../hooks/useUploadProfilePicture";
import { useUsers } from "../../hooks/useUsers";
import { PageTitle, WrapperPage } from "../Page.style";
import * as S from "./ProfilePage.style";

const ProfilePage = () => {
	const { user } = useUserProfile();
	const { uploadProfilePicture } = useUploadProfilePicture();
	const { users } = useUsers();

	// Calculate user's rank
	const sortedUsers = users
		.filter(u => u.points > 0)
		.sort((a, b) => b.points - a.points);
	const userRank = sortedUsers.findIndex(u => u.username === user?.username) + 1;

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
					<S.UserStats>
						<S.StatItem>
							<S.StatLabel>Points</S.StatLabel>
							<S.StatValue>{user?.points || 0}</S.StatValue>
						</S.StatItem>
						<S.StatItem>
							<S.StatLabel>Classement</S.StatLabel>
							<S.StatValue>{userRank > 0 ? `#${userRank}` : "N/A"}</S.StatValue>
						</S.StatItem>
					</S.UserStats>
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
