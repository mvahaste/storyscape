export function CategoryGrid({ children }: { children: React.ReactNode }) {
	return <div className="grid grid-cols-1 md:grid-cols-3 1 w-full md:mx-auto gap-2 md:gap-4 mb-3 md:mb-5">{children}</div>;
}
