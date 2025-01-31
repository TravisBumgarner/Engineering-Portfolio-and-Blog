'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Scroll() {
    // No idea why this is needed. Cannot figure out how to scroll to y=0 otherwise.
	const pathname = usePathname();
	useEffect(() => {
		window.scroll(0, 0);
	}, [pathname]);
	return <></>;
}