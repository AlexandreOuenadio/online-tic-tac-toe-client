import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const WrapperNav = styled.nav`
	height: 8rem;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	padding: 3.2rem;
`;

export const Nav = styled.ul`
	display: flex;
	gap: 1rem;
	list-style: none;
	font-weight: 600;
	margin-right: 3.2rem;
`;

export const NavItem = styled.li`
	cursor: pointer;
	padding: 0.5rem;
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
`;

export const WrapperAuthentification = styled.div``;

export const NavItemLink = styled(NavLink)``;

export const LoginButton = styled(Link)`
	padding: 1em;
	background-color: ${props => props.theme.primary};
	color: #fff;
	border-radius: 5px;
	font-weight: 500;
`;

export const WrapperProfilePicture = styled.div`
	height: 3.2rem;
	width: 3.2rem;
	border-radius: 100%;
	overflow: hidden;
	cursor: pointer;
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
	border-radius: 8px;
	z-index: 1000;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	& > * {
		flex: 1;
	}
`;

export const ProfileLink = styled(Link)`
	padding: 1rem 2rem;
	font-weight: 500;
`;

export const LogoutButton = styled.button`
	padding: 1rem 2rem;
`;
