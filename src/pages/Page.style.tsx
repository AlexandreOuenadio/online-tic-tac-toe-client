import styled, { css } from "styled-components";
import { wrapperWidth } from "../constants";
import { wrapperPadding } from "../constants/constants";

export const WrapperPage = styled.div<{ wide?: boolean; relative?: boolean; topAligned?: boolean }>`
	height: calc(100vh - 8rem); /* Full height minus navbar */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${props => (props.topAligned ? "flex-start" : "center")};
	overflow: hidden; /* Prevent global scroll */
	
	${props =>
		!props.wide
			? css`
					max-width: ${wrapperWidth.MEDIUM};
					margin: 0 auto;
					padding: ${wrapperPadding.MEDIUM};
					width: 100%;
			  `
			: css`
					flex-direction: row;
					padding: 0;
					
					@media (max-width: ${props.theme.breakpoints.tablet}) {
						flex-direction: column-reverse; /* Chat below game on mobile */
						height: auto; /* Allow content to determine height */
						overflow-y: auto; /* Allow scrolling */
					}
			  `}

	${props =>
		props.relative
			? css`
					position: relative;
			  `
			: null}
`;

export const PageTitle = styled.h2`
	font-size: 3.2rem;
	font-weight: 700;
	letter-spacing: -0.8px;
	text-align: center;
	margin-bottom: 2.4rem;
`;
