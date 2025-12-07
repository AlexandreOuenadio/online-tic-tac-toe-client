import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const WrapperNav = styled.nav`
	height: 8rem;
	box-shadow: ${props => props.theme.shadows.sm};
	display: flex;
	align-items: center;
	padding: 0 ${props => props.theme.spacing.xl};
	background-color: white;
	position: relative;
	z-index: 100;

	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		padding: 0 ${props => props.theme.spacing.md};
	}
`;

export const Nav = styled.ul`
	display: flex;
	gap: ${props => props.theme.spacing.md};
	list-style: none;
	font-weight: 600;
	margin-right: ${props => props.theme.spacing.xl};

	@media (max-width: ${props => props.theme.breakpoints.tablet}) {
		display: none;
	}
`;

export const NavItem = styled.li`
	cursor: pointer;
	padding: ${props => props.theme.spacing.xs};
	transition: color 0.2s ease;
	&:hover {
		color: ${props => props.theme.primary};
	}
`;

export const WrapperAppLogo = styled.div`
	user-select: none;
	font-weight: 800;
	letter-spacing: -0.8px;
	text-transform: uppercase;
	font-size: 2.4rem;
	margin-right: auto;
	color: ${props => props.theme.primary};
	display: flex;
	align-items: center;
	gap: ${props => props.theme.spacing.sm};
	white-space: nowrap;

	@media (max-width: ${props => props.theme.breakpoints.mobile}) {
		font-size: 1.8rem;
		
		img {
			height: 2.4rem !important;
			width: 2.4rem !important;
		}
	}
`;

export const HamburgerButton = styled.button`
	display: none;
	background: none;
	border: none;
	color: ${props => props.theme.text};
	cursor: pointer;
	padding: ${props => props.theme.spacing.xs};
	margin-left: ${props => props.theme.spacing.md};

	@media (max-width: ${props => props.theme.breakpoints.tablet}) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
	display: none;

	@media (max-width: ${props => props.theme.breakpoints.tablet}) {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background-color: white;
		box-shadow: ${props => props.theme.shadows.lg};
		padding: ${props => props.theme.spacing.md};
		gap: ${props => props.theme.spacing.sm};
		transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-100%)')};
		opacity: ${props => (props.isOpen ? '1' : '0')};
		visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
		transition: all 0.3s ease;
		z-index: 99;

		${NavItem} {
			padding: ${props => props.theme.spacing.md};
			border-bottom: 1px solid ${props => props.theme.grayscale.light};
			list-style: none;

			&:last-child {
				border-bottom: none;
			}
		}
	}
`;

export const WrapperAuthentification = styled.div`
	display: flex;
	align-items: center;
	gap: ${props => props.theme.spacing.md};

	@media (max-width: ${props => props.theme.breakpoints.tablet}) {
		display: none;
	}
`;

export const NavItemLink = styled(NavLink)`
	&.active {
		color: ${props => props.theme.primary};
	}
`;

export const LoginButton = styled(Link)`
	padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
	background-color: ${props => props.theme.primary};
	color: #fff;
	border-radius: ${props => props.theme.borderRadius.md};
	font-weight: 600;
	box-shadow: ${props => props.theme.shadows.sm};
	transition: all 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: ${props => props.theme.shadows.md};
		filter: brightness(1.05);
	}
`;

export const WrapperProfilePicture = styled.div`
	height: 4rem;
	width: 4rem;
	border-radius: ${props => props.theme.borderRadius.round};
	overflow: hidden;
	cursor: pointer;
	border: 2px solid ${props => props.theme.grayscale.light};
	transition: border-color 0.2s ease;

	&:hover {
		border-color: ${props => props.theme.primary};
	}
`;
export const ProfilePicture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const WrapperUserMenu = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: ${props => props.theme.borderRadius.md};
	z-index: 1000;
	align-items: center;
	box-shadow: ${props => props.theme.shadows.lg};
	position: absolute;
	top: 100%;
	right: 0;
	width: max-content;
	overflow: hidden;
	border: 1px solid ${props => props.theme.grayscale.light};
	
	& > * {
		width: 100%;
		text-align: center;
		padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
		transition: background-color 0.2s ease;
		white-space: nowrap;
		
		&:hover {
			background-color: ${props => props.theme.background};
		}
	}
`;

export const ProfileLink = styled(Link)`
	font-weight: 500;
	color: ${props => props.theme.text};
	border-bottom: 1px solid ${props => props.theme.grayscale.light};
`;

export const LogoutButton = styled.button`
	font-weight: 500;
	color: ${props => props.theme.warningColor};
	background: none;
`;
