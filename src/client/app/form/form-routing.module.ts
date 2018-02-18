import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplateCompoent } from './template.compoent';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'template', component: TemplateCompoent },
      { path: 'reactive', component: TemplateCompoent }
    ])
  ],
  exports: [RouterModule]
})

export class FormRoutingModule { }
