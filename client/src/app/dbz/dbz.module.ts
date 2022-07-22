import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ImportCharacterModule } from './imprit-character/imprit-character.component';
import { FormCharacterModule } from './form-character/form-character.component';

@NgModule({
  declarations: [MainPageComponent, ImportCharacterModule, FormCharacterModule],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
