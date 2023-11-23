import styled from "styled-components";

export const WrapperForm = styled.div``;

export const WrapperFormItems = styled.div`
	display: flex;
	gap: 1.6rem;
	flex-direction: column;
	margin-bottom: 3.2rem;
`;

export const WrapperFormItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const InputLabel = styled.label`
	font-weight: 600;
`;

export const Input = styled.input`
	border-radius: 5px;
	border: none;
	outline: 2px solid ${props => props.theme.inputBorder};

	&:focus {
		outline: 2px solid ${props => props.theme.primary};
	}
`;

export const FormSubmitButton = styled.button`
	color: white;
	background-color: ${props => props.theme.primary};
	width: 100%;
`;
export const FormErrorWrapper = styled.div`
	background-color: white;
	font-weight: 500;
	padding: 0.7em;
	border: 2px solid ${props => props.theme.warningColor};
	border-radius: 5px;
	color: ${props => props.theme.warningColor};
`;
