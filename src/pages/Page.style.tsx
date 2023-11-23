import styled, { css } from "styled-components";
import { wrapperWidth } from "../constants";
import { wrapperPadding } from "../constants/constants";

export const WrapperPage = styled.div<{ wide?: boolean; relative?: boolean }>`
	min-height: calc(100vh - 8rem);
	${props =>
		!props.wide
			? css`
					max-width: ${wrapperWidth.MEDIUM};
					margin: 0 auto;
					padding: ${wrapperPadding.MEDIUM};
			  `
			: null}

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
