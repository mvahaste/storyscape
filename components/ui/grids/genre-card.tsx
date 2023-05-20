import { Genre } from "@/lib/genres";
import { BookMarked } from "lucide-react";

export function GenreCard({ genre }: { genre: Genre }) {
	return (
		<a className="bg-secondary flex items-center justify-center h-20 rounded-sm p-2 font-serif hover:underline gap-2" href="">
			{genre.icon ? genre.icon : <BookMarked />}
			<h3 className="text-base md:text-lg lg:text-xl line-clamp-1">{genre.name}</h3>
		</a>
	);
}
