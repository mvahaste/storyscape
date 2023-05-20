export function SectionHeading({ text, font }: { text: string; font: "sans" | "serif" }) {
	return (
		<div className="flex gap-3 items-baseline mb-2 md:mb-4 justify-between ">
			<h2 className={`text-2xl md:text-3xl font-medium font-${font}`}>{text}</h2>
			<a href="" className={`font-medium text-base md:text-lg hover:underline font-${font}`} title={`See all ${text.toLowerCase()} books`}>
				See all
			</a>
		</div>
	);
}
