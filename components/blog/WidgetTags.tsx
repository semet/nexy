import React from "react";

const WidgetTags = () => {
	return (
		<div className="border-t-[1px]">
			<h3 className="text-2xl font-bold text-gray-700 my-4">Tags</h3>
			<div className="space-y-4">
				<span className="sidebar-tag">sport</span>{" "}
				<span className="sidebar-tag">economic</span>{" "}
				<span className="sidebar-tag">politic</span>{" "}
				<span className="sidebar-tag">fashion</span>{" "}
				<span className="sidebar-tag">books</span>{" "}
				<span className="sidebar-tag">travel</span>{" "}
				<span className="sidebar-tag">science</span>{" "}
				<span className="sidebar-tag">lifestyle</span>
			</div>
		</div>
	);
};

export default WidgetTags;
