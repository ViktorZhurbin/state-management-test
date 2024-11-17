import { atom, createStore } from "jotai";

type Status = "pending" | "completed";
export type Filter = Status | "all";
type Todo = {
	description: string;
	status: Status;
	id: number;
};

const store = createStore();

export const filterAtom = atom<Filter>("all");
export const todosAtom = atom<Todo[]>([]);

export const addTodo = (description: string) => {
	store.set(todosAtom, (prev) => [
		...prev,
		{
			description,
			status: "pending",
			id: Date.now(),
		},
	]);
};

export const removeTodo = (id: number) => {
	store.set(todosAtom, (prev) => prev.filter((todo) => todo.id !== id));
};

export const toggleDone = (id: number, currentStatus: Status) => {
	const nextStatus = currentStatus === "pending" ? "completed" : "pending";

	const todo = store.get(todosAtom).find((todo) => todo.id === id);

	if (!todo) return;

	todo.status = nextStatus;

	store.set(todosAtom, (prev) => {
		return prev.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					status: nextStatus,
				};
			}

			return todo;
		});
	});
};
