import { getDiscount } from "@/lib/books";
import Image from "next/image";
import { Badge } from "./badge";

export function BookCard({ book }: { book: any }) {
	return (
		<div className="flex flex-col">
			<a className="font-medium hover:underline hover:cursor-pointer font-sans relative" href="">
				{book.sale ? <DiscountTag price={book.price} sale={book.sale} /> : null}
				<Image src={book.cover} alt={book.title} width={512} height={512} className="aspect-[1/1.5] object-cover mb-1.5 shadow rounded-sm" />
				<h1 className="line-clamp-2 text-base" title={book.title}>
					{book.title}
				</h1>
			</a>
			<a className="text-sm hover:underline font-sans" href="" title={book.author}>
				{book.author}
			</a>
			<Price price={book.price} sale={book.sale} />
		</div>
	);
}

const priceFormat = (price: number) => {
	var p = new Intl.NumberFormat("eu", {
		style: "currency",
		currency: "EUR",
	}).format(price);

	return p.replace("€", "");
};

const Price = ({ price, sale }: { price: number; sale?: number }) => {
	return (
		<p className="text-sm font-sans">
			<span className={sale ? "line-through text-xs sm:text-sm" : "font-medium"}>{priceFormat(price) + (sale ? "" : "€")}</span>{" "}
			<span className={sale ? "font-semibold text-orange-600" : "hidden"}>{sale ? priceFormat(sale) + "€" : ""}</span>
		</p>
	);
};

const DiscountTag = ({ price, sale }: { price: number; sale: number }) => {
	return (
		<span className="absolute top-0 left-0 py-1 px-2 bg-orange-600 rounded-br-xl rounded-tl-[calc(var(--radius)-5px)] text-sm font-semibold font-sans text-white shadow">
			-{getDiscount(price, sale)}%
		</span>
	);
};
