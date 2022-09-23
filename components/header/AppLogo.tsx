/* eslint-disable @next/next/no-img-element */
import React from "react";

const AppLogo = () => {
	return (
		<div>
			{/* Logo Large */}
			<img
				className="w-[150px] hidden lg:inline-flex"
				src="/images/logo/nexy-2.png"
				alt="Nexy"
			/>
			{/* Logo Small */}
			<img
				className="w-[100px] inline-flex lg:hidden"
				src="/images/logo/nexy.png"
				alt="Nexy"
			/>
		</div>
	);
};

export default AppLogo;
