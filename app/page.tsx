import { BookCard } from "@/components/ui/grids/book-card";
import { BookGrid } from "@/components/ui/grids/book-grid";
import { GenreCard } from "@/components/ui/grids/genre-card";
import { GenreGrid } from "@/components/ui/grids/genre-grid";
import { GiftCardOffer } from "@/components/ui/offers/gift-card-offer";
import { SectionHeading } from "@/components/ui/section-heading";
import { getOnSaleBooks, getPopularBooks } from "@/lib/books";
import { getPopularGenres } from "@/lib/genres";
import Image from "next/image";

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
			<GiftCardOffer />
			{/* Popular genres */}
			<section>
				<SectionHeading text="Popular Genres" font="serif" />
				<GenreGrid>
					{getPopularGenres(4).map((genre) => (
						<GenreCard genre={genre} key={genre.id} />
					))}
				</GenreGrid>
			</section>
		</main>
	);
}
