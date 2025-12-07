import styled from "styled-components";

export const WrapperChat = styled.div`
	width: 30%;
	height: 100%;
	background-color: white;

	@media (max-width: ${props => props.theme.breakpoints.tablet}) {
		width: 100%;
		height: 400px; /* Fixed height on mobile */
		max-height: 50vh; /* Don't exceed half viewport */
	}
`;

export const WrapperGame = styled.div`
	width: 70%;
	height: 100%;
	background-color: ${props => props.theme.primary};
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing.md};
	justify-content: center;
	align-items: center;
	position: relative;

	@media (max-width: ${props => props.theme.breakpoints.tablet}) {
		width: 100%;
		height: auto; /* Let content determine height */
		padding: ${props => props.theme.spacing.lg} 0;
	}
`;

export const OverlayWaitingRoom = styled.div<{ overlayHidden: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	transition: all 0.3s;
	visibility: ${props => (props.overlayHidden ? "hidden" : "visible")};
`;
export const WrapperWaitingRoomContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const WrapperWaitingRoomPlayersPictures = styled.div`
	display: flex;
	gap: 0.8rem;
	justify-content: center;
`;

export const WrapperWaitingRoomPlayerPicture = styled.div`
	height: 4.8rem;
	width: 4.8rem;
	overflow: hidden;
	border-radius: 100%;
`;
export const WaitingRoomPlayerPicture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const WaitingRoomText = styled.div`
	font-size: 2.4rem;
	font-weight: 600;
`;

import { Button } from "../../components/Forms/Form.style";

export const JoinWaitingRoomButton = styled(Button)`
	width: auto;
	padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xl};
`;

export const Countdown = styled.div`
	font-size: 2.4rem;
	font-weight: 600;
	background-color: rgba(0, 0, 0, 0.5);
	padding: ${props => props.theme.spacing.lg};
	border-radius: ${props => props.theme.borderRadius.lg};
	text-align: center;

	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		font-size: 1.8rem;
	}
`;

export const GameCanceledText = styled.div`
	font-size: 2.4rem;
	font-weight: 600;
	background-color: rgba(255, 71, 126, 0.9);
	padding: ${props => props.theme.spacing.lg};
	border-radius: ${props => props.theme.borderRadius.lg};
	text-align: center;

	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		font-size: 1.8rem;
	}
`;

export const GameInfo = styled.div`
	min-height: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const GameInfoText = styled.div`
	font-size: 2.4rem;
	font-weight: 600;
	color: white;
	background-color: rgba(0, 0, 0, 0.3);
	padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
	border-radius: ${props => props.theme.borderRadius.md};
	text-align: center;
	box-shadow: ${props => props.theme.shadows.sm};

	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		font-size: 1.8rem;
		padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
	}
`;

export const WrapperPlayersInGame = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.6rem;
	position: absolute;
	top: 0;
	width: 100%;
	height: 5rem;
	background-color: rgba(0, 0, 0, 0.1);
	color: white;
`;
export const WrapperPlayer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;
export const WrapperPlayerPicture = styled.div`
	height: 3.2rem;
	width: 3.2rem;
	overflow: hidden;
	border-radius: 100%;
`;
export const PlayerPicture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
export const PlayerName = styled.div`
	font-weight: 500;
`;

export const VersusTitle = styled.div`
	font-weight: 500;
`;
