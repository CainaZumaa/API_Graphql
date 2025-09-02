import { ActorDataSource } from '../data-sources/actorDataSource';
import { MovieDataSource } from '../data-sources/movieDataSource';

const actorDataSource = new ActorDataSource();
const movieDataSource = new MovieDataSource();

export const actorResolvers = {
  Query: {
    actors: async () => {
      return await actorDataSource.getAllActors();
    },
    actor: async (_: any, { id }: { id: string }) => {
      return await actorDataSource.getActorById(id);
    }
  },

  Mutation: {
    createActor: async (_: any, { input }: { input: any }) => {
      return await actorDataSource.createActor(input);
    },
    updateActor: async (_: any, { id, input }: { id: string; input: any }) => {
      return await actorDataSource.updateActor(id, input);
    },
    deleteActor: async (_: any, { id }: { id: string }) => {
      return await actorDataSource.deleteActor(id);
    }
  },

  Actor: {
    movies: async (parent: any) => {
      const allMovies = await movieDataSource.getAllMovies();
      return allMovies.filter((movie: any) => movie.actorIds.includes(parent.id));
    }
  }
};
