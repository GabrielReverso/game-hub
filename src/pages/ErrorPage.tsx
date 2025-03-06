import { Flex, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();

	const message = isRouteErrorResponse(error) ? (
		<>
			<Heading as={"h1"} marginBottom={6} size={"2xl"}>
				Page not found
			</Heading>
			<Heading as={"p"} size={"md"} fontWeight={"normal"}>
				Try going back to our{" "}
				<Link to={"/"} style={{ color: "teal", fontWeight: "bold" }}>
					Home Page
				</Link>
			</Heading>
		</>
	) : (
		<>
			<Heading as={"h1"} marginBottom={6} size={"2xl"}>
				Something Went Wrong!
			</Heading>
			<Heading as={"p"} size={"md"} fontWeight={"normal"}>
				An unexpected error occurred while browsing. Try{" "}
				<span style={{ color: "teal" }}>reloading</span> the page
			</Heading>
		</>
	);

	return (
		<Flex
			height={"100vh"}
			width={"100vw"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			{message}
		</Flex>
	);
}

export default ErrorPage;
