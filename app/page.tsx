import { BookCard } from "@/components/ui/grids/book-card";
import { BookGrid } from "@/components/ui/grids/book-grid";
import { CategoryCard } from "@/components/ui/grids/category-card";
import { CategoryGrid } from "@/components/ui/grids/category-grid";
import { GenreCard } from "@/components/ui/grids/genre-card";
import { GenreGrid } from "@/components/ui/grids/genre-grid";
import { GiftCardOffer } from "@/components/ui/offers/gift-card-offer";
import { SectionHeading } from "@/components/ui/section-heading";
import { getOnSaleBooks, getPopularBooks } from "@/lib/books";
import { getPopularGenres } from "@/lib/genres";
import { BookMarked, User, VenetianMask } from "lucide-react";

export default function Home() {
	return (
		<main className="flex flex-col p-4 w-full md:max-w-5xl mx-auto gap-8 md:gap-4">
			<section>
				<SectionHeading text="Welcome!" font="serif" />
				<p className="font-serif -mt-2 mb-4">What are you looking for?</p>
				<CategoryGrid>
					<CategoryCard text="Books" icon={<BookMarked />} href="browse?category=books" />
					<CategoryCard text="Genres" icon={<VenetianMask />} href="browse?category=genres" />
					<CategoryCard text="Authors" icon={<User />} href="browse?category=authors" />
				</CategoryGrid>
			</section>
			{/* On sale books */}
			{/* TODO: This should really be a carousel */}
			<section>
				<SectionHeading text="On Sale" font="serif" href="browse?category=books&onSale=true" />
				<BookGrid>
					{getOnSaleBooks(true, 5)
						.filter((book) => book.sale)
						.map((book) => (
							<BookCard book={book} key={book.id} />
						))}
				</BookGrid>
			</section>
			{/* Popular books */}
			<section>
				<SectionHeading text="Popular Books" font="serif" href="browse?category=books&popular=true" />
				<BookGrid>
					{getPopularBooks(5).map((book, i) => (
						<BookCard book={book} key={book.id} topN={i + 1} />
					))}
				</BookGrid>
			</section>
			<GiftCardOffer />
			{/* Popular genres */}
			<section>
				<SectionHeading text="Popular Genres" font="serif" href="browse?category=genres" />
				<GenreGrid>
					{getPopularGenres(4).map((genre) => (
						<GenreCard genre={genre} key={genre.id} />
					))}
				</GenreGrid>
			</section>
		</main>
	);
}
