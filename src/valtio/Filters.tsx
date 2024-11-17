import { SegmentedControl } from "@mantine/core";
import { useSnapshot } from "valtio/react";
import { type Filter, setFilter, store } from "./store";

const filterValues: Filter[] = ["all", "pending", "completed"];

export const Filters = () => {
	const snap = useSnapshot(store);

	return (
		<SegmentedControl
			value={snap.filter}
			onChange={(value) => setFilter(value as Filter)}
			data={filterValues}
		/>
	);
};
