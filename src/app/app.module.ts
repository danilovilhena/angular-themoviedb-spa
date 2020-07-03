import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchAreaComponent } from './components/search-area/search-area.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { DiscoverAreaComponent } from './components/discover-area/discover-area.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAreaComponent,
    SearchItemComponent,
    DiscoverAreaComponent
  ],


  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
