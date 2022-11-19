import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request';
;

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  constructor(
    @Inject(DOCUMENT) private document:Document,
    private requestService: RequestService
    ) { }
    
  showButton = false;
  results:any = [];
  page:number = 1 
  searchCharatcer!: string;
  
  ngOnInit(): void {
    this.listCharacter(this.page)
  }

  searchValue(e:any): void{
    this.results = []
    this.searchCharatcer = e.search
    this.listCharacter(this.page, this.searchCharatcer)
  }


    listCharacter(pages:number, character?:string): void {
     let array: any[] = [];
     let data;

     if(character != null){
      data = this.requestService.RequestCharacteries(pages, character); 
     }else{
      data = this.requestService.RequestCharacteries(pages); 
    }


     Promise.all([data]).then((values) => {
      array = values[0].results;
      array.map((i) => this.results.push(i));
    });

  }

  onScrolledDown(): void {
    this.page = this.page + 1;
    if(this.searchCharatcer != null){
      this.listCharacter(this.page, this.searchCharatcer)
    }else{
      this.listCharacter(this.page)
    }
  }

  @HostListener('window:scroll')
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > 500;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

}
