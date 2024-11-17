import { SegmentedControl } from "@mantine/core";
import { useAtom } from "jotai";
import { type Filter, filterAtom } from "./store";

const filterValues: Filter[] = ["all", "pending", "completed"];

export const Filters = () => {
	const [filter, setFilter] = useAtom(filterAtom);

	return (
		<SegmentedControl
			data={filterValues}
			value={filter}
			onChange={(value) => setFilter(value as Filter)}
		/>
	);
};
