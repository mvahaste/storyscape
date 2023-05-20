import { cva } from "class-variance-authority";

export function SectionHeading({ text, font }: { text: string; font: "sans" | "serif" }) {
	return (
		<div className="flex gap-3 items-center mb-4">
			<div className="grow h-px bg-black mt-1"></div>
			<h2 className={`text-2xl text-black font-${font}`}>{text}</h2>
			<div className="grow h-px bg-black mt-1"></div>
		</div>
	);
}
