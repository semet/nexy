import React from "react";
import {
	FiFacebook,
	FiGithub,
	FiInstagram,
	FiMail,
	FiPhone,
	FiTwitter,
} from "react-icons/fi";
import FooterLogo from "./FooterLogo";

const FooterContainer = () => {
	return (
		<footer
			className="flex flex-col  bg-stone-50 bg-cover"
			style={{ backgroundImage: "url('/images/shape/shape02.png')" }}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-16 py-8 lg:px-32">
				<div className="w-full space-y-4">
					{/* Logo */}
					<FooterLogo />
					{/* ome text */}
					<p>
						Grursus mal suada faci Lorem to the ipsum dolarorit more ame tion more
						consectetu.
					</p>
					{/* Social Button */}
					<div className="flex space-x-4">
						<a
							href="#"
							className="p-2 bg-blue-400 text-white rounded-full shadow-lg shadow-blue-500 hover:scale-105 transition-all"
						>
							<FiTwitter />
						</a>
						<a
							href="#"
							className="p-2 bg-blue-700 text-white rounded-full shadow-lg shadow-blue-800 hover:scale-105 transition-all"
						>
							<FiFacebook />
						</a>
						<a
							href="#"
							className="p-2 bg-rose-500 text-white rounded-full shadow-lg shadow-rose-600 hover:scale-105 transition-all"
						>
							<FiInstagram />
						</a>
						<a
							href="#"
							className="p-2 bg-gray-800 text-white rounded-full shadow-lg shadow-gray-900 hover:scale-105 transition-all"
						>
							<FiGithub />
						</a>
					</div>
				</div>
				<div className="text-gray-800 mt-6  lg:px-10">
					<h3 className="text-xl font-bold">Site Menu</h3>
					<ul className="list-inside space-y-4 mt-4">
						<li className="link-style">
							<a href="#">Home</a>
						</li>
						<li className="link-style">
							<a href="#">Feature</a>
						</li>
						<li className="link-style">
							<a href="#">About</a>
						</li>
						<li className="link-style">
							<a href="#">Contact</a>
						</li>
						<li className="link-style">
							<a href="#">Service</a>
						</li>
						<li className="link-style">
							<a href="#">Blog</a>
						</li>
					</ul>
				</div>
				<div className="text-gray-800 mt-6 lg:px-10">
					<h3 className="text-xl font-bold">Our Service</h3>
					<ul className="list-inside space-y-4 mt-4">
						<li className="link-style">
							<a href="#">Cyber Scurity</a>
						</li>
						<li className="link-style">
							<a href="#">Web Development</a>
						</li>
						<li className="link-style">
							<a href="#">Data Analytics</a>
						</li>
						<li className="link-style">
							<a href="#">SEO Optimization</a>
						</li>
					</ul>
				</div>
				<div className="text-gray-800 mt-6 lg:px-10">
					<h3 className="text-xl font-bold">Contact Us</h3>
					<div className="flex items-center space-x-2 mt-4">
						<div className="p-2 rounded-full bg-rose-700">
							<FiMail className="text-white text-sm lg:text-md " />
						</div>
						<p className="text-md lg:text-lg">hamdanilombok@gmail.com</p>
					</div>
					<div className="flex items-center space-x-2 mt-4">
						<div className="p-2 rounded-full bg-green-600">
							<FiPhone className="text-white text-sm lg:text-md " />
						</div>
						<p className="text-md lg:text-lg">+6287736690307</p>
					</div>
					<div className="flex items-center space-x-2 mt-4">
						<div className="p-2 rounded-full bg-sky-600">
							<FiTwitter className="text-white text-sm lg:text-md " />
						</div>
						<p className="text-md lg:text-lg">@HamdaniAshSidik</p>
					</div>
					<div className="flex items-center space-x-2 mt-4">
						<div className="p-2 rounded-full bg-blue-700">
							<FiFacebook className="text-white text-sm lg:text-md " />
						</div>
						<p className="text-md lg:text-lg">@HamdaniAshSidik</p>
					</div>
				</div>
			</div>
			<div className="mt-4 py-2 text-center bg-slate-50 border-t-2">
				<p>Copyright @{new Date().getFullYear().toString()} Hamdani Ash-Sidiq</p>
			</div>
		</footer>
	);
};

export default FooterContainer;
