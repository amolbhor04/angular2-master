import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})

export class AboutComponent {
  public name: string;
  list = [1, 2, 3, 4, 5, 6, 'drtgdgg'];
  isSelected: boolean;
  city: string;

  constructor() {
    //debugger;
    this.name = 'Hello World !!';
    this.city = 'delhi';
  }

  changeValue(event: any) {

    this.isSelected = true;
  }
}
