import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public heroName: string = 'Batman';

  public heroAge: number = 33;

  get heroDesc(): string {
    return this.heroName + ' - ' + this.heroAge;
  }

  heroCapit() {
    return this.heroName.toUpperCase();
  }

  changeName(): void {
    this.heroName = 'Superman';
  }

  changeAge(): void {
    this.heroAge = 99;
  }
}
