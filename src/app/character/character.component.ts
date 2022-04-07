import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    this.listCharacter(this.page)
  }

  results:any = [];
  page:number = 1 

  async listCharacter(pages:number) {
    let array: any[] = [];
    const api = await axios.create({
      baseURL: "https://rickandmortyapi.com/api/",
    });

   const data = await api.get(`character/?page=${pages}`)
      .then((response) => response.data)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });

     Promise.all([data]).then((values) => {
      // do stuff with values here
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
