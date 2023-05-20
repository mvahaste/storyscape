export function GenreGrid({ children }: { children: React.ReactNode }) {
	return <div className="grid grid-cols-2 grid-rows-2 w-full md:mx-auto gap-2 md:gap-4">{children}</div>;
}
