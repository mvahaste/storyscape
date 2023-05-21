import Link from "next/link";

export function CategoryCard({ text, icon, href }: { text: string; icon: any; href: string }) {
	return (
		<Link className="bg-secondary flex items-center justify-center h-20 rounded-sm p-2 font-serif hover:underline gap-2" href={href}>
			{icon}
			<h3 className="text-base md:text-lg line-clamp-1">{text}</h3>
		</Link>
	);
}
