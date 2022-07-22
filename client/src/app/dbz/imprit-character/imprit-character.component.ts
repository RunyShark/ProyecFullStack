import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-import-character',
  templateUrl: './imprit-character.component.html',
})
export class ImportCharacterModule {
  @Input() character: Character[] = [];
}
