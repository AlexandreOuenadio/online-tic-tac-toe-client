import { useEffect, useRef, useState } from "react";
import { useUserProfile } from "../../hooks";
import * as S from "./Chat.style";

const Chat = ({ messages, socket }) => {
	const { user } = useUserProfile();

	const [messageToSend, setMessageToSend] = useState("");

	const scrollRef = useRef(null);

	useEffect(() => {
		if (scrollRef.current) {
			const chatbody = scrollRef.current as HTMLDivElement;
			chatbody.scrollTop = chatbody.scrollHeight;
		}
	}, [messages]);

	return (
		<S.WrapperChatContent>
			<S.WrapperChatHeader>
				<S.ChatTitle>Chat</S.ChatTitle>
			</S.WrapperChatHeader>
			<S.WrapperChatBody ref={scrollRef}>
				{messages?.map(message => (
					<S.WrapperMessage key={message.username}>
						<S.WrapperPictureUsernameDate>
							<S.WrapperUserProfilePicture>
								<S.UserProfilePicture src={message.profilePictureURL} />
							</S.WrapperUserProfilePicture>
							<S.Username>{message.username}</S.Username>
							<S.Date>{message.date}</S.Date>
						</S.WrapperPictureUsernameDate>
						<S.Message>{message.message}</S.Message>
					</S.WrapperMessage>
				))}
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
								socket.emit("message", {
									username: user?.username,
									messageToSend,
								});
								setMessageToSend("");
							}
						}}
					/>
					<S.SendButton
						size={16}
						onClick={() => {
							socket.emit("message", {
								username: user?.username,
								messageToSend,
							});
							setMessageToSend("");
						}}
					/>
				</S.WrapperChatInput>
			</S.WrapperChatFooter>
		</S.WrapperChatContent>
	);
};

export default Chat;
