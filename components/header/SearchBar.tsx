import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
	return (
		<div className="hidden lg:inline-flex text-gray-300 cursor-pointer hover:text-gray-100">
			<MdSearch className="text-2xl" />
		</div>
	);
};

export default SearchBar;
