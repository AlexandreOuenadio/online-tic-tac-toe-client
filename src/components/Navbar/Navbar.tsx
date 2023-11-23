import { useNavigate } from "react-router-dom";
import {
	LoginButton,
	LogoutButton,
	Nav,
	NavItem,
	NavItemLink,
	ProfileLink,
	ProfilePicture,
	WrapperAppLogo,
	WrapperAuthentification,
	WrapperNav,
	WrapperProfilePicture,
	WrapperUserMenu,
} from "./Navbar.style";
import { useAuth, useUserProfile } from "../../hooks";
import {
	FloatingArrow,
	arrow,
	flip,
	offset,
	useClick,
	useDismiss,
	useFloating,
	useFocus,
	useInteractions,
} from "@floating-ui/react";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { logoutMutation } from "../../mutations/auth";

const Navbar = () => {
	const { auth, setAuth } = useAuth();
	const { user } = useUserProfile();
	const navigate = useNavigate();
	const { mutate: logout } = useMutation({ mutationFn: logoutMutation });
	const [isOpen, setOpen] = useState(false);
	const arrowRef = useRef(null);
	const { refs, floatingStyles, context } = useFloating({
		placement: "bottom",
		open: isOpen,
		onOpenChange: setOpen,
		middleware: [
			flip(),
			offset({
				mainAxis: 10,
				crossAxis: -50,
			}),
			arrow({
				element: arrowRef.current,
			}),
		],
	});
	const dismiss = useDismiss(context);
	const focus = useFocus(context);
	const click = useClick(context);

	const { getFloatingProps, getReferenceProps } = useInteractions([focus, click, dismiss]);

	return (
		<WrapperNav>
			<WrapperAppLogo>TIC TAC TOE online</WrapperAppLogo>
			<Nav>
				<NavItem>
					<NavItemLink to="/play">Jouer</NavItemLink>
				</NavItem>
				<NavItem>
					<NavItemLink to="/ranking">Classement</NavItemLink>
				</NavItem>
			</Nav>
			<WrapperAuthentification>
				{auth?.isLogout ? (
					<LoginButton to="/login">Se connecter</LoginButton>
				) : (
					<>
						<WrapperProfilePicture ref={refs.setReference} {...getReferenceProps()}>
							<ProfilePicture src={user?.profilePictureURL || ""} />
						</WrapperProfilePicture>
						{isOpen ? (
							<WrapperUserMenu
								ref={refs.setFloating}
								style={{ ...floatingStyles }}
								{...getFloatingProps()}
							>
								<FloatingArrow ref={arrowRef} context={context} fill="white" />
								<ProfileLink to="/profile">Mon profil</ProfileLink>
								<LogoutButton
									onClick={() => {
										logout();
										setAuth({ token: null, isLogout: true });
										navigate("/login", { replace: true });
									}}
								>
									Se déconnecter
								</LogoutButton>
							</WrapperUserMenu>
						) : null}
					</>
				)}
			</WrapperAuthentification>
		</WrapperNav>
	);
};

export default Navbar;
