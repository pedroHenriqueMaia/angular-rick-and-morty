import { ICharacter } from "src/app/service/models/character";
import { IEpisode } from "src/app/service/models/episode";
import { ILocation } from "src/app/service/models/location";

export const MOCK_CHARACTER: ICharacter = {
  id: 1,
  name: 'string',
  status: 'string',
  species: 'string',
  type: 'string',
  gender: 'string',
  origin: 'any',
  location: 'any',
  image: 'string',
  episode: ['string'],
  url: 'string',
  created: 'string',
}

export const MOCK_EPISODE: IEpisode = {
  id: 2,
  name: 'string',
  air_date: 'string',
  episode: 'string',
  characters: ['string'],
  url: 'string',
  created: 'string',
  characteries: [MOCK_CHARACTER]
}

export const MOCK_LOCATION: ILocation = {
  id: 2,
  name: 'string',
  dimension:'string',
  residents:['string'],
  type:'string',
  url: 'string',
  created: 'string',
}