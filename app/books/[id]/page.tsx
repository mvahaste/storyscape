"use client";

import { Author } from "@/lib/authors";
import { getBookById } from "@/lib/books";
import { Genre } from "@/lib/genres";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BookPage() {
	const { id } = useParams();

	const book = getBookById(Number.parseInt(id));

	if (!book) return <h1 className="font-sans text-center">Book not found</h1>;

	const bookID: number = parseInt(id);
	const bookTitle: string = book.title;
	const bookAuthors: Author[] = book.getAuthors();
	const bookDescription: string = book.description;
	const bookGenre: Genre = book.getGenre();
	const bookRating: number = book.rating;
	const bookPrice: number = book.price;
	const bookSale: number | undefined = book.sale;

	return (
		<main className="flex flex-col p-4 w-full md:max-w-5xl mx-auto gap-8 md:gap-4">
			{/* Main book section */}
			<section className="flex flex-col md:flex-row gap-2 md:gap-4">
				<Image className="w-full md:w-80 h-auto aspect-[1/1.5] object-cover rounded-sm" src={book.cover} alt={book.title} width={512} height={512} />
				<div className="flex flex-col">
					<h2 className="font-serif text-3xl">{book.title}</h2>
					<h3>{authors(bookAuthors)}</h3>
				</div>
			</section>
		</main>
	);
}

/**
 * Get a list of author links separated by commas
 * @param authors list of author IDs
 * @returns <p> element with author links
 */
const authors = (authors: Author[]) => {
	return (
		<h3 className="line-clamp-1">
			{/* <span className="">Author{authors.length > 1 ? "s" : ""}: </span> */}
			{authors.map((author, i) => (
				<span key={author.id}>
					{authorLink(author)}
					{i < authors.length - 1 ? ", " : ""}
				</span>
			))}
		</h3>
	);
};

/**
 * Get a link to an author
 * @param author author ID
 * @returns <Link> element
 */
const authorLink = (author: Author): any => {
	return (
		<Link key={author.id} href={`/authors/${author.id}`} className="hover:underline inline" title={author.name}>
			{author.name}
		</Link>
	);
};
