import { Component, OnInit } from '@angular/core';
///import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'user-app',
    templateUrl: 'user.component.html',
    // template: `<h3>hello user {{name}}
    // <br>
    // <div>
    //     <input type="text" [(ngModel)]="name" name="username1" maxlength="15" required>
    //     <br>
    //     <input type="password" [(ngModel)]="name" name="password" maxlength="15">
    //     <br>
    //     <button type="submit" (click)="createUser($event)">Create User</button>
    // </div>

    // <div>{{name}}</div>
    // <div>{{password}}</div>
    // <div>{{email}}</div>
    // <div>{{address | json}}</div>
    // <br>
    // {{lable}}
    // </h3>`
})

export class UserCompoent implements OnInit {
    name: string;
    password: string;
    email: string;
    address: Address;

    lable: string;

    constructor() {
        //console.log('hi this is constructor...');
    }

    ngOnInit() {
        //console.log('hi this is ngoninit...');

        //this.name = 'neil amstrong';
        this.password = '';
        this.email = 'neil@gmail.com';
        this.address = { street: 'sdvsds', city: 'fgdd0', state: 'sfsf' };
    }

    createUser(event: any) {

        this.lable = 'name is updated to ' + this.name;
    }

    onchange(event: any) {
        var x = event;
    }
}

export interface Address {
    street: string,
    city: string,
    state: string
}