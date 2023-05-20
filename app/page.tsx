import { BookCard } from "@/components/ui/book-card";
import { BookGrid } from "@/components/ui/book-carousel";
import { books } from "@/lib/books";

export default function Home() {
	return (
		<main className="flex flex-col p-4 w-full md:max-w-5xl mx-auto">
			<BookGrid>
				{books.map((book) => (
					<BookCard book={book} key={book.id} />
				))}
			</BookGrid>
		</main>
	);
}
