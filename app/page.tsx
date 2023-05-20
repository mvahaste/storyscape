import { BookCard } from "@/components/ui/book-card";
import { BookCarousel } from "@/components/ui/book-carousel";
import { books } from "@/lib/books";

export default function Home() {
	return (
		<main className="flex flex-col p-4 w-full md:max-w-5xl mx-auto">
			<BookCarousel>
				{books.map((book) => (
					<BookCard book={book} key={book.id} />
				))}
			</BookCarousel>
		</main>
	);
}
