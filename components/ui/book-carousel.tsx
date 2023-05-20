import { ReactNode } from "react";

export function BookCarousel({ children }: { children: ReactNode }) {
	return <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{children}</div>;
}
