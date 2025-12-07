import styled from "styled-components";

export const WrapperProfilePage = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing.xl};
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	border-radius: ${props => props.theme.borderRadius.lg};
	background-color: white;
	padding: ${props => props.theme.spacing.xl};
	box-shadow: ${props => props.theme.shadows.lg};

	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		padding: ${props => props.theme.spacing.lg};
		box-shadow: none;
		background-color: transparent;
	}
`;

export const WrapperProfilePictureUsername = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing.md};
	align-items: center;
`;

export const WrapperProfilePicture = styled.label`
	display: block;
	height: 12.8rem;
	width: 12.8rem;
	border-radius: ${props => props.theme.borderRadius.round};
	overflow: hidden;
	border: 4px solid white;
	box-shadow: ${props => props.theme.shadows.md};
	cursor: pointer;
	position: relative;
	transition: transform 0.2s ease;

	&:hover {
		transform: scale(1.05);
	}

	&:hover::after {
		opacity: 1;
	}

	&::after {
		opacity: 0;
		content: "Modifier";
		font-size: 1.2rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.2s;
		color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.6);
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
	font-weight: 700;
	font-size: 2rem;
	color: ${props => props.theme.text};
`;

export const WrapperEdition = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing.md};
	width: 100%;
`;

export const UserStats = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: ${props => props.theme.spacing.md};
	width: 100%;
`;

export const StatItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${props => props.theme.spacing.xs};
	padding: ${props => props.theme.spacing.md};
	background-color: ${props => props.theme.background};
	border-radius: ${props => props.theme.borderRadius.md};
	border: 1px solid ${props => props.theme.grayscale.light};
`;

export const StatLabel = styled.div`
	font-size: 1.2rem;
	font-weight: 500;
	color: ${props => props.theme.grayscale.soft};
	text-transform: uppercase;
	letter-spacing: 0.05em;
`;

export const StatValue = styled.div`
	font-size: 2.4rem;
	font-weight: 700;
	color: ${props => props.theme.primary};
`;

export const ChangeProfilePictureButton = styled.input`
	display: none; /* Hide the actual input */
`;
