export class Author {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const authors: Author[] = [
    new Author(1, "Haruki Murakami"),
    new Author(2, "Yukio Mishima"),
    new Author(3, "Min Jin Lee"),
    new Author(4, "Marcus Aurelius"),
    new Author(5, "Karl Marx"),
    new Author(6, "George Orwell"),
    new Author(7, "Osamu Dazai"),
    new Author(8, "Friedrich Engels"),
];


/**
 * Returns the author with the given IDid, or undefined if not found.
 * @param id the ID of the author to find.
 * @returns author
 */
export function getAuthorById(id: number): Author | undefined {
    return authors.find((author) => author.id === id);
}

/**
 * Returns all authors.
 * @returns authors
 */
export function getAllAuthors(): Author[] {
    return authors;
}