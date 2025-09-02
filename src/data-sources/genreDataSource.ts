import { genres, Genre } from '../data/genres';

export class GenreDataSource {
  async getAllGenres(): Promise<Genre[]> {
    return genres;
  }

  async getGenreById(id: string): Promise<Genre | null> {
    return genres.find(genre => genre.id === id) || null;
  }

  async createGenre(genreData: Omit<Genre, 'id'>): Promise<Genre> {
    const newGenre: Genre = {
      ...genreData,
      id: (genres.length + 1).toString()
    };
    genres.push(newGenre);
    return newGenre;
  }
}
