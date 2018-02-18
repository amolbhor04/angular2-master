import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';

@Component({
    moduleId: module.id,
    selector: 'sd-student',
    templateUrl: 'student.component.html',
    styleUrls: ['student.component.css']
})
export class StudentComponent implements OnInit {
    //:TODO- variables AND declarations
    public name: string;
    producttype: any = '';
    public list: any = [];//= [1,2,'drfetrr','sfse','sfsef','sfsef'];


    //public _myform: FormGroup;
    private isValidOldPassword: boolean = false;

    constructor() {
        // this.name = 'Clark';
        // this.list = [1, 2, 'drfetrr', 'sfse', 'sfsef', 'sfsef'];
    }

    ngOnInit() {
        //:TODO
        this.name = 'cocacola';
        this.producttype = 'softdrink';

        // this._myform = this._formBuilder.group({
        //     'userName': ['', Validators.compose([Validators.required, this.noWhitespaceValidator.bind(this)])],
        //     'password': ['', Validators.required],
        //     'mobile': ['', Validators.compose([Validators.required, Validators.pattern(Pattern.MOBILE_PATTERN)]), this.checkMobileExist.bind(this)],
        // }
        //     // ,{
        //     //     validator: CustomValidation.matchPasswordValidator
        //     // }
        // );
    }

    // noWhitespaceValidator() {
    //     //TODO
    // }

    // checkMobileExist(c: FormControl) {

    //     if (!c.value) {
    //         return null;
    //     } else if (c.value && c.value.match(Pattern.MOBILE_PATTERN)) {
    //         return null;
    //     } else {
    //         return { invalidMobile: true };
    //     }
    // }

    // constraint(c: FormControl) {
    //     var newPassword = c.value;
    //     if (newPassword) {
    //         if (this._myform.get('oldPassword').value === newPassword) {
    //             c.setErrors({ sameAsOldPassword: true });
    //         } else {
    //             c.setErrors(null);
    //         }
    //     }
    // }

    // verifyOldPassword(c: FormControl) {
    //     var param = {
    //         password: c.value
    //     };
    //     // this.isValidOldPassword = false;
    //     // if (!param.password) {
    //     //     return new Promise((resolve) => {
    //     //         resolve(null);
    //     //     });
    //     // } else if (param.password) {
    //     //     //return this.verifyOldPasswordValidator(param.password, c);
    //     //     return null;
    //     // } else {
    //     //     return new Promise((resolve) => {
    //     //         resolve({ isValidOldPassword: false });
    //     //     });
    //     // }
    // }

    acceptoutput(event: any) {
        if (event) {
            console.log(event);
            this.list.push(event);
        }
    }

    logIn() {
        //TODO
    }
}


// export class Pattern {
//     public static readonly MOBILE_PATTERN = /^\d{8,10}$/;
//     public static readonly EMAIL_PATTERN = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/;
//     public static readonly PHONE_PATTERN = /^(?:(?:\+|0{0,2})?(\s*[\-]\s*)?|[0]?)?\d{8,15}$/;
// }