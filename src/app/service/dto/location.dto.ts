import { CharacterDto } from "./character.dto";

export class LocationDto {
  id!: number;
  name!: string;
  type!: string;
  dimension!: string;
  residents!: string[];
  url!: string;
  created!: string;
}