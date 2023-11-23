import { Navbar } from "../../components";
import { WrapperApp } from "./AppLayout.style";

import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<WrapperApp>
			<Navbar />
			<Outlet />
		</WrapperApp>
	);
};

export default AppLayout;
