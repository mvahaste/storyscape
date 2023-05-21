export interface Author {
    id: number;
    name: string;
}

const authors: Author[] = [
    {
        id: 1,
        name: "Haruki Murakami",
    },
    {
        id: 2,
        name: "Yukio Mishima",
    },
    {
        id: 3,
        name: "Min Jin Lee",
    },
    {
        id: 4,
        name: "Marcus Aurelius",
    },
    {
        id: 5,
        name: "Karl Marx",
    },
    {
        id: 6,
        name: "George Orwell",
    },
    {
        id: 7,
        name: "Osamu Dazai",
    },
    {
        id: 8,
        name: "Friedrich Engels",
    },
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