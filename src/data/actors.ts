export interface Actor {
  id: string;
  name: string;
  birthDate: string;
  nationality?: string;
}

export const actors: Actor[] = [
  {
    id: "1",
    name: "Keanu Reeves",
    birthDate: "1964-09-02",
    nationality: "Canadian"
  },
  {
    id: "2",
    name: "Leonardo DiCaprio",
    birthDate: "1974-11-11",
    nationality: "American"
  },
  {
    id: "3",
    name: "Ellen Page",
    birthDate: "1987-02-21",
    nationality: "Canadian"
  },
  {
    id: "4",
    name: "Heath Ledger",
    birthDate: "1979-04-04",
    nationality: "Australian"
  }
];
