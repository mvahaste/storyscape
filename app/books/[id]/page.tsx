// Page to display a book, for now just show the ID from the URL (using App router, next/navigation)
"use client";

import { Author } from "@/lib/authors";
import { getBookById } from "@/lib/books";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function BookPage() {
	const { id } = useParams();

	const book = getBookById(Number.parseInt(id));

	if (!book) return <h1>Book not found</h1>;

	const authors: Author[] = book.getAuthors();

	return (
		<main className="flex flex-col p-4 w-full md:max-w-5xl mx-auto gap-8 md:gap-4">
			<section>
				<h1 className="font-serif text-3xl">Title: {book.title}</h1>
				<h2>
					Author{authors.length > 1 ? "s" : ""}:{" "}
					{authors.map((author) => {
						return <span key={author.id}>{author.name}</span>;
					})}
				</h2>
				<p className="font-serif -mt-2 mb-4">ID: {book.id}</p>
				<Image src={book.cover} alt={book.title} width={512} height={512} />
			</section>
		</main>
	);
}
