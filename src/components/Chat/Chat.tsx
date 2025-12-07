import { useEffect, useRef, useState } from "react";
import { useUserProfile } from "../../hooks";
import { ConnectedUserType } from "../../hooks/useSocket";
import * as S from "./Chat.style";

type ChatProps = {
	messages: any[];
	socket: any;
	connectedUsers?: ConnectedUserType[];
};

const Chat = ({ messages, socket, connectedUsers = [] }: ChatProps) => {
	const { user } = useUserProfile();

	const [messageToSend, setMessageToSend] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const scrollRef = useRef(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollRef.current) {
			const chatbody = scrollRef.current as HTMLDivElement;
			chatbody.scrollTop = chatbody.scrollHeight;
		}
	}, [messages]);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsDropdownOpen(false);
			}
		};

		if (isDropdownOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isDropdownOpen]);

	return (
		<S.WrapperChatContent>
			<S.WrapperChatHeader>
				<S.ChatTitle>Chat</S.ChatTitle>
				<S.OnlineIndicatorWrapper ref={dropdownRef}>
					<S.OnlineIndicator onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
						<S.OnlineCircle />
						<S.PlayerCount>{connectedUsers.length}</S.PlayerCount>
					</S.OnlineIndicator>
					<S.PlayersDropdown isOpen={isDropdownOpen}>
						<S.DropdownHeader>Joueurs connectés</S.DropdownHeader>
						{connectedUsers.length > 0 ? (
							connectedUsers.map((user, index) => (
								<S.PlayerItem key={`${user.username}-${index}`}>
									<S.PlayerItemPicture>
										<S.PlayerItemImage src={user.profilePictureURL} alt={user.username} />
									</S.PlayerItemPicture>
									<S.PlayerItemName>
										{user.username}
										{user.isInGame && <S.CombatIcon>⚔️</S.CombatIcon>}
									</S.PlayerItemName>
								</S.PlayerItem>
							))
						) : (
							<S.EmptyPlayersMessage>Aucun joueur connecté</S.EmptyPlayersMessage>
						)}
					</S.PlayersDropdown>
				</S.OnlineIndicatorWrapper>
			</S.WrapperChatHeader>
			<S.WrapperChatBody ref={scrollRef}>
				{messages?.map((message, index) => {
					const userInGame = connectedUsers.find(u => u.username === message.username)?.isInGame;
					return (
						<S.WrapperMessage key={`${message.username}-${index}`}>
							<S.WrapperPictureUsernameDate>
								<S.WrapperUserProfilePicture>
									<S.UserProfilePicture src={message.profilePictureURL} />
								</S.WrapperUserProfilePicture>
								<S.Username>
									{message.username}
									{userInGame && <S.CombatIcon>⚔️</S.CombatIcon>}
								</S.Username>
								<S.Date>{message.date}</S.Date>
							</S.WrapperPictureUsernameDate>
							<S.Message>{message.message}</S.Message>
						</S.WrapperMessage>
					);
				})}
			</S.WrapperChatBody>
			<S.WrapperChatFooter>
				<S.WrapperChatInput>
					<S.ChatInput
						type="text"
						placeholder="Entrer votre message ici"
						value={messageToSend}
						onChange={e => setMessageToSend(e.target.value)}
						onKeyDown={e => {
							if (e.key === "Enter") {
								if (messageToSend.trim()) {
									socket.emit("message", {
										username: user?.username,
										messageToSend,
									});
									setMessageToSend("");
								}
							}
						}}
					/>
					<S.SendButton
						size={16}
						onClick={() => {
							if (messageToSend.trim()) {
								socket.emit("message", {
									username: user?.username,
									messageToSend,
								});
								setMessageToSend("");
							}
						}}
					/>
				</S.WrapperChatInput>
			</S.WrapperChatFooter>
		</S.WrapperChatContent>
	);
};

export default Chat;
