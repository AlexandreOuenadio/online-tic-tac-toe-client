import React, { useState } from "react";

export interface AuthHook {
	token: string | null;
	isLogout?: boolean;
}

export interface AuthContext {
	auth: AuthHook;
	setAuth: (auth: AuthHook | ((auth: AuthHook) => AuthHook)) => void;
}

export const AuthContext = React.createContext<AuthContext>({
	auth: { token: null, isLogout: true },
	setAuth: () => { },
});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState<AuthHook>({ token: null });

	return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
