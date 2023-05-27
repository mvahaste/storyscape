import { Atom, Brain, Hourglass, Wand2 } from "lucide-react";

export class Genre {
	id: number;
	name: string;
	icon?: JSX.Element;

	constructor(id: number, name: string, icon?: JSX.Element) {
		this.id = id;
		this.name = name;
		this.icon = icon;
	}
}

const genres: Genre[] = [
	new Genre(1, "Fiction"),
	new Genre(2, "Non-fiction"),
	new Genre(3, "Fantasy", <Wand2 />),
	new Genre(4, "Science Fiction", <Atom />),
	new Genre(5, "Mystery"),
	new Genre(12, "History", <Hourglass />),
	new Genre(13, "Philosophy", <Brain />),
];

const popular = [1, 2, 3, 13];

/**
 * Get all genres
 * @param limit the maximum number of genres to return
 * @returns array of genres
 */
export function getGenres(limit?: number): Genre[] {
	return genres.slice(0, limit);
}

/**
 * Get popular genres
 * @param limit the maximum number of genres to return
 * @returns array of genres
 */
export function getPopularGenres(limit?: number): Genre[] {
	return genres.filter((g) => popular.indexOf(g.id) !== -1).slice(0, limit);
}

/**
 * Get a genre by its ID
 * @param id the genre ID
 * @returns the genre
 */
export function getGenreByID(id: number): Genre | undefined {
	return genres.find((g) => g.id === id);
}
