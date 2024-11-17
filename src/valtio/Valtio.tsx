import { Stack, Title } from "@mantine/core";
import { CreateTodo } from "./CreateTodo";
import { Todos } from "./Todos/Todos";
import { Filters } from "./Filters";

export const Valtio = () => {
	return (
		<Stack gap={8}>
			<Title>Valtio</Title>
			<Filters />
			<CreateTodo />
			<Todos />
		</Stack>
	);
};
