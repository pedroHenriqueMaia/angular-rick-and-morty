import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/service/models/character';
import { IEpisode } from 'src/app/service/models/episode';
import { RequestService } from 'src/app/service/request';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {
 
  characterId!: number;
  episodes!: IEpisode[];
  characteriesByLocation!: ICharacter[];
  result!: ICharacter;

  constructor( private route: ActivatedRoute, private requestService: RequestService ) {
    this.route.params.subscribe(params => this.characterId = params['id']);
  }

  ngOnInit(): void {
    this.listCharacter(this.characterId)
  }

  async listCharacter(id:number): Promise<void>{
    this.result = await this.requestService.RequestCharacter(id);
    this.episodes = await this.requestService.RequestMultiplesEpisodes(this.result.episode);
    const location = await this.requestService.RequestLocation(this.result.location.url);
    this.characteriesByLocation = await this.requestService.RequestMultiplesCharacteries(location.residents);
  }

  verifyStatus(status: string) {
    switch(status) {
      case 'Alive':
        return {'background-color': '#0bd50b'};
      case 'Dead':
        return {'background-color': '#d10000'};
      case 'Unknow':
        return {'background-color': '#dcdc00'};
      default: return {'background-color': '#dcdc00'};
    }
   }

}
