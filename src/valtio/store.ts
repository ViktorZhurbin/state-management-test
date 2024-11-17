import { proxy } from "valtio";

type Status = "pending" | "completed";
export type Filter = Status | "all";
type Todo = {
	description: string;
	status: Status;
	id: number;
};

export const store = proxy<{ filter: Filter; todos: Todo[] }>({
	filter: "all",
	todos: [],
});

export const addTodo = (description: string) => {
	store.todos.push({
		description,
		status: "pending",
		id: Date.now(),
	});
};

export const removeTodo = (id: number) => {
	store.todos = store.todos.filter((todo) => todo.id !== id);
};

export const toggleDone = (id: number, currentStatus: Status) => {
	const nextStatus = currentStatus === "pending" ? "completed" : "pending";

	const todo = store.todos.find((todo) => todo.id === id);

	if (todo) {
		todo.status = nextStatus;
	}
};

export const setFilter = (filter: Filter) => {
	store.filter = filter;
};
