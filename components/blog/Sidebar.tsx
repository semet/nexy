import React from "react";
import WidgetArchive from "./WidgetArchive";
import WidgetCategory from "./WidgetCategory";
import WidgetRecentPosts from "./WidgetRecentPosts";
import WidgetSearch from "./WidgetSearch";
import WidgetTags from "./WidgetTags";

const Sidebar = () => {
	return (
		<div className="invisible lg:visible ml-2 space-y-6">
			{/* Widget Search */}
			<WidgetSearch />
			{/* Widget Recent Post */}
			<WidgetRecentPosts />
			{/* Widget Category */}
			<WidgetCategory />
			{/* Blog Archives */}
			<WidgetArchive />
			{/* Widget Tags */}
			<WidgetTags />
		</div>
	);
};

export default Sidebar;
