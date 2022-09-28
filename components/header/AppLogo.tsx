/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const AppLogo = () => {
	return (
		<Link href="/">
			<a>
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
			</a>
		</Link>
	);
};

export default AppLogo;
