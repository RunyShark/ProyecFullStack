import { NgModule } from '@angular/core';
import { ContadorComonent } from './contador/contador.component';

@NgModule({
  declarations: [ContadorComonent],
  exports: [ContadorComonent],
})
export class ContadorModule {}
