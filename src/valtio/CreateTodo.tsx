import { Button, Group, TextInput } from "@mantine/core";
import { useState } from "react";
import { addTodo } from "./store";

export const CreateTodo = () => {
	const [value, setValue] = useState("");

	const handleAddTodo = () => {
		addTodo(value);
		setValue("");
	};

	return (
		<Group gap={8}>
			<TextInput
				minLength={2}
				value={value}
				onChange={(event) => setValue(event.currentTarget.value)}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						handleAddTodo();
					}
				}}
			/>
			<Button type="submit" onClick={handleAddTodo}>
				Add new
			</Button>
		</Group>
	);
};
