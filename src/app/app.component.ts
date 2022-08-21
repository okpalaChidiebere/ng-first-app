import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-app';
  contacts1 = [{ name: 'Tyler' }, { name: 'karen' }, { name: 'Chidi' }];
  contacts2 = [{ name: 'Onyi' }, { name: 'Ifeanyi' }];
  contacts3 = [{ name: 'Aluka' }, { name: 'Ifunanya' }, { name: 'Chiamaka' }];
}
