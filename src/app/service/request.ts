import axios from 'axios';
import { CharacterDto } from './dto/character.dto';
import { EpisodeDto } from './dto/episode.dto';
import { LocationDto } from './dto/location.dto';

export class RequestService {
 
  characterId: number | any;
  result: any;

  constructor() {
  }

  async RequestMultiplesCharacteries(urls: string[]): Promise<CharacterDto[]>{
    let data: Promise<CharacterDto[]>
    let array:any[] = []
    let paramLength = urls.length;
    
    let result = urls.map(async (i) => {
      const api = axios.create({
        baseURL: i
      });
      if(paramLength != 0){
        paramLength = paramLength - 1;
        data = await api.get(`/`)
          .then((response) => response.data)
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });

        array.push(data)
      }
      
      return array;
      })
      let promiseResolved: CharacterDto[]
      return promiseResolved = await Promise.all([result[0]]).then((res) => res[0])
    }

  async RequestMultiplesEpisodes(urls: string[]): Promise<EpisodeDto[]>{
    
    let data: Promise<EpisodeDto[]>
    let array:any[] = []
    let paramLength = urls.length;
    
    let result = urls.map(async (i) => {
      const api = axios.create({
        baseURL: i
      });
      if(paramLength != 0){
        paramLength = paramLength - 1;
        data = await api.get(`/`)
          .then((response) => response.data)
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        
        array.push(data)
      }
      
      return array;
      })
      let promiseResolved: EpisodeDto[]
      return promiseResolved = await Promise.all([result[0]]).then((res) => res[0])
      
  }

  async RequestCharacter(id: number): Promise<CharacterDto>{
    const api = axios.create({
      baseURL: "https://rickandmortyapi.com/api/",
    });

      const data:CharacterDto = await api.get(`character/${id}`)
        .then((response) => response.data)
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

      return data;
  }

  async RequestLocation(url: string): Promise<LocationDto>{
    const api = axios.create({
      baseURL: url,
    });

      const data:LocationDto = await api.get(`/`)
        .then((response) => response.data)
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

      return data;
  }


}
