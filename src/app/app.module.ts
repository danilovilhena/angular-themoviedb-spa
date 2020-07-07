import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchAreaComponent } from './components/search-area/search-area.component';
import { DiscoverAreaComponent } from './components/discover-area/discover-area.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieThumbComponent } from './components/movie-thumb/movie-thumb.component';
import { MovieRowComponent } from './components/movie-row/movie-row.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAreaComponent,
    DiscoverAreaComponent,
    MovieItemComponent,
    MovieThumbComponent,
    MovieRowComponent
  ],


  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
