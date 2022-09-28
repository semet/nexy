/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const FooterLogo = () => {
	return (
		<Link href="/">
			<a>
				<img
					src="/images/logo/nexy-2.png"
					alt="Nexy Logo"
					className="w-[150px] object-cover"
				/>
			</a>
		</Link>
	);
};

export default FooterLogo;
