import { Author, getAuthorById } from "./authors";

export class Book {
    id: number;
    title: string;
    authors: number[];
    description: string;
    genre: number;
    cover: string;
    rating: number;
    price: number;
    sale?: number;

    constructor(
        id: number,
        title: string,
        authors: number[],
        description: string,
        genre: number,
        cover: string,
        rating: number,
        price: number,
        sale?: number,
    ) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.description = description;
        this.genre = genre;
        this.cover = cover;
        this.rating = rating;
        this.price = price;
        this.sale = sale;
    }

    /**
     * Get the authors of the book.
     * @returns array of authors
     */
    getAuthors(): Author[] {
        return this.authors.map((authorId) => {
            const author = getAuthorById(authorId);

            if (!author) {
                throw new Error(`Author with ID ${authorId} not found`);
            }

            return author;
        });
    }

    /**
     * Get the discount percentage of the book.
     * @returns discount percentage
     */
    getDiscount(): number {
        return this.sale ? Math.round(((this.price - this.sale) / this.price) * 100) : 0;
    }
}


const books: Book[] = [
    new Book(
        1,
        "Killing Commendatore",
        [1],
        "",
        1,
        "/images/books/killing-commendatore.jpg",
        4.5,
        18.59
    ),
    new Book(
        2,
        "Kafka on the Shore",
        [1],
        "",
        1,
        "/images/books/kafka-on-the-shore.jpg",
        4.5,
        11.99,
        9.99
    ),
    new Book(
        10,
        "The Elephant Vanishes",
        [1],
        "",
        1,
        "/images/books/the-elephant-vanishes.jpg",
        4.5,
        11.99
    ),
    new Book(
        4,
        "Runaway Horses",
        [2],
        "",
        1,
        "/images/books/runaway-horses.jpg",
        4.5,
        16.99,
        12.59
    ),
    new Book(
        5,
        "The Sailor Who Fell from Grace with the Sea",
        [2],
        "",
        1,
        "/images/books/the-sailor-who-fell-from-grace-with-the-sea.jpg",
        4.5,
        15.29,
        11.99
    ),
    new Book(
        6,
        "A Wild Sheep Chase",
        [1],
        "",
        1,
        "/images/books/a-wild-sheep-chase.jpg",
        4.5,
        11.99
    ),
    new Book(
        7,
        "Spring Snow",
        [2],
        "",
        1,
        "/images/books/spring-snow.jpg",
        4.5,
        16.99,
        12.99
    ),
    new Book(
        8,
        "The Temple of Dawn",
        [2],
        "",
        1,
        "/images/books/the-temple-of-dawn.jpg",
        4.5,
        16.99
    ),
    new Book(
        3,
        "Pachinko",
        [3],
        "",
        1,
        "/images/books/pachinko.jpg",
        4.5,
        10.99,
        8.99
    ),
    new Book(
        9,
        "The Wind-Up Bird Chronicle",
        [1],
        "",
        1,
        "/images/books/the-wind-up-bird-chronicle.jpg",
        4.5,
        11.99
    ),
    new Book(
        11,
        "Meditations",
        [4],
        "",
        13,
        "/images/books/meditations.jpg",
        4.5,
        9.99
    ),
    new Book(
        12,
        "The Communist Manifesto",
        [5, 8],
        "",
        13,
        "/images/books/the-communist-manifesto.jpg",
        4.5,
        11.99,
    ),
    new Book(
        13,
        "1984",
        [6],
        "",
        1,
        "/images/books/1984.jpg",
        4.5,
        9.99
    ),
    new Book(
        14,
        "No Longer Human",
        [7],
        "",
        1,
        "/images/books/no-longer-human.jpg",
        4.5,
        11.99,
        2.49
        ),
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
 * @returns Array of books
 */
export function getOnSaleBooks(sortByDiscount: boolean = false, limit?: number): Book[] {
    var onSaleBooks = books.filter((book) => book.sale)

    if (!sortByDiscount) {
        return onSaleBooks.slice(0, limit);
    }

    return onSaleBooks.sort((a, b) => {
        return a.sale && b.sale ? (b.getDiscount() - a.getDiscount()): 0;
    }).slice(0, limit);
}