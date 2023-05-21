export interface Book {
    id: number;
    title: string;
    authors: number[];
    description: string;
    genre: number;
    cover: string;
    rating: number;
    price: number;
    sale?: number;
}

const books: Book[] = [
    {
        id: 1,
        title: "Killing Commendatore",
        authors: [1],
        description: "",
        genre: 1,
        cover: "/images/books/killing-commendatore.jpg",
        rating: 4.5,
        price: 18.59
    },
    {
        id: 2,
        title: "Kafka on the Shore",
        authors: [1],
        description: "",
        genre: 1,
        cover: "/images/books/kafka-on-the-shore.jpg",
        rating: 4.5,
        price: 11.99,
        sale: 9.99,
    },
    {
        id: 10,
        title: "The Elephant Vanishes",
        authors: [1],
        description: "",
        genre: 1,
        cover: "/images/books/the-elephant-vanishes.jpg",
        rating: 4.5,
        price: 11.99,
    },
    {
        id: 4,
        title: "Runaway Horses",
        authors: [2],
        description: "",
        genre: 1,
        cover: "/images/books/runaway-horses.jpg",
        rating: 4.5,
        price: 16.99,
        sale: 12.59,
    },
    {
        id: 5,
        title: "The Sailor Who Fell from Grace with the Sea",
        authors: [2],
        description: "",
        genre: 1,
        cover: "/images/books/the-sailor-who-fell-from-grace-with-the-sea.jpg",
        rating: 4.5,
        price: 15.29,
        sale: 11.99,
    },
    {
        id: 6,
        title: "A Wild Sheep Chase",
        authors: [1],
        description: "",
        genre: 1,
        cover: "/images/books/a-wild-sheep-chase.jpg",
        rating: 4.5,
        price: 11.99,
    },
    {
        id: 7,
        title: "Spring Snow",
        authors: [2],
        description: "",
        genre: 1,
        cover: "/images/books/spring-snow.jpg",
        rating: 4.5,
        price: 16.99,
        sale: 12.99,
    },
    {
        id: 8,
        title: "The Temple of Dawn",
        authors: [2],
        description: "",
        genre: 1,
        cover: "/images/books/the-temple-of-dawn.jpg",
        rating: 4.5,
        price: 16.99,
    },
    {
        id: 3,
        title: "Pachinko",
        authors: [3],
        description: "",
        genre: 1,
        cover: "/images/books/pachinko.jpg",
        rating: 4.5,
        price: 10.99,
        sale: 8.99,
    },
    {
        id: 9,
        title: "The Wind-Up Bird Chronicle",
        authors: [1],
        description: "",
        genre: 1,
        cover: "/images/books/the-wind-up-bird-chronicle.jpg",
        rating: 4.5,
        price: 11.99,
    },
    {
        id: 11,
        title: "Meditations",
        authors: [4],
        description: "",
        genre: 13,
        cover: "/images/books/meditations.jpg",
        rating: 4.5,
        price: 9.99,
    },
    {
        id: 12,
        title: "The Communist Manifesto",
        authors: [5, 8],
        description: "",
        genre: 13,
        cover: "/images/books/the-communist-manifesto.jpg",
        rating: 4.5,
        price: 11.99,
    },
    {
        id: 13,
        title: "1984",
        authors: [6],
        description: "",
        genre: 1,
        cover: "/images/books/1984.jpg",
        rating: 4.5,
        price: 9.99,
    },
    {
        id: 14,
        title: "No Longer Human",
        authors: [7, 1], // TODO: REMOVE 1
        description: "",
        genre: 1,
        cover: "/images/books/no-longer-human.jpg",
        rating: 4.5,
        price: 11.99,
        sale:2.49,
    }
];

const popularBooks: number[] = [2, 10, 4, 5, 8, 11];

/**
 * Get book by its ID
 * @param id ID of the book
 * @returns Book object
 */
export function getBookById(id: number): Book | undefined {
    return books.find((book) => book.id === id);
}

/**
 * Get books by author ID
 * @param authorId ID of the author
 * @returns Array of books
 */
export function getBooksByAuthorId(authorId: number): Book[] {
    return books.filter((book) => book.authors.includes(authorId));
}

/**
 * Get books by genre ID
 * @param genreId ID of the genre
 * @returns Array of books
 */
export function getBooksByGenreId(genreId: number): Book[] {
    return books.filter((book) => book.genre === genreId);
}

/**
 * Get all books
 * @returns Array of books
 */
export function getAllBooks(): Book[] {
    return books;
}

/**
 * Get popular books
 * @param limit Limit of books to return
 * @returns Array of books
 */
export function getPopularBooks(limit?: number): Book[] {
    return books.filter((book) => popularBooks.includes(book.id)).slice(0, limit);
}

/**
 * Get books on sale
 * @param limit Limit of books to return
 */
export function getDiscount(price: number, sale: number): number {
    return sale ? Math.round(((price - sale) / price) * 100) : 0;
}

/**
 * Get books on sale
 * @param limit Limit of books to return
 * @returns Array of books
 */
export function getOnSaleBooks(sortByDiscount: boolean = false, limit?: number): Book[] {
    var onSaleBooks = books.filter((book) => book.sale)

    if (!sortByDiscount) {
        return onSaleBooks.slice(0, limit);
    }

    return onSaleBooks.sort((a, b) => {
        return a.sale && b.sale ? (getDiscount(b.price, b.sale) - getDiscount(a.price, a.sale)): 0;
    }).slice(0, limit);
}