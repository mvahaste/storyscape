// Page to display a book, for now just show the ID from the URL (using App router, next/navigation)
"use client";

import { useParams } from "next/navigation";

export default function BookPage() {
	const { id } = useParams();

	return (
		<main className="flex flex-col p-4 w-full md:max-w-5xl mx-auto gap-8 md:gap-4">
			<section>
				<h1 className="font-serif text-3xl">Book {id}</h1>
			</section>
		</main>
	);
}
