import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { theme } from "./themes";
import { AppLayout } from "./layouts";
import { LoginPage, NotFoundPage, PlayPage, ProfilePage, RankingPage, SignupPage } from "./pages";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthRequired, AuthPersisted, RedirectIfAuthenticated } from "./components";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme.lightTheme}>
				<Router>
					<Routes>
						<Route element={<AuthPersisted />}>
							<Route element={<AppLayout />}>
								<Route element={<RedirectIfAuthenticated />}>
									<Route path="/" element={<Navigate to="/login" replace />} />
									<Route path="/signup" element={<SignupPage />} />
									<Route path="/login" element={<LoginPage />} />
								</Route>
								<Route element={<AuthRequired />}>
									<Route path="/ranking" element={<RankingPage />} />
									<Route path="/play" element={<PlayPage />} />
									<Route path="/profile" element={<ProfilePage />} />
								</Route>
							</Route>
							<Route path="/*" element={<NotFoundPage />} />
						</Route>
					</Routes>
				</Router>
			</ThemeProvider>
			<ReactQueryDevtools position="bottom-right" />
		</QueryClientProvider>
	);
}

export default App;

