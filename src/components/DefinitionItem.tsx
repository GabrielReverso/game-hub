import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}

function DefinitionItem({ term, children }: Props) {
	return (
		<Box marginY={5}>
			<Heading
				as={"dt"}
				fontSize={"lg"}
				color={"gray.500"}
				marginBottom={2}
			>
				{term}
			</Heading>
			<dd>{children}</dd>
		</Box>
	);
}

export default DefinitionItem;
