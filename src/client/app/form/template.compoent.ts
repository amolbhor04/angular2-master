import { Component, OnInit } from '@angular/core';
///import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'user-app',
    templateUrl: 'template.component.html'
})

export class TemplateCompoent implements OnInit {
    public user: User; // our model

    constructor() {
        //console.log('hi this is constructor...');
    }

    ngOnInit() {
    this.user = {
        name: '',
        address: {
            street: '',
            postcode: '8000' // set default value to 8000
        }
    };
    }

    save(model: User, isValid: boolean) {
        console.log(model, isValid);
    }
}

export interface User {
    name: string; // required with minimum 5 characters
    address: {
        street?: string; // required
        postcode?: string;
    }
}
