import styled, { css } from "styled-components";

const rankingRowStyle = css`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	align-items: center;
	padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
	gap: ${props => props.theme.spacing.md};

	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		grid-template-columns: 1fr auto;
		padding: ${props => props.theme.spacing.sm};
		gap: ${props => props.theme.spacing.sm};
	}
`;

export const WrapperRanking = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: ${props => props.theme.borderRadius.lg};
	box-shadow: ${props => props.theme.shadows.md};
	overflow: hidden;
	width: 100%;
`;

export const RankingRowHeader = styled.div`
	${rankingRowStyle}
	background-color: ${props => props.theme.grayscale.light};
	font-weight: 600;
	color: ${props => props.theme.grayscale.dark};
	font-size: 1.4rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;

	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		display: none; /* Hide header on mobile for cleaner look */
	}
`;

export const RankingUser = styled.div`
	text-align: left;
`;
export const RankingPoints = styled.div`
	text-align: center;
	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		text-align: right;
	}
`;
export const RankingRank = styled.div`
	text-align: center;
	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		display: none; /* Hide rank number on mobile if space is tight, or move it */
	}
`;

export const RankingRow = styled.div`
	${rankingRowStyle}
	border-bottom: 1px solid ${props => props.theme.grayscale.light};
	transition: background-color 0.2s ease;

	&:last-child {
		border-bottom: none;
	}

	&:hover {
		background-color: ${props => props.theme.background};
	}
`;

export const WrapperUserPictureUsername = styled.div`
	display: flex;
	align-items: center;
	gap: ${props => props.theme.spacing.md};
`;

export const WrapperProfilePicture = styled.div`
	height: 4.8rem;
	width: 4.8rem;
	border-radius: ${props => props.theme.borderRadius.round};
	overflow: hidden;
	flex-shrink: 0;
	border: 2px solid ${props => props.theme.grayscale.light};

	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		height: 4rem;
		width: 4rem;
	}
`;

export const UserProfilePicture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Username = styled.div`
	font-weight: 600;
	color: ${props => props.theme.text};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const UserPoints = styled.div`
	font-weight: 700;
	color: ${props => props.theme.primary};
`;

export const UserRank = styled.div`
	font-weight: 600;
	color: ${props => props.theme.grayscale.soft};
`;
