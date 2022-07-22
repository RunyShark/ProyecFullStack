import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './';

@NgModule({
  declarations: [MainPageModule],
  exports: [MainPageModule],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
