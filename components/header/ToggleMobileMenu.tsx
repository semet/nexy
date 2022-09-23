import React from "react";
import { MdMenu } from "react-icons/md";

const ToggleMobileMenu = () => {
	return (
		<div className="inline-flex lg:hidden text-gray-50 hover:text-gray-200">
			<MdMenu className="text-4xl" />
		</div>
	);
};

export default ToggleMobileMenu;
