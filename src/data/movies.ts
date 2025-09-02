export interface Movie {
  id: string;
  title: string;
  year: number;
  description?: string;
  actorIds: string[];
  genreIds: string[];
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "The Matrix",
    year: 1999,
    description: "A computer programmer discovers a mysterious world",
    actorIds: ["1", "2"],
    genreIds: ["1", "2"]
  },
  {
    id: "2",
    title: "Inception",
    year: 2010,
    description: "A thief who steals corporate secrets through dream-sharing technology",
    actorIds: ["2", "3"],
    genreIds: ["1", "3"]
  },
  {
    id: "3",
    title: "The Dark Knight",
    year: 2008,
    description: "Batman faces his greatest challenge yet",
    actorIds: ["2", "4"],
    genreIds: ["1", "4"]
  }
];
