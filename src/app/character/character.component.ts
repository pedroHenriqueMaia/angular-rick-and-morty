import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  constructor(private requestService: RequestService) { }
  
  ngOnInit(): void {
    this.listCharacter(this.page)
  }

  results:any = [];
  page:number = 1 

  async listCharacter(pages:number) {
     let array: any[] = [];

     const data = this.requestService.RequestCharacteries(pages); 

     Promise.all([data]).then((values) => {
      array = values[0].results;
      array.map((i) => this.results.push(i));
      console.log(this.results)
    });

  }

  onScrolledDown(): void {
    this.page = this.page + 1;
    this.listCharacter(this.page)
  }

}
