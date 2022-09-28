import React, { Fragment, ReactNode } from "react";
import MainHeader from "./header/MainHeader";
import SubscribeSection from "./footer/SubscribeSection";
import FooterContainer from "./footer/FooterContainer";

interface Props {
	children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			{/* content */}
			{children}
			{/* News Letter Subscription */}
			<SubscribeSection />
			{/* Footer */}
			<FooterContainer />
		</Fragment>
	);
};

export default Layout;
