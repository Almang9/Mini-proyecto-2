export interface Character {
    id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: Origin,
  location: CharacterLocation,
  image: string,
  episode: Array<string>,
  url: string,
  created: string,
}
interface CharacterLocation {
  name: string,
  url: string,
}
interface Origin{
  name: string,
  url: string,
}
