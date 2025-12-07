import { Board, Chat } from "../../components";
import { useUserProfile } from "../../hooks";
import { useSocket } from "../../hooks/useSocket";
import { WrapperPage } from "../Page.style";
import * as S from "./PlayPage.style";

import { useState, useEffect, useRef } from "react";

const PlayPage = () => {
	const [isOverlayHidden, setOverlayHidden] = useState(false);
	const { user } = useUserProfile();
	const countRef = useRef<HTMLSpanElement>(null);
	const { socket, chat, game } = useSocket();
	const previousTurnRef = useRef<string | null>(null);

	useEffect(() => {
		if (
			game.all.turnInfo === game.player.symbol &&
			previousTurnRef.current !== game.all.turnInfo &&
			game.player.symbol &&
			!game.all.winner &&
			!game.all.isDraw
		) {
			const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
			const oscillator = audioContext.createOscillator();
			const gainNode = audioContext.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(audioContext.destination);

			oscillator.frequency.value = 800;
			oscillator.type = 'sine';

			gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
			gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

			oscillator.start(audioContext.currentTime);
			oscillator.stop(audioContext.currentTime + 0.3);
		}
		previousTurnRef.current = game.all.turnInfo;
	}, [game.all.turnInfo, game.player.symbol, game.all.winner, game.all.isDraw]);

	// Function to play a beep sound with a specific frequency
	const playBeep = (frequency: number, duration: number = 0.15) => {
		const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
		const oscillator = audioContext.createOscillator();
		const gainNode = audioContext.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(audioContext.destination);

		oscillator.frequency.value = frequency;
		oscillator.type = 'sine';

		gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

		oscillator.start(audioContext.currentTime);
		oscillator.stop(audioContext.currentTime + duration);
	};

	useEffect(() => {
		if (game.all.isGameStarting) {
			let i = 3;
			const intervalId = setInterval(() => {
				if (countRef.current !== null) {
					if (i <= 0) {
						clearInterval(intervalId);
						setOverlayHidden(true);
						return;
					}

					// Play beep with increasing frequency (600Hz, 700Hz, 800Hz)
					const frequency = 600 + (3 - i) * 100;
					playBeep(frequency);

					i--;

					countRef.current.textContent = i.toString();
				}
			}, 1000);

			return;
		}
	}, [game.all.isGameStarting]);

	useEffect(() => {
		if (game.all.isGameCanceled) {
			setOverlayHidden(false);
			game.setters.setGameRestarting(false);
			game.setters.setGameStarting(false);
			if (game.all.playersInRoom.some(u => u?.username === user?.username)) {
				setTimeout(() => {
					game.setters.setGameCanceled(false);
				}, 3000);
			} else {
				game.setters.setGameCanceled(false);
			}
		}
	}, [game.all.isGameCanceled, game.setters, user, game.all.playersInRoom]);

	useEffect(() => {
		if (game.all.isGameRestarting) {
			setOverlayHidden(false);
			game.setters.setGameRestarting(false);
			game.setters.setGameStarting(false);
		}
	}, [game.all.isGameCanceled, game.setters, game.all.isGameRestarting]);

	// Play sound when game ends
	useEffect(() => {
		if (game.all.winner || game.all.isDraw) {
			let soundFile = '';

			if (game.all.isDraw) {
				soundFile = '/sounds/lose.mp3';
			} else if (game.all.winner?.username === user?.username) {
				soundFile = '/sounds/win.mp3';
			} else {
				soundFile = '/sounds/lose.mp3';
			}

			// Play the sound
			const audio = new Audio(soundFile);
			audio.volume = 0.5; // 50% volume
			audio.play().catch(err => {
				console.log('Could not play sound:', err);
			});
		}
	}, [game.all.winner, game.all.isDraw, user?.username]);

	useEffect(() => {
		if (game.all.winner || game.all.isDraw) {
			setTimeout(() => {
				game.setters.setBoard(["", "", "", "", "", "", "", "", ""]);
				game.setters.setWinner(null);
				game.setters.setDraw(false);
				game.setters.setPlayersInRoom([]);
				game.setters.setGameRestarting(true);
			}, 5000);
		}
	}, [game.all.winner, game.all.isDraw, game.setters]);

	return (
		<WrapperPage wide relative>
			<S.WrapperChat>
				<Chat messages={chat.messages} socket={socket} connectedUsers={chat.connectedUsers} />
			</S.WrapperChat>
			<S.WrapperGame>
				<S.OverlayWaitingRoom overlayHidden={isOverlayHidden}>
					{game.all.isGameStarting ? (
						<S.Countdown>
							Attention la partie commence dans <span ref={countRef}>3</span>
						</S.Countdown>
					) : game.all.isGameCanceled ? (
						<S.GameCanceledText>
							La partie est annulée car un des joueurs est parti !
						</S.GameCanceledText>
					) : (
						<S.WrapperWaitingRoomContent>
							<S.WrapperWaitingRoomPlayersPictures>
								{game.all.playersInRoom?.map(player => (
									<S.WrapperWaitingRoomPlayerPicture>
										<S.WaitingRoomPlayerPicture
											src={player?.profilePictureURL}
										/>
									</S.WrapperWaitingRoomPlayerPicture>
								))}
							</S.WrapperWaitingRoomPlayersPictures>
							<S.WaitingRoomText>
								{" "}
								{game.all.playersInRoom.length > 0 ? "1" : "0"} joueur sur 2 en
								salle d'attente
							</S.WaitingRoomText>
							{!game.all.playersInRoom.some(u => u?.username === user?.username) ? (
								<S.JoinWaitingRoomButton
									onClick={() => {
										socket.emit("playerJoin", user);
									}}
								>
									Rejoindre
								</S.JoinWaitingRoomButton>
							) : null}
						</S.WrapperWaitingRoomContent>
					)}
				</S.OverlayWaitingRoom>

				<S.GameInfo>
					{!isOverlayHidden ? null : (
						<>
							<S.WrapperPlayersInGame>
								{game.all.playersInRoom.length === 2 ? (
									<>
										<S.WrapperPlayer>
											<S.WrapperPlayerPicture>
												<S.PlayerPicture
													src={
														game.all.playersInRoom?.[0]
															?.profilePictureURL
													}
												/>
											</S.WrapperPlayerPicture>
											<S.PlayerName>
												{game.all.playersInRoom?.[0]?.username} (
												{game.all.playersInRoom?.[0]?.symbol})
											</S.PlayerName>
										</S.WrapperPlayer>
										<S.VersusTitle>VS</S.VersusTitle>
										<S.WrapperPlayer>
											<S.WrapperPlayerPicture>
												<S.PlayerPicture
													src={
														game.all.playersInRoom?.[1]
															?.profilePictureURL
													}
												/>
											</S.WrapperPlayerPicture>
											<S.PlayerName>
												{game.all.playersInRoom?.[1]?.username} (
												{game.all.playersInRoom?.[1]?.symbol})
											</S.PlayerName>
										</S.WrapperPlayer>
									</>
								) : null}
							</S.WrapperPlayersInGame>
							<S.GameInfoText>
								{game.all.winner
									? `${game.all.winner?.username} (${game.all.winner?.symbol}) a gagné(e) la partie ! (+3pts)`
									: game.all.isDraw
										? "Match nul ! (+2pts chacun)"
										: game.all.turnInfo === game.player.symbol
											? "C'est à vous de jouer !"
											: !!game.player.symbol &&
												game.all.turnInfo !== game.player.symbol
												? "C'est à votre adversaire de jouer."
												: "Vous êtes spectateur de la partie."}
							</S.GameInfoText>
						</>
					)}
				</S.GameInfo>
				<Board
					winner={game.all.winner}
					turnInfo={game.all.turnInfo}
					playersInRoom={game.all.playersInRoom}
					board={game.all.board}
					playerSymbol={game.player.symbol}
					socket={socket}
				/>
			</S.WrapperGame>
		</WrapperPage>
	);
};

export default PlayPage;
