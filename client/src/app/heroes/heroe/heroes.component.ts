import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  name: string = 'Ironman';
  age: number = 23;
  superPower: string = 'Genio';

  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }

  greeting(): string {
    return ` Hola ${this.name} `;
  }
  changeName(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 19;
  }

  changePower(): void {
    this.superPower = 'Hombre Araña';
  }
}
