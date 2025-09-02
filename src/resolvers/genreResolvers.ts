import { GenreDataSource } from '../data-sources/genreDataSource';
import { MovieDataSource } from '../data-sources/movieDataSource';

const genreDataSource = new GenreDataSource();
const movieDataSource = new MovieDataSource();

export const genreResolvers = {
  Query: {
    genres: async () => {
      return await genreDataSource.getAllGenres();
    },
    genre: async (_: any, { id }: { id: string }) => {
      return await genreDataSource.getGenreById(id);
    }
  },

  Mutation: {
    createGenre: async (_: any, { input }: { input: any }) => {
      return await genreDataSource.createGenre(input);
    }
  },

  Genre: {
    movies: async (parent: any) => {
      const allMovies = await movieDataSource.getAllMovies();
      return allMovies.filter((movie: any) => movie.genreIds.includes(parent.id));
    }
  }
};
