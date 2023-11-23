import { useEffect, useState } from "react";

import { socket } from "../client/socket";
import { PlayerSymbol } from "../enums/playerSymbol";
import { useUserProfile } from ".";

export type PlayerInRoomType = {
	username: string;
	profilePictureURL: string;
	symbol: string;
};

export type Message = {
	username: string;
	profilePictureURL: string;
	message: string;
	date: string;
};

export type WinnerType = {
	username: string;
	symbol: string;
};

export const useSocket = () => {
	const { user } = useUserProfile();
	const [isConnected, setConnected] = useState(socket.connected);
	const [messages, setMessages] = useState<Message[]>([]);
	const [playerSymbol, setPlayerSymbol] = useState<PlayerSymbol | null>(null);
	const [isGameStarting, setGameStarting] = useState(false);
	const [isGameRestarting, setGameRestarting] = useState(true);
	const [playersInRoom, setPlayersInRoom] = useState<PlayerInRoomType[]>([]);
	const [isGameCanceled, setGameCanceled] = useState(false);
	const [board, setBoard] = useState<string[]>(["", "", "", "", "", "", "", "", ""]);
	const [turnInfo, setTurnInfo] = useState<PlayerSymbol>(PlayerSymbol.CROSS);
	const [winner, setWinner] = useState<WinnerType | null>(null);
	const [isDraw, setDraw] = useState(false);
	useEffect(() => {
		function onConnect() {
			setConnected(true);
		}
		function onDisconnect() {
			setConnected(false);
		}

		function onMessages(messages: Message[]) {
			setMessages(messages);
		}

		function onGameInfo() {}

		function onChangeBoard(board: string[]) {
			setBoard(board);
		}
		function onPlayerSymbol(symbol: PlayerSymbol) {
			setPlayerSymbol(symbol);
		}

		function onGameStarting() {
			setGameStarting(true);
		}

		function onPlayersInRoom(data: PlayerInRoomType[]) {
			setPlayersInRoom(data);
		}

		function onGameCanceled() {
			setGameCanceled(true);
		}

		function onGameRestarting() {
			setGameRestarting(true);
		}

		function onTurnInfo(symbol: PlayerSymbol) {
			setTurnInfo(symbol);
		}

		function onWinner(player: WinnerType) {
			setWinner(player);
		}

		function onDraw() {
			setDraw(true);
		}

		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("messages", onMessages);
		socket.on("changeBoard", onChangeBoard);
		socket.on("playerSymbol", onPlayerSymbol);
		socket.on("gameInfo", onGameInfo);
		socket.on("gameStarting", onGameStarting);
		socket.on("playersInRoom", onPlayersInRoom);
		socket.on("gameCanceled", onGameCanceled);
		socket.on("gameRestarting", onGameRestarting);
		socket.on("turnInfo", onTurnInfo);
		socket.on("winner", onWinner);
		socket.on("draw", onDraw);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("messages", onMessages);
			socket.off("changeBoard", onChangeBoard);
			socket.off("playerSymbol", onPlayerSymbol);
			socket.off("gameInfo", onGameInfo);
			socket.off("gameStarting", onGameStarting);
			socket.off("playersInRoom", onPlayersInRoom);
			socket.off("gameCanceled", onGameCanceled);
			socket.off("gameRestarting", onGameRestarting);
			socket.off("turnInfo", onTurnInfo);
			socket.off("winner", onWinner);
			socket.off("draw", onDraw);
		};
	}, []);

	useEffect(() => {
		socket.connect();

		return () => {
			socket.emit("playerLeave", user?.username);
			socket.disconnect();
		};
	}, [user?.username]);

	return {
		socket,
		isConnected,
		chat: {
			messages,
		},
		game: {
			setters: {
				setGameCanceled,
				setGameStarting,
				setGameRestarting,
				setBoard,
				setDraw,
				setWinner,
				setPlayersInRoom,
			},
			player: {
				symbol: playerSymbol,
			},
			all: {
				isGameStarting,
				isGameRestarting,
				playersInRoom,
				isGameCanceled,
				board,
				turnInfo,
				winner,
				isDraw,
			},
		},
	};
};
