import styled from "styled-components";

export const WrapperForm = styled.div`
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
`;

export const WrapperFormItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing.lg};
	margin-bottom: ${props => props.theme.spacing.xl};
`;

export const WrapperFormItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing.xs};
`;

export const InputLabel = styled.label`
	font-weight: 600;
	font-size: 1.4rem;
	color: ${props => props.theme.text};
`;

export const Input = styled.input`
	border-radius: ${props => props.theme.borderRadius.md};
	border: 1px solid ${props => props.theme.inputBorder};
	padding: ${props => props.theme.spacing.md};
	font-size: 1.6rem;
	transition: all 0.2s ease-in-out;
	background-color: white;

	&:focus {
		outline: none;
		border-color: ${props => props.theme.primary};
		box-shadow: 0 0 0 3px ${props => props.theme.primary}33; /* 20% opacity */
	}

	&::placeholder {
		color: ${props => props.theme.grayscale.soft};
	}
`;

export const Button = styled.button`
	color: white;
	background-color: ${props => props.theme.primary};
	width: 100%;
	padding: ${props => props.theme.spacing.md};
	border-radius: ${props => props.theme.borderRadius.md};
	font-size: 1.6rem;
	font-weight: 600;
	box-shadow: ${props => props.theme.shadows.md};
	transition: all 0.2s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		transform: translateY(-2px);
		box-shadow: ${props => props.theme.shadows.lg};
		filter: brightness(1.05);
	}

	&:active {
		transform: translateY(0);
		box-shadow: ${props => props.theme.shadows.sm};
	}
`;

export const FormSubmitButton = Button;

export const FormErrorWrapper = styled.div`
	background-color: #fff0f3; /* Light red background */
	font-weight: 500;
	padding: ${props => props.theme.spacing.md};
	border: 1px solid ${props => props.theme.warningColor};
	border-radius: ${props => props.theme.borderRadius.md};
	color: ${props => props.theme.warningColor};
	display: flex;
	align-items: center;
	justify-content: center;
`;
