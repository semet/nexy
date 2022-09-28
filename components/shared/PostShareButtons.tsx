import React from "react";
import { FiFacebook, FiPhone, FiTwitter } from "react-icons/fi";

const PostShareButtons = () => {
	return (
		<div className="flex -space-x-2 hover:space-x-2 transition-all py-2 w-min">
			<a
				href="#"
				className="p-2 bg-blue-400 text-white rounded-full shadow-lg shadow-blue-500"
			>
				<FiTwitter />
			</a>
			<a
				href="#"
				className="p-2 bg-blue-700 text-white rounded-full shadow-lg shadow-blue-800"
			>
				<FiFacebook />
			</a>
			<a
				href="#"
				className="p-2 bg-green-500 text-white rounded-full shadow-lg shadow-green-600"
			>
				<FiPhone />
			</a>
		</div>
	);
};

export default PostShareButtons;
