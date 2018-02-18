import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TemplateCompoent } from './template.compoent';

import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [FormRoutingModule, SharedModule],
    declarations: [TemplateCompoent],
    exports: [TemplateCompoent]
})

export class FormModule {

}
