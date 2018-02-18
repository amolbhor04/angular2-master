import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'sdt-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    //:TODO- variables AND declarations
    @Input() public name: string;// = 'Jack';
    dataList : any = [];
    @Input() public productType : any; 
    @Output() public click : EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        //this.name = 'Clark';
    }

    ngOnInit() {
        //:TODO
        //this.name = 'John';
    }

    savedata(event: any) {
        console.log('successful!!!');
        this.dataList.push(this.name);

        this.click.emit(this.dataList);
    }
}
