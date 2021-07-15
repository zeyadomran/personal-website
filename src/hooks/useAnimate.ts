import React from "react";

export default function useAnimate(ref: any, animation: string) {
	React.useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) entry.target.classList.add(animation);
		});
		if (ref.current) observer.observe(ref.current);
	}, [ref]);
}
