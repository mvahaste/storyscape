import { Atom, Brain, Hourglass, Wand2 } from "lucide-react";

export interface Genre {
	id: number;
	name: string;
	icon?: JSX.Element;
}

const genres: Genre[] = [
	{
		id: 1,
		name: "Fiction",
	},
	{
		id: 2,
		name: "Non-fiction",
	},
	{
		id: 3,
		name: "Fantasy",
		icon: <Wand2 />,
	},
	{
		id: 4,
		name: "Science Fiction",
		icon: <Atom />,
	},
	{
		id: 5,
		name: "Mystery",
	},
	{
		id: 12,
		name: "History",
		icon: <Hourglass />,
	},
	{
		id: 13,
		name: "Philosophy",
		icon: <Brain />,
	},
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
export function getGenre(id: number): Genre | undefined {
	return genres.find((g) => g.id === id);
}
