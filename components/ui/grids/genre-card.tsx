import { Genre } from "@/lib/genres";
import { BookMarked } from "lucide-react";
import Link from "next/link";

export function GenreCard({ genre }: { genre: Genre }) {
	return (
		<Link className="bg-secondary flex items-center justify-center h-20 rounded-sm p-2 font-serif hover:underline gap-2" href={`browse?category=books&genre=${genre.id}`}>
			{genre.icon ? genre.icon : <BookMarked />}
			<h3 className="text-base md:text-lg lg:text-xl line-clamp-1">{genre.name}</h3>
		</Link>
	);
}
