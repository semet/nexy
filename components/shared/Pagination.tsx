import React from "react";

const Pagination = () => {
	return (
		<ul className="flex justify-center space-x-1">
			<li className="px-4 py-2 bg-blue-700 rounded-full text-lg text-white shadow-lg shadow-blue-800 hover:bg-blue-600">
				<a href="#">prev</a>
			</li>
			<li className="px-4 py-2 bg-blue-700 rounded-full text-lg text-white shadow-lg shadow-blue-800 hover:bg-blue-600">
				<a href="#">1</a>
			</li>
			<li className="px-4 py-2 bg-blue-700 rounded-full text-lg text-white shadow-lg shadow-blue-800 hover:bg-blue-600">
				<a href="#">2</a>
			</li>
			<li className="px-4 py-2 bg-blue-700 rounded-full text-lg text-white shadow-lg shadow-blue-800 hover:bg-blue-600">
				<a href="#">3</a>
			</li>
			<li className="px-4 py-2 bg-blue-700 rounded-full text-lg text-white shadow-lg shadow-blue-800 hover:bg-blue-600">
				<a href="#">4</a>
			</li>
			<li className="px-4 py-2 bg-blue-700 rounded-full text-lg text-white shadow-lg shadow-blue-800 hover:bg-blue-600">
				<a href="#">next</a>
			</li>
		</ul>
	);
};

export default Pagination;
