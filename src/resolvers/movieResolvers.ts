import { MovieDataSource } from '../data-sources/movieDataSource';
import { ActorDataSource } from '../data-sources/actorDataSource';
import { GenreDataSource } from '../data-sources/genreDataSource';

const movieDataSource = new MovieDataSource();
const actorDataSource = new ActorDataSource();
const genreDataSource = new GenreDataSource();

export const movieResolvers = {
  Query: {
    movies: async () => {
      return await movieDataSource.getAllMovies();
    },
    movie: async (_: any, { id }: { id: string }) => {
      return await movieDataSource.getMovieById(id);
    }
  },

  Mutation: {
    createMovie: async (_: any, { input }: { input: any }) => {
      return await movieDataSource.createMovie(input);
    },
    updateMovie: async (_: any, { id, input }: { id: string; input: any }) => {
      return await movieDataSource.updateMovie(id, input);
    },
    deleteMovie: async (_: any, { id }: { id: string }) => {
      return await movieDataSource.deleteMovie(id);
    },
    addActorsToMovie: async (_: any, { movieId, actorIds }: { movieId: string; actorIds: string[] }) => {
      return await movieDataSource.addActorsToMovie(movieId, actorIds);
    },
    removeActorFromMovie: async (_: any, { movieId, actorId }: { movieId: string; actorId: string }) => {
      return await movieDataSource.removeActorFromMovie(movieId, actorId);
    },
    addGenresToMovie: async (_: any, { movieId, genreIds }: { movieId: string; genreIds: string[] }) => {
      return await movieDataSource.addGenresToMovie(movieId, genreIds);
    }
  },

  Movie: {
    actors: async (parent: any) => {
      const actorPromises = parent.actorIds.map((id: string) => actorDataSource.getActorById(id));
      return await Promise.all(actorPromises);
    },
    genres: async (parent: any) => {
      const genrePromises = parent.genreIds.map((id: string) => genreDataSource.getGenreById(id));
      return await Promise.all(genrePromises);
    }
  }
};
