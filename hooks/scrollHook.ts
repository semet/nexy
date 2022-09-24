import { useState, useEffect } from "react";
export const useScroll = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
			// console.log(scrollPosition);
		};
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPosition]);

	return scrollPosition;
};
