import React from "react";
import { FiFolder } from "react-icons/fi";

const WidgetArchive = () => {
	return (
		<div className="border-t-[1px]">
			<h3 className="text-2xl font-bold text-gray-700 my-4">Archives</h3>
			<ul className="space-y-4">
				<li>
					<a className="flex items-center space-x-2 hover:text-blue-800" href="#">
						<FiFolder className="text-lg" />{" "}
						<span className="text-lg font-semibold">January 2022</span>
					</a>
				</li>
				<li>
					<a className="flex items-center space-x-2 hover:text-blue-800" href="#">
						<FiFolder className="text-lg" />{" "}
						<span className="text-lg font-semibold">February 2022</span>
					</a>
				</li>
				<li>
					<a className="flex items-center space-x-2 hover:text-blue-800" href="#">
						<FiFolder className="text-lg" />{" "}
						<span className="text-lg font-semibold">March 2022</span>
					</a>
				</li>
				<li>
					<a className="flex items-center space-x-2 hover:text-blue-800" href="#">
						<FiFolder className="text-lg" />{" "}
						<span className="text-lg font-semibold">April 2022</span>
					</a>
				</li>
				<li>
					<a className="flex items-center space-x-2 hover:text-blue-800" href="#">
						<FiFolder className="text-lg" />{" "}
						<span className="text-lg font-semibold">May 2022</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default WidgetArchive;
