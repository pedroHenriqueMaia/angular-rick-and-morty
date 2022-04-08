import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDto } from '../service/dto/character.dto';
import { EpisodeDto } from '../service/dto/episode.dto';
import { RequestService } from '../service/request';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  episodeId!: number;
  result!: EpisodeDto;
  characteries!: CharacterDto[];

  constructor(private route: ActivatedRoute, private requestService: RequestService) {
    this.route.params.subscribe(params => this.episodeId = params['id']);
  }

  ngOnInit(): void {
    this.listEpisode(this.episodeId)
  }

  async listEpisode(id:number): Promise<void>{

    const dataEpisode: EpisodeDto = await this.requestService.RequestEpisode(id)
    this.result = dataEpisode;

    const multiplesCharacter:string[] = this.result.characters;
    this.characteries = await this.requestService.RequestMultiplesCharacteries(multiplesCharacter)
  }

}
