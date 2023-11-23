import styled from "styled-components";

export const WrapperProfilePage = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	width: max-content;
	margin: 0 auto;
	align-items: center;
	justify-content: space-between;
	border: 2px solid ${props => props.theme.inputBorder};
	border-radius: 8px;
	background-color: white;
	padding: 2.4rem 3.2rem;
`;

export const WrapperProfilePictureUsername = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	align-items: center;
`;
export const WrapperProfilePicture = styled.label`
	display: block;
	height: 12.8rem;
	width: 12.8rem;
	border-radius: 100%;
	overflow: hidden;
	border: 2px solid ${props => props.theme.inputBorder};
	cursor: pointer;
	position: relative;

	&:hover::after {
		opacity: 1;
	}

	&::after {
		opacity: 0;
		content: "Changer d'image";
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.1s;
		color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
		z-index: 10;
	}
`;

export const OverlayProfilePicture = styled.div``;

export const ProfilePicture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const WrapperUsername = styled.div`
	font-weight: 600;
	font-size: 1.8rem;
`;
export const WrapperEdition = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const EditButton = styled.button`
	padding: 0.3rem 0.6rem;
	font-weight: 500;
	border: 1px solid ${props => props.theme.inputBorder};
	border-radius: 8px;
	font-size: 1.4rem;
`;

export const ChangeProfilePictureButton = styled.input`
	padding: 0.3rem 0.6rem;
	font-weight: 500;
	border: 1px solid ${props => props.theme.inputBorder};
	border-radius: 8px;
	font-size: 1.4rem;
`;
