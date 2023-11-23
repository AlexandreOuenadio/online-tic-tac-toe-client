import styled from "styled-components";

export const WrapperChat = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	width: 30vw;
	height: 100%;
	background-color: white;
`;

export const WrapperGame = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 70vw;
	height: 100%;
	background-color: ${props => props.theme.primary};
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	justify-content: center;
	align-items: center;
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

export const JoinWaitingRoomButton = styled.button`
	background-color: ${props => props.theme.primary};
`;

export const Countdown = styled.div`
	font-size: 2.4rem;
	font-weight: 600;
`;

export const GameCanceledText = styled.div`
	font-size: 2.4rem;
	font-weight: 600;
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
	color: ${({ theme }) => theme.text};
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
