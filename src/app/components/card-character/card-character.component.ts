import { Component, Input } from '@angular/core';
import { ICharacter } from 'src/app/service/models/character';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css']
})
export class CardCharacterComponent {
 @Input() result!: ICharacter

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
