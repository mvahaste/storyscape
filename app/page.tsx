import { BookCard } from "@/components/ui/book-card";
import { BookGrid } from "@/components/ui/book-grid";
import { GenreCard } from "@/components/ui/genre-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getOnSaleBooks, getPopularBooks } from "@/lib/books";
import { getPopularGenres } from "@/lib/genres";

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
				<SectionHeading text="Popular Books" font="serif" />
				<BookGrid>
					{getPopularBooks(5).map((book, i) => (
						<BookCard book={book} key={book.id} topN={i + 1} />
					))}
				</BookGrid>
			</section>
			<section>
				<SectionHeading text="Popular Genres" font="serif" />
				<div className="grid grid-cols-2 grid-rows-2 w-full md:mx-auto gap-2 md:gap-4">
					{getPopularGenres(4).map((genre) => (
						<GenreCard genre={genre} key={genre.id} />
					))}
				</div>
			</section>
		</main>
	);
}
