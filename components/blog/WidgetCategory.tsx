import React from "react";

const WidgetCategory = () => {
	return (
		<div className="border-t-[1px]">
			<h3 className="text-2xl font-bold text-gray-700 my-4">Top Categories</h3>

			<ul className="ml-1 space-y-4 text-lg text-gray-600 font-medium">
				<li>
					<a href="#" className="hover:text-blue-800">
						{" "}
						Nationals (12)
					</a>{" "}
				</li>
				<li>
					<a href="#" className="hover:text-blue-800">
						Sport (25)
					</a>
				</li>
				<li>
					<a href="#" className="hover:text-blue-800">
						Fashion (34)
					</a>
				</li>
				<li>
					<a href="#" className="hover:text-blue-800">
						Health (30)
					</a>
				</li>
				<li>
					<a href="#" className="hover:text-blue-800">
						Lifestyle (31)
					</a>
				</li>
			</ul>
		</div>
	);
};

export default WidgetCategory;
