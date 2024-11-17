import { Stack, Title } from "@mantine/core";
import { CreateTodo } from "./CreateTodo";
import { Filters } from "./Filters";
import { Todos } from "./Todos/Todos";

export const Jotai = () => {
	return (
		<Stack gap={8}>
			<Title>Jotai</Title>
			<Filters />
			<CreateTodo />
			<Todos />
		</Stack>
	);
};
