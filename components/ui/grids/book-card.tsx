import { Author } from "@/lib/authors";
import { Book } from "@/lib/books";
import Image from "next/image";
import Link from "next/link";

export function BookCard({ book, topN }: { book: Book; topN?: number }) {
	return (
		<div className="flex flex-col">
			<Link className="font-medium hover:underline hover:cursor-pointer font-sans relative" href={`books/${book.id}`}>
				{book.sale && <DiscountTag discount={book.getDiscount()} />}
				{/* {topN ? <TopNTag n={topN} /> : null} */}
				<Image src={book.cover} alt={book.title} width={512} height={512} className="aspect-[1/1.5] object-cover mb-1.5 shadow rounded-sm" />
				<h3 className="line-clamp-2 text-base" title={book.title}>
					{book.title}
				</h3>
			</Link>
			{authors(book.getAuthors())}
			<Price price={book.price} sale={book.sale} />
		</div>
	);
}

/**
 * Get a list of author links separated by commas
 * @param authors list of author IDs
 * @returns <p> element with author links
 */
const authors = (authors: Author[]) => {
	return (
		<p className="text-sm font-sans line-clamp-1">
			{authors.map((author, i) => (
				<span key={author.id}>
					{authorLink(author)}
					{i < authors.length - 1 ? ", " : ""}
				</span>
			))}
		</p>
	);
};

/**
 * Get a link to an author
 * @param author author ID
 * @returns <Link> element
 */
const authorLink = (author: Author): any => {
	return (
		<Link key={author.id} href={`/authors/${author.id}`} className="text-sm hover:underline font-sans" title={author.name}>
			{author.name}
		</Link>
	);
};

/**
 * Formats a number to EUR
 * @param price number to format
 * @returns formatted number as string
 */
const priceFormat = (price: number): string => {
	var p = new Intl.NumberFormat("eu", {
		style: "currency",
		currency: "EUR",
	}).format(price);

	return p.replace("€", "");
};

/**
 * Get a price element with sale price if available
 * @param price normal price
 * @param sale sale price
 * @returns <p> element with price
 */
const Price = ({ price, sale }: { price: number; sale?: number }): any => {
	return (
		<p className="text-sm font-sans">
			<span className={sale ? "line-through text-xs sm:text-sm" : "font-medium"}>{priceFormat(price) + (sale ? "" : "€")}</span>{" "}
			<span className={sale ? "font-semibold text-orange-600" : "hidden"}>{sale ? priceFormat(sale) + "€" : ""}</span>
		</p>
	);
};

/**
 * Get a discount tag (-X%)
 * @param price normal price
 * @param sale sale price
 * @returns <span> element with discount
 */
const DiscountTag = ({ discount }: { discount: number }) => {
	return (
		<span className="absolute top-0 left-0 py-1 px-2 bg-orange-600 rounded-br-xl rounded-tl-[calc(var(--radius)-5px)] text-sm font-semibold font-sans text-white shadow">
			-{discount}%
		</span>
	);
};

/**
 * Get a top N tag (#N)
 * @param n N
 * @returns <span> element with N
 */
const TopNTag = ({ n }: { n: number }) => {
	return <span className="text-sm font-medium absolute top-0 right-3 bg-yellow-400 py-1 px-2 rounded-b-lg shadow">#{n}</span>;
};
