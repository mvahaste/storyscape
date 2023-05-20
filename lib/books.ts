export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    genre: string;
    cover: string;
    rating: number;
    price: number; // Normal price
    sale?: number; // Sale price
}

const books: Book[] = [
    {
        id: 1,
        title: "Killing Commendatore",
        author: "Haruki Murakami",
        description: "",
        genre: "Fiction",
        cover: "/images/killing-commendatore.jpg",
        rating: 4.5,
        price: 18.59
    },
    {
        id: 2,
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        description: "",
        genre: "Fiction",
        cover: "/images/kafka-on-the-shore.jpg",
        rating: 4.5,
        price: 11.99,
        sale: 9.99,
    },
    {
        id: 3,
        title: "Pachinko",
        author: "Min Jin Lee",
        description: "",
        genre: "Fiction",
        cover: "/images/pachinko.jpg",
        rating: 4.5,
        price: 10.99,
    },
    {
        id: 4,
        title: "Runaway Horses",
        author: "Yukio Mishima",
        description: "",
        genre: "Fiction",
        cover: "/images/runaway-horses.jpg",
        rating: 4.5,
        price: 16.99,
        sale: 12.59,
    },
    {
        id: 5,
        title: "The Sailor Who Fell from Grace with the Sea",
        author: "Yukio Mishima",
        description: "",
        genre: "Fiction",
        cover: "/images/the-sailor-who-fell-from-grace-with-the-sea.jpg",
        rating: 4.5,
        price: 15.29,
        sale: 11.99,
    },
    {
        id: 6,
        title: "A Wild Sheep Chase",
        author: "Haruki Murakami",
        description: "",
        genre: "Fiction",
        cover: "/images/a-wild-sheep-chase.jpg",
        rating: 4.5,
        price: 11.99,
    },
    {
        id: 7,
        title: "Spring Snow",
        author: "Yukio Mishima",
        description: "",
        genre: "Fiction",
        cover: "/images/spring-snow.jpg",
        rating: 4.5,
        price: 16.99,
        sale: 12.99,
    },
    {
        id: 8,
        title: "Temple of Dawn",
        author: "Yukio Mishima",
        description: "",
        genre: "Fiction",
        cover: "/images/temple-of-dawn.jpg",
        rating: 4.5,
        price: 16.99,
    },
];

export function getBookById(id: number): Book | undefined {
    return books.find((book) => book.id === id);
}

export function getAllBooks(): Book[] {
    return books;
}

export function getDiscount(price: number, sale: number): number {
    return sale ? Math.round(((price - sale) / price) * 100) : 0;
}

export function getOnSaleBooks(sortByDiscount: boolean = false): Book[] {
    var onSaleBooks = books.filter((book) => book.sale)

    if (!sortByDiscount) {
        return onSaleBooks;
    }

    return onSaleBooks.sort((a, b) => {
        return a.sale && b.sale ? (getDiscount(b.price, b.sale) - getDiscount(a.price, a.sale)): 0;
    });
}