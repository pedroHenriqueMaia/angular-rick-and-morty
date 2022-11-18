import axios from 'axios';
import { ICharacter } from './models/character';
import { IEpisode } from './models/episode';
import { ILocation } from './models/location';

export class RequestService {
  characterId!: number;
  result: any;
  api = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
  });

  async RequestMultiplesCharacteries(urls: string[]): Promise<ICharacter[]>{
    let data: Promise<ICharacter[]>
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
      return await Promise.all([result[0]]).then((res) => res[0])
    }

  async RequestMultiplesEpisodes(urls: string[]): Promise<IEpisode[]>{
    let data: Promise<IEpisode[]>
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
      return await Promise.all([result[0]]).then((res) => res[0])
      
  }

  async RequestCharacter(id: number): Promise<ICharacter>{
    return await this.api.get(`character/${id}`)
      .then((response) => response.data)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  async RequestCharacteries(pages?:number, character?:string): Promise<any>{
    let data!: Promise<any>;
    if(pages != null){
      if(character != null){
        data = await this.api.get(`character/?page=${pages}&name=${character}`)
        .then((response) => response.data)
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
       });
      }else{
        data = await this.api.get(`character`)
        .then((response) => response.data)
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
       });
      }
    }

    return data;
  }

  async RequestEpisode(id: number): Promise<IEpisode>{
    return await this.api.get(`episode/${id}`)
      .then((response) => response.data)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  async RequestLocation(url: string): Promise<ILocation>{
    const api = axios.create({
      baseURL: url,
    });

      return await api.get(`/`)
        .then((response) => response.data)
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
  }
}
