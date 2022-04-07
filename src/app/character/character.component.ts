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
    this.listCharacter()
  }

  results:any;

  async listCharacter() {
    const api = await axios.create({
      baseURL: "https://rickandmortyapi.com/api/",
    });

   const data = await api.get("character/?page=2")
      .then((response) => response.data)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });

     this.results = data.results
     console.log(this.results)
  }

}
