import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { CharacterDto } from '../service/dto/character.dto';
import { EpisodeDto } from '../service/dto/episode.dto';
import { LocationDto } from '../service/dto/location.dto';
import { RequestService } from '../service/request';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {
 
  characterId!: number;
  episodes!: EpisodeDto[];
  characteriesByLocation!: CharacterDto[];
  result!: CharacterDto;

  constructor( private route: ActivatedRoute, private requestService: RequestService ) {
    this.route.params.subscribe(params => this.characterId = params['id']);
  }

  ngOnInit(): void {
    this.listCharacter(this.characterId)
  }

  async listCharacter(id:number): Promise<void>{
    const dataCharacter: CharacterDto = await this.requestService.RequestCharacter(id)
    this.result = dataCharacter;

    const multiplesEpisodes:string[] = dataCharacter.episode;
    this.episodes = await this.requestService.RequestMultiplesEpisodes(multiplesEpisodes)

    const locationUrl = this.result.location.url
    const location:LocationDto = await this.requestService.RequestLocation(locationUrl)
    this.characteriesByLocation = await this.requestService.RequestMultiplesCharacteries(location.residents)   
  }

}
