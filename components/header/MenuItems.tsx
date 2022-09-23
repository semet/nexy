import Link from "next/link";
import React from "react";

const menus = [
	{
		name: "Home",
		link: "#",
	},
	{
		name: "Feature",
		link: "#",
	},
	{
		name: "About",
		link: "#",
	},
	{
		name: "Service",
		link: "#",
	},
	{
		name: "Blog",
		link: "#",
	},
	{
		name: "Contact",
		link: "#",
	},
];
const MenuItems = () => {
	return (
		<div className="text-slate-600 hidden md:inline-flex text-lg">
			<ul className="list-none flex space-x-5">
				{menus.map((menu, index) => (
					<li
						key={index}
						className="underline-offset-[9px] hover:underline hover:text-blue-600 hover:-translate-y-[0.1rem] transition-all ease-in-out"
					>
						<Link href={menu.link}>
							<a>{menu.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MenuItems;
