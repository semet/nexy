import React from "react";
import { FiSearch } from "react-icons/fi";

const WidgetSearch = () => {
	return (
		<div className="flex items-center bg-gray-50 shadow-lg rounded-lg p-1">
			<input
				type="text"
				className="bg-transparent text-gray-800 w-full ring-0 border-none focus:ring-0 focus:border-none"
				placeholder="search post"
			/>
			<FiSearch className="text-3xl text-gray-700 mr-1" />
		</div>
	);
};

export default WidgetSearch;
