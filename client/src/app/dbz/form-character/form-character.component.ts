import { Component, Input } from '@angular/core';
interface Character {
  name: string;
  power: number;
}
@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
})
export class FormCharacterModule {
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };
}
