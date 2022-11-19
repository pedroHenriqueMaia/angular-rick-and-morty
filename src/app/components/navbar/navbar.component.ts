import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() search:any = true;
  @Output() searchValue = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  searchInputChanges(param: any){
    this.searchValue.emit({'search': param})
  }

}
