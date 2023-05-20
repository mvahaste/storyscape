import { BookCard } from "@/components/ui/book-card";
import { BookGrid } from "@/components/ui/book-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { books } from "@/lib/books";

export default function Home() {
	return (
		<main className="flex flex-col p-4 w-full md:max-w-5xl mx-auto gap-10">
			{/* On sale books */}
			{/* TODO: This should really be a carousel */}
			<section>
				<SectionHeading text="On Sale" font="serif" />
				<BookGrid>
					{books
						.filter((book) => book.sale)
						.map((book) => (
							<BookCard book={book} key={book.id} />
						))}
				</BookGrid>
			</section>
			{/* All books */}
			<section>
				<SectionHeading text="All Books" font="serif" />
				<BookGrid>
					{books.map((book) => (
						<BookCard book={book} key={book.id} />
					))}
				</BookGrid>
			</section>
		</main>
	);
}
