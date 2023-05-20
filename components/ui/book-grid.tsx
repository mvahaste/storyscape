import { ReactNode } from "react";

export function BookGrid({ children }: { children: ReactNode }) {
	return <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full md:mx-auto md:w-fit gap-4 md:gap-6">{children}</div>;
}
