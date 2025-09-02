import { movies, Movie } from '../data/movies';

export class MovieDataSource {
  async getAllMovies(): Promise<Movie[]> {
    return movies;
  }

  async getMovieById(id: string): Promise<Movie | null> {
    return movies.find(movie => movie.id === id) || null;
  }

  async createMovie(movieData: Omit<Movie, 'id'>): Promise<Movie> {
    const newMovie: Movie = {
      ...movieData,
      id: (movies.length + 1).toString()
    };
    movies.push(newMovie);
    return newMovie;
  }

  async updateMovie(id: string, movieData: Partial<Omit<Movie, 'id'>>): Promise<Movie | null> {
    const index = movies.findIndex(movie => movie.id === id);
    if (index === -1) return null;
    
    movies[index] = { ...movies[index], ...movieData };
    return movies[index];
  }

  async deleteMovie(id: string): Promise<boolean> {
    const index = movies.findIndex(movie => movie.id === id);
    if (index === -1) return false;
    
    movies.splice(index, 1);
    return true;
  }

  async addActorsToMovie(movieId: string, actorIds: string[]): Promise<Movie | null> {
    const movie = await this.getMovieById(movieId);
    if (!movie) return null;
    
    movie.actorIds = [...new Set([...movie.actorIds, ...actorIds])];
    return movie;
  }

  async removeActorFromMovie(movieId: string, actorId: string): Promise<Movie | null> {
    const movie = await this.getMovieById(movieId);
    if (!movie) return null;
    
    movie.actorIds = movie.actorIds.filter(id => id !== actorId);
    return movie;
  }

  async addGenresToMovie(movieId: string, genreIds: string[]): Promise<Movie | null> {
    const movie = await this.getMovieById(movieId);
    if (!movie) return null;
    
    movie.genreIds = [...new Set([...movie.genreIds, ...genreIds])];
    return movie;
  }
}
