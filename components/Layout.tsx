import React, { Fragment, ReactNode } from "react";
import MainHeader from "./header/MainHeader";

interface Props {
	children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			{/* Main Header */}
			<MainHeader />
			{/* content */}
			{children}
		</Fragment>
	);
};

export default Layout;
