import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>{{ base }}</h3>

    <button (click)="operacion(base)">+{{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="operacion(-base)">-{{ base }}</button>
  `,
})
export class ContadorComonent {
  title: string = 'Contador app';
  numero: number = 0;
  base: number = 5;

  operacion(valor: number) {
    this.numero += valor;
  }
}
