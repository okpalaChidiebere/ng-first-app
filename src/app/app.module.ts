import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contactlist/contactlist.component';

/** We tell Angular what pieces belongs to our app here */
@NgModule({
  declarations: [AppComponent, ContactListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
