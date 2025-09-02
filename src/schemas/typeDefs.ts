import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    year: Int!
    description: String
    actors: [Actor!]!
    genres: [Genre!]!
  }

  type Actor {
    id: ID!
    name: String!
    birthDate: String!
    nationality: String
    movies: [Movie!]!
  }

  type Genre {
    id: ID!
    name: String!
    description: String
    movies: [Movie!]!
  }

  input MovieInput {
    title: String!
    year: Int!
    description: String
    actorIds: [ID!]!
    genreIds: [ID!]!
  }

  input ActorInput {
    name: String!
    birthDate: String!
    nationality: String
  }

  input GenreInput {
    name: String!
    description: String
  }

  type Query {
    movies: [Movie!]!
    movie(id: ID!): Movie
    actors: [Actor!]!
    actor(id: ID!): Actor
    genres: [Genre!]!
    genre(id: ID!): Genre
  }

  type Mutation {
    createMovie(input: MovieInput!): Movie!
    updateMovie(id: ID!, input: MovieInput!): Movie
    deleteMovie(id: ID!): Boolean!
    addActorsToMovie(movieId: ID!, actorIds: [ID!]!): Movie
    removeActorFromMovie(movieId: ID!, actorId: ID!): Movie
    createActor(input: ActorInput!): Actor!
    updateActor(id: ID!, input: ActorInput!): Actor
    deleteActor(id: ID!): Boolean!
    createGenre(input: GenreInput!): Genre!
    addGenresToMovie(movieId: ID!, genreIds: [ID!]!): Movie
  }
`;
