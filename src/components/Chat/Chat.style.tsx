import styled from "styled-components";
import { Send } from "react-feather";

export const WrapperChatContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: white;
	border-radius: ${props => props.theme.borderRadius.lg};
	box-shadow: ${props => props.theme.shadows.md};
	overflow: hidden;
`;

export const WrapperChatHeader = styled.div`
	flex: 0 0 5rem;
	display: flex;
	justify-content: center;
	gap: ${props => props.theme.spacing.sm};
	align-items: center;
	padding: 0 ${props => props.theme.spacing.lg};
	border-bottom: 1px solid ${props => props.theme.grayscale.light};
	background-color: ${props => props.theme.background};
`;

export const ChatTitle = styled.div`
	font-size: 1.8rem;
	font-weight: 600;
	color: ${({ theme }) => theme.text};
`;

export const OnlineIndicatorWrapper = styled.div`
	position: relative;
	margin-left: auto;
`;

export const OnlineIndicator = styled.div`
	display: flex;
	align-items: center;
	gap: ${props => props.theme.spacing.xs};
	padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
	background-color: ${({ theme }) => theme.okColor};
	border-radius: 2rem;
	cursor: pointer;
	transition: all 0.2s ease;
	
	&:hover {
		transform: scale(1.05);
		box-shadow: ${props => props.theme.shadows.sm};
	}
`;

export const OnlineCircle = styled.div`
	height: 1rem;
	width: 1rem;
	border-radius: 100%;
	background-color: white;
`;

export const PlayerCount = styled.span`
	font-size: 1.2rem;
	font-weight: 600;
	color: white;
	min-width: 1.2rem;
	text-align: center;
`;

export const PlayersDropdown = styled.div<{ isOpen: boolean }>`
	position: absolute;
	top: calc(100% + ${props => props.theme.spacing.xs});
	right: 0;
	background-color: white;
	border-radius: ${props => props.theme.borderRadius.md};
	box-shadow: ${props => props.theme.shadows.lg};
	min-width: 20rem;
	max-height: 30rem;
	overflow-y: auto;
	z-index: 1000;
	opacity: ${props => props.isOpen ? 1 : 0};
	visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
	transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-1rem)'};
	transition: all 0.2s ease;
`;

export const DropdownHeader = styled.div`
	padding: ${props => props.theme.spacing.md};
	border-bottom: 1px solid ${props => props.theme.grayscale.light};
	font-weight: 600;
	font-size: 1.4rem;
	color: ${props => props.theme.text};
`;

export const PlayerItem = styled.div`
	display: flex;
	align-items: center;
	gap: ${props => props.theme.spacing.sm};
	padding: ${props => props.theme.spacing.md};
	border-bottom: 1px solid ${props => props.theme.grayscale.light};
	transition: background-color 0.2s ease;
	
	&:last-child {
		border-bottom: none;
	}
	
	&:hover {
		background-color: ${props => props.theme.grayscale.light};
	}
`;

export const PlayerItemPicture = styled.div`
	height: 3.2rem;
	width: 3.2rem;
	overflow: hidden;
	border-radius: 100%;
	flex-shrink: 0;
`;

export const PlayerItemImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const PlayerItemName = styled.div`
	font-size: 1.4rem;
	font-weight: 500;
	color: ${props => props.theme.text};
`;

export const EmptyPlayersMessage = styled.div`
	padding: ${props => props.theme.spacing.lg};
	text-align: center;
	color: ${props => props.theme.grayscale.soft};
	font-size: 1.3rem;
`;

export const UserConnectionState = styled.div`
	height: 1rem;
	width: 1rem;
	border-radius: 100%;
	background-color: ${({ theme }) => theme.okColor};
`;

export const UsernameChatHeader = styled.div`
	font-size: 1.4rem;
	color: ${props => props.theme.grayscale.dark};
`;

export const WrapperChatBody = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing.md};
	overflow-y: auto;
	padding: ${props => props.theme.spacing.lg};
	background-color: ${props => props.theme.grayscale.light};
`;

export const WrapperMessage = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing.xs};
	background-color: white;
	border-radius: ${props => props.theme.borderRadius.md};
	padding: ${props => props.theme.spacing.sm};
	box-shadow: ${props => props.theme.shadows.sm};
	max-width: 85%;
	align-self: flex-start;

	&.self {
		align-self: flex-end;
		background-color: ${props => props.theme.primary};
		color: white;
	}
`;

export const WrapperPictureUsernameDate = styled.div`
	display: flex;
	gap: ${props => props.theme.spacing.sm};
	align-items: center;
	margin-bottom: ${props => props.theme.spacing.xs};
`;

export const Date = styled.div`
	font-size: 1rem;
	color: ${props => props.theme.grayscale.soft};
`;

export const Username = styled.div`
	font-weight: 600;
	font-size: 1.2rem;
`;

export const WrapperUserProfilePicture = styled.div`
	height: 2.4rem;
	width: 2.4rem;
	overflow: hidden;
	border-radius: 100%;
	flex-shrink: 0;
`;

export const UserProfilePicture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Message = styled.div`
	word-break: break-word;
	line-height: 1.4;
`;

export const WrapperChatFooter = styled.div`
	flex: 0 0 auto;
	display: flex;
	align-items: center;
	padding: ${props => props.theme.spacing.md};
	background-color: white;
	border-top: 1px solid ${props => props.theme.grayscale.light};
`;

export const WrapperChatInput = styled.div`
	position: relative;
	width: 100%;
`;

export const ChatInput = styled.input`
	width: 100%;
	padding: ${props => props.theme.spacing.md};
	padding-right: 4.8rem;
	background-color: ${props => props.theme.grayscale.light};
	outline: none;
	border: 1px solid transparent;
	border-radius: ${props => props.theme.borderRadius.md};
	transition: all 0.2s ease;

	&:focus {
		background-color: white;
		border-color: ${props => props.theme.primary};
		box-shadow: 0 0 0 2px ${props => props.theme.primary}33;
	}
`;

export const SendButton = styled(Send)`
	position: absolute;
	right: ${props => props.theme.spacing.md};
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	color: ${props => props.theme.primary};
	transition: transform 0.2s ease;

	&:hover {
		transform: translateY(-50%) scale(1.1);
	}
`;

export const CombatIcon = styled.span`
	display: inline-flex;
	align-items: center;
	margin-left: ${props => props.theme.spacing.xs};
	font-size: 1.2rem;
	color: #e74c3c;
	font-weight: bold;
`;
