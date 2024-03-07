import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Hola mundo, soy German';
  public counter: number = 10;

  operacion(valor: number) {
    this.counter = this.counter + valor;
  }
}
