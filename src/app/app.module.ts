import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MindmapsComponent } from './mindmaps/mindmaps.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BookSectionComponent } from './book-section/book-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MindmapsComponent,
    NavigationComponent,
    BookSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
