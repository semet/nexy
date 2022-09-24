import React from "react";
import { MdMenu } from "react-icons/md";
import { useScroll } from "../../hooks/scrollHook";

const ToggleMobileMenu = () => {
	const scrollPosition = useScroll();
	return (
		<div className="inline-flex lg:hidden">
			<MdMenu
				className={`text-4xl ${
					scrollPosition >= 95
						? "text-gray-700 hover:text-gray-900"
						: "text-zinc-50  hover:text-gray-200"
				}`}
			/>
		</div>
	);
};

export default ToggleMobileMenu;
