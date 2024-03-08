import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroList: string[] = ['Batman', 'Superman', 'Spiderman', 'Ironman'];
  public lastHero?: string;

  removeLastH() {
    this.lastHero = this.heroList.pop();
  }
}
