export interface Genre {
  id: string;
  name: string;
  description?: string;
}

export const genres: Genre[] = [
  {
    id: "1",
    name: "Action",
    description: "High-energy films with exciting sequences"
  },
  {
    id: "2",
    name: "Sci-Fi",
    description: "Science fiction and futuristic themes"
  },
  {
    id: "3",
    name: "Thriller",
    description: "Suspenseful and exciting films"
  },
  {
    id: "4",
    name: "Drama",
    description: "Serious and emotional storytelling"
  }
];
