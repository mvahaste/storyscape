import { BookCard } from "@/components/ui/book-card";
import { BookGrid } from "@/components/ui/book-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAllBooks, getOnSaleBooks, getPopularBooks } from "@/lib/books";

export default function Home() {
	return (
		<main className="flex flex-col p-4 w-full md:max-w-5xl mx-auto gap-8 md:gap-4">
			{/* On sale books */}
			{/* TODO: This should really be a carousel */}
			<section>
				<SectionHeading text="On Sale" font="serif" />
				<BookGrid>
					{getOnSaleBooks(true, 5)
						.filter((book) => book.sale)
						.map((book) => (
							<BookCard book={book} key={book.id} />
						))}
				</BookGrid>
			</section>
			{/* All books */}
			<section>
				<SectionHeading text="Popular" font="serif" />
				<BookGrid>
					{getPopularBooks(5).map((book) => (
						<BookCard book={book} key={book.id} />
					))}
				</BookGrid>
			</section>
		</main>
	);
}
