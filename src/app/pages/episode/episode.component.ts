import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/service/models/character';
import { IEpisode } from 'src/app/service/models/episode';
import { RequestService } from '../../service/request';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  episodeId!: number;
  result!: IEpisode;
  characteries!: ICharacter[];

  constructor(private route: ActivatedRoute, private requestService: RequestService) {
    this.route.params.subscribe(params => this.episodeId = params['id']);
  }

  ngOnInit(): void {
    this.listEpisode(this.episodeId)
  }

  async listEpisode(id:number): Promise<void>{
    this.result = await this.requestService.RequestEpisode(id);
    this.characteries = await this.requestService.RequestMultiplesCharacteries(this.result.characters);
  }

}
