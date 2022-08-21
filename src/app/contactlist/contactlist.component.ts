import { Component } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contactlist.component.html',
})
export class ContactListComponent {
  people = [{ name: 'Tyler' }, { name: 'karen' }, { name: 'Chidi' }];
}
