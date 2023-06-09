import Link from "next/link";

export function SectionHeading({ text, font, href }: { text: string; font: "sans" | "serif"; href?: string }) {
	return (
		<div className="flex gap-3 items-baseline mb-3 md:mb-4 justify-between text-foreground">
			<h2 className={`text-2xl md:text-3xl font-medium font-${font}`}>{text}</h2>
			{href && (
				<Link href={href} className={`font-medium text-base text-foreground md:text-lg hover:underline font-${font}`} title={`See all ${text.toLowerCase()}`}>
					See all
				</Link>
			)}
		</div>
	);
}
