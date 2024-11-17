import { MantineProvider, createTheme } from "@mantine/core";
import { Valtio } from "./valtio/Valtio";

const theme = createTheme({
	/** Put your mantine theme override here */
});

export const App = () => {
	return (
		<MantineProvider theme={theme}>
			<Valtio />
		</MantineProvider>
	);
};
