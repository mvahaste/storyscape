export function SectionHeading({ text, font }: { text: string; font: "sans" | "serif" }) {
	return (
		<div className="flex gap-3 items-baseline mb-2 md:mb-4 justify-between ">
			<h2 className={`text-2xl md:text-3xl font-medium font-${font}`}>{text}</h2>
			<a href="" className={`text-lg font-medium font-${font}`}>
				See all
			</a>
		</div>
	);
}
