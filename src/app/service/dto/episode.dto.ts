import { CharacterDto } from "./character.dto";

export class EpisodeDto {
  id!: number;
  name!: string;
  air_date!: string;
  episode!: string;
  characters!: string[];
  url!: string;
  created!: string;
  characteries!: CharacterDto[]
}