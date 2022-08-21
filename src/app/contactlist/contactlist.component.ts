import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contact-list',
  //   inputs: ['contacts'], //you can you this if you don't want to use imports
  templateUrl: './contactlist.component.html',
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Array<{ name: string }> | null = null;

  //execute code before component mounts
  ngOnInit() {
    console.log(this.contacts);
  }
}
