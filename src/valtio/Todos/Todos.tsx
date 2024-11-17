import { Checkbox, CloseButton, Stack } from "@mantine/core";
import { useSnapshot } from "valtio/react";
import { removeTodo, store, toggleDone } from "../store";
import classes from "./Todos.module.css";

export const Todos = () => {
	const snap = useSnapshot(store);

	return (
		<Stack gap={8}>
			{snap.todos
				.filter(({ status }) => status === snap.filter || snap.filter === "all")
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
