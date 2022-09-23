import React from "react";

const LoginButton = () => {
	return (
		<div className="hidden lg:inline-flex">
			<button className="bg-gradient-to-r from-[#6059e7] to-emerald-300 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-[#6059e7] text-white px-4 py-1 rounded-2xl shadow-md hover:shadow-lg">
				Login
			</button>
		</div>
	);
};

export default LoginButton;
