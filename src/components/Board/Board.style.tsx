import styled from "styled-components";

export const Board = styled.div`
	height: 45rem;
	width: 45rem;
	border: 3px solid ${props => props.theme.text};
	display: grid;
	grid-template-columns: repeat(3, 15rem);
	grid-template-rows: repeat(3, 15rem);
	background-color: white;
	user-select: none;
	box-shadow: 0 8px 16px #0076b6c3;
`;

export const Cell = styled.div<{ colored: boolean }>`
	height: 15rem;
	width: 15rem;
	border: 3px solid ${props => props.theme.text};
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 800;
	font-size: 3.2rem;
	cursor: pointer;
	color: ${({ theme, colored }) => (colored ? theme.primary : theme.text)};
`;
