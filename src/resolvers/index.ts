import { movieResolvers } from './movieResolvers';
import { actorResolvers } from './actorResolvers';
import { genreResolvers } from './genreResolvers';

export const resolvers = {
  Query: {
    ...movieResolvers.Query,
    ...actorResolvers.Query,
    ...genreResolvers.Query
  },
  Mutation: {
    ...movieResolvers.Mutation,
    ...actorResolvers.Mutation,
    ...genreResolvers.Mutation
  },
  Movie: movieResolvers.Movie,
  Actor: actorResolvers.Actor,
  Genre: genreResolvers.Genre
};
