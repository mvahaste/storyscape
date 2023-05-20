import Image from "next/image";

export function BookCard({ book }: { book: any }) {
	return (
		<div className="flex flex-col w-fit h-fit p-2">
			<a className="text-base md:text-lg font-medium hover:underline hover:cursor-pointer font-sans">
				<Image src={book.cover} alt={book.title} width={200} height={300} className="aspect-[1/1.5] object-cover mb-1.5 shadow rounded-sm" />
				<h1 className="line-clamp-2" title={book.title}>
					{book.title}
				</h1>
			</a>
			<a className="text-sm md:text-base hover:underline font-sans" href="" title={book.author}>
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
		<p className="text-sm md:text-base font-sans">
			<span className={sale ? "line-through text-sm" : "font-medium"}>{priceFormat(price) + (sale ? "" : "€")}</span>{" "}
			<span className={sale ? "font-semibold text-orange-600" : "hidden"}>{sale ? priceFormat(sale) + "€" : ""}</span>
		</p>
	);
};
