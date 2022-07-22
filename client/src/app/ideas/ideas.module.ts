import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaComponent } from './idea/idea.component';
import { IdeaCreateComponent } from './idea-create/idea-create.component';
import { IdeaupdateComponent } from './ideaupdate/ideaupdate.component';
import { IdeaDeleteComponent } from './idea-delete/idea-delete.component';

@NgModule({
  declarations: [
    IdeaComponent,
    IdeaCreateComponent,
    IdeaupdateComponent,
    IdeaDeleteComponent,
  ],
  exports: [
    IdeaComponent,
    IdeaCreateComponent,
    IdeaupdateComponent,
    IdeaDeleteComponent,
  ],
  imports: [CommonModule],
})
export class IdeasModule {}
