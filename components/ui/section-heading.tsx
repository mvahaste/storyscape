export function SectionHeading({ text, font }: { text: string; font: "sans" | "serif" }) {
	return (
		<div className="flex gap-3 items-center mb-4">
			<h2 className={`text-3xl font-medium text-black font-${font}`}>{text}</h2>
		</div>
	);
}
