import {createRando, type Rando} from "./rando.ts";
type Bob = { id: number, bobby: string, rando: Rando };

const bobs: Bob[] = []

export function getBob(id:number) {
  return bobs.find(bob => bob.id === id)
}

export function getBobs() {
  return [...bobs]
}

export function createBob() {
  const newBob = {id: Date.now(), bobby: 'ok', rando: createRando()};
  bobs.push(newBob)
  console.log(`created new Bob:`, newBob);
  return newBob
}
