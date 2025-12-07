import styled from "styled-components";

export const Board = styled.div`
	width: 100%;
	max-width: 45rem;
	aspect-ratio: 1 / 1;
	border: 3px solid ${props => props.theme.text};
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	background-color: white;
	user-select: none;
	box-shadow: ${props => props.theme.shadows.lg};
	border-radius: ${props => props.theme.borderRadius.md};
	overflow: hidden;
`;

export const Cell = styled.div<{ colored: boolean }>`
	width: 100%;
	height: 100%;
	border: 1px solid ${props => props.theme.text};
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 800;
	font-size: clamp(2rem, 8vw, 4rem); /* Responsive font size */
	cursor: pointer;
	color: ${({ theme, colored }) => (colored ? theme.primary : theme.text)};
	transition: background-color 0.2s ease;

	&:hover {
		background-color: ${props => props.theme.background};
	}
`;
