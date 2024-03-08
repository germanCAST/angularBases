import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Bienvenido a Angular :D</p>
    <p>Counter: {{ counter }}</p>

    @if (counter===0 && counter<1) {
    <button (click)="operacion(+1)">+1</button>
    } @if (counter>0){
    <button (click)="operacion(+1)">+1</button>
    <button (click)="operacion(-1)">-1</button>
    }
  `,
})
export class CounterComponent {
  public counter: number = 10;
  operacion(valor: number) {
    this.counter = this.counter + valor;
  }
}
