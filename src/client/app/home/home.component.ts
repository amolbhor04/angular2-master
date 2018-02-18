import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { LoginComponent } from '../student/login.component';
//import { setInterval } from 'timers';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName = '';
  errorMessage: string;
  names: any[] = ['a', 'b', 'c', 'd', 'c', 's', 'de'];
  producttype: any = '';
  city: string;
  isvisible: boolean = false;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {

    this.newName = 'drgdgg';
    this.city = 'Delhi';
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
    this.producttype = 'colddrink';

    setInterval(() => {
      if (this.newName == '1')
        this.names = [1, 2, 3, 4, 5, 6, 78];
      else
        this.names = ['a', 'b', 'c', 'd', 'c', 's', 'de'];
    }, 1000 * 5);
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
      names => {
        //this.names = names
      },
      error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

  show(event: any) {
    this.isvisible = true;
  }

}
