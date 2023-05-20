import { Genre } from "@/lib/genres";
import { Book } from "lucide-react";

export function GenreCard({ genre }: { genre: Genre }) {
	return (
		<a className="bg-secondary flex items-center justify-center h-20 rounded-sm p-2 font-serif hover:underline gap-2" href="">
			<Book size={24} />
			<h3 className="text-base md:text-lg lg:text-xl line-clamp-1">{genre.name}</h3>
		</a>
	);
}
