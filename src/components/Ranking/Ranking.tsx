import { useUsers } from "../../hooks/useUsers";
import {
	RankingPoints,
	RankingRank,
	RankingRow,
	RankingRowHeader,
	RankingUser,
	UserPoints,
	UserProfilePicture,
	UserRank,
	Username,
	WrapperProfilePicture,
	WrapperRanking,
	WrapperUserPictureUsername,
} from "./Ranking.style";

interface RankingRow {
	username: string;
	profilePictureURL: string;
	points: number;
}

export const Ranking = () => {
	const { users } = useUsers();

	return (
		<WrapperRanking>
			<RankingRowHeader>
				<RankingUser>Utilisateur</RankingUser>
				<RankingPoints>Points</RankingPoints>
				<RankingRank>Classement</RankingRank>
			</RankingRowHeader>
			{users
				?.filter(u => u?.points !== 0)
				?.toSorted((a, b) => a?.points - b?.points)
				?.toReversed()
				?.map((user, index: number) => (
					<RankingRow key={user.username}>
						<RankingUser>
							<WrapperUserPictureUsername>
								<WrapperProfilePicture>
									<UserProfilePicture src={user?.profilePictureURL} />
								</WrapperProfilePicture>
								<Username>{user?.username}</Username>
							</WrapperUserPictureUsername>
						</RankingUser>
						<RankingPoints>
							<UserPoints>{user?.points} pts</UserPoints>
						</RankingPoints>
						<RankingRank>
							<UserRank>#{index + 1}</UserRank>
						</RankingRank>
					</RankingRow>
				))}
		</WrapperRanking>
	);
};
