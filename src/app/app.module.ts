import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchAreaComponent } from './components/search-area/search-area.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAreaComponent
  ],


  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
