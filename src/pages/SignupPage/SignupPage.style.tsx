import styled from "styled-components";

import { Link } from "react-router-dom";

export const WrapperAlreadyHaveAccount = styled.div`
	text-align: center;
	font-size: 1.4rem;
	margin-top: 2.4rem;
`;

export const LinkToLoginPage = styled(Link)`
	font-weight: 500;

	&:hover {
		color: ${props => props.theme.primary};
	}
`;
