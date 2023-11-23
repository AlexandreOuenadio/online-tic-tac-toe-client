import styled from "styled-components";
import { Send } from "react-feather";

export const WrapperChatContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const WrapperChatHeader = styled.div`
	flex: 1 0 4rem;
	max-height: 4rem;
	display: flex;
	justify-content: center;
	gap: 0.8rem;
	align-items: center;
	padding: 0 2.4rem;
`;

export const ChatTitle = styled.div`
	font-size: 1.8rem;
	font-weight: 600;
	color: ${({ theme }) => theme.text};
`;

export const UserConnectionState = styled.div`
	height: 0.8rem;
	width: 0.8rem;
	border-radius: 100%;
	background-color: ${({ theme }) => theme.okColor};
`;

export const UsernameChatHeader = styled.div`
	font-size: 1.4rem;
`;

export const WrapperChatBody = styled.div`
	flex: 3 1 70rem;
	max-height: 70rem;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	overflow-y: auto;
	padding: 1.6rem 2.4rem;
`;

export const WrapperMessage = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	background-color: white;
	border-radius: 8px;
`;

export const WrapperPictureUsernameDate = styled.div`
	height: 3.2rem;
	display: flex;
	gap: 1.6rem;
	align-items: center;
`;

export const Date = styled.div``;

export const Username = styled.div`
	font-weight: 500;
`;
export const WrapperUserProfilePicture = styled.div`
	height: 3.2rem;
	width: 3.2rem;
	overflow: hidden;
	border-radius: 100%;
`;
export const UserProfilePicture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Message = styled.div``;

export const WrapperChatFooter = styled.div`
	flex: 1 0 10rem;
	max-height: 10rem;
	display: flex;
	align-items: center;
	padding: 1.6rem 2.4rem;
`;

export const WrapperChatInput = styled.div`
	position: relative;
	width: 100%;
`;

export const ChatInput = styled.input`
	width: 100%;
	padding: 1.6rem 4.8rem 1.6rem 1.6rem;
	height: 4rem;
	background-color: ${props => props.theme.grayscale.light};
	outline-color: ${props => props.theme.primary};
	border-radius: 0.8rem;
`;

export const SendButton = styled(Send)`
	position: absolute;
	right: 1.6rem;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
`;
