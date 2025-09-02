import { actors, Actor } from '../data/actors';

export class ActorDataSource {
  async getAllActors(): Promise<Actor[]> {
    return actors;
  }

  async getActorById(id: string): Promise<Actor | null> {
    return actors.find(actor => actor.id === id) || null;
  }

  async createActor(actorData: Omit<Actor, 'id'>): Promise<Actor> {
    const newActor: Actor = {
      ...actorData,
      id: (actors.length + 1).toString()
    };
    actors.push(newActor);
    return newActor;
  }

  async updateActor(id: string, actorData: Partial<Omit<Actor, 'id'>>): Promise<Actor | null> {
    const index = actors.findIndex(actor => actor.id === id);
    if (index === -1) return null;
    
    actors[index] = { ...actors[index], ...actorData };
    return actors[index];
  }

  async deleteActor(id: string): Promise<boolean> {
    const index = actors.findIndex(actor => actor.id === id);
    if (index === -1) return false;
    
    actors.splice(index, 1);
    return true;
  }
}
