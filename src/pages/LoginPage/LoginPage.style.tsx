import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperNeedAccount = styled.div`
	text-align: center;
	font-size: 1.4rem;
	margin-top: ${props => props.theme.spacing.lg};
	color: ${props => props.theme.grayscale.dark};
`;

export const LinkToAccountCreation = styled(Link)`
	font-weight: 600;
	color: ${props => props.theme.primary};
	transition: color 0.2s ease-in-out;

	&:hover {
		color: ${props => props.theme.primary};
		text-decoration: underline;
	}
`;

export const LoginCard = styled.div`
	background-color: white;
	padding: ${props => props.theme.spacing.xl};
	border-radius: ${props => props.theme.borderRadius.lg};
	box-shadow: ${props => props.theme.shadows.lg};
	width: 100%;
	max-width: 450px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing.lg};

	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		padding: ${props => props.theme.spacing.lg};
		box-shadow: none;
		background-color: transparent;
	}
`;
