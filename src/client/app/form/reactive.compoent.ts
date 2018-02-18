import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'reative.component.html',
})

export class ReativeComponent implements OnInit {

    public myForm: FormGroup; // our model driven form
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { 

        // (<FormControl>this.myForm.controls['name'])
        // .setValue('John', { onlySelf: true });
    }

    ngOnInit() {

        this.myForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            address: this._fb.group({
                street: ['', <any>Validators.required],
                postcode: ['']
            })
        });
    }

    save(model: User, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);
    }

    subcribeToFormChanges() {
        // initialize stream
        const myFormValueChanges$ = this.myForm.valueChanges;
    
        // subscribe to the stream 
        myFormValueChanges$.subscribe(x => this.events
            .push({ event: ‘STATUS CHANGED’, object: x }));
    }
}

export interface User {
    name: string; // required with minimum 5 chracters
    address?: {
        street?: string; // required
        postcode?: string;
    }
}
