import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Goku', power: 9000 },
    { name: 'Krillin', power: 3000 },
    { name: 'Trunks jr', power: 4000 },
  ];
}
