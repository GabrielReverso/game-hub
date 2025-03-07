import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<Box paddingX={7}>
				<Box paddingTop={2}>
					<NavBar />
				</Box>
				<Box paddingY={3}>
					<Outlet />
				</Box>
			</Box>
		</>
	);
}

export default Layout;
