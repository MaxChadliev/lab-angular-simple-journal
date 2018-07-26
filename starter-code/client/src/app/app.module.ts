import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {EntryService} from './services/entry.service'
import { AppComponent } from './app.component';
import { EntryListComponent } from './entries/entry-list/entry-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
