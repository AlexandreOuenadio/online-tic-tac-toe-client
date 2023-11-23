import * as S from "./Board.style";
import { useUserProfile } from "../../hooks";

const Board = ({ board, playerSymbol, socket, playersInRoom, turnInfo, winner }) => {
	const { user } = useUserProfile();

	return (
		<S.Board>
			{board?.map((elt, idx) => (
				<S.Cell
					key={idx}
					colored={elt === playerSymbol}
					onClick={() => {
						if (winner) return;
						if (playersInRoom.some(u => u?.username === user?.username)) {
							if (turnInfo === playerSymbol) {
								socket.emit(
									"playerMove",
									board?.map((elt, i) => (idx == i && !elt ? playerSymbol : elt))
								);
							}
						}
					}}
				>
					{elt}
				</S.Cell>
			))}
		</S.Board>
	);
};

export default Board;
