import { Checkbox, CloseButton, Stack } from "@mantine/core";
import { useAtomValue } from "jotai";
import { filterAtom, removeTodo, todosAtom, toggleDone } from "../store";
import classes from "./Todos.module.css";

export const Todos = () => {
	const filter = useAtomValue(filterAtom);
	const todos = useAtomValue(todosAtom);

	console.log(todos);

	return (
		<Stack gap={8}>
			{todos
				.filter(({ status }) => status === filter || filter === "all")
				.map(({ description, status, id }) => {
					return (
						<Checkbox
							key={id}
							checked={status === "completed"}
							onChange={() => toggleDone(id, status)}
							label={
								<span className={classes.item}>
									<span data-status={status}>{description}</span>
									<CloseButton size="xs" onClick={() => removeTodo(id)} />
								</span>
							}
						/>
					);
				})}
		</Stack>
	);
};
