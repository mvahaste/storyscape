export interface Genre {
	id: number;
	name: string;
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
	},
	{
		id: 4,
		name: "Science Fiction",
	},
	{
		id: 5,
		name: "Mystery",
	},
	{
		id: 12,
		name: "History",
	},
	{
		id: 13,
		name: "Philosophy",
	},
];

const popular = [1, 2, 3, 13];

export function getGenres(limit?: number): Genre[] {
	return genres.slice(0, limit);
}

export function getPopularGenres(limit?: number): Genre[] {
	return genres.filter((g) => popular.indexOf(g.id) !== -1).slice(0, limit);
}

export function getGenre(id: number): Genre | undefined {
	return genres.find((g) => g.id === id);
}
