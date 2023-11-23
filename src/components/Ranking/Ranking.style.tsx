import styled, { css } from "styled-components";

const rankingRowStyle = css`
	display: flex;
	align-items: center;
	padding: 4rem;
	& > * {
		flex: 1 1 21rem;
		text-align: center;
	}
`;

export const WrapperRanking = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	border: 2px solid ${props => props.theme.inputBorder};
`;

export const RankingRowHeader = styled.div`
	${rankingRowStyle}
	height: 4rem;
	font-weight: 600;
	background-color: ${props => props.theme.grayscale.soft};
`;

export const RankingUser = styled.div``;
export const RankingPoints = styled.div``;
export const RankingRank = styled.div``;

export const RankingRow = styled.div`
	${rankingRowStyle}
	height: 12.8rem;
`;

export const WrapperUserPictureUsername = styled.div`
	display: flex;
	gap: 3.2rem;
	align-items: center;
	height: 100%;
	justify-content: space-between;
`;

export const WrapperProfilePicture = styled.div`
	height: 6.4rem;
	border-radius: 100%;
	overflow: hidden;
	width: 6.4rem;
`;

export const UserProfilePicture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Username = styled.div``;

export const UserPoints = styled.div``;

export const UserRank = styled.div``;
