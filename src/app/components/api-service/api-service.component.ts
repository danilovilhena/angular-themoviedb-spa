import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class APIServiceComponent {
  constructor(private httpClient: HttpClient) { }

  searchResultObservable;
  searchResult;


  searchBase = 'https://api.themoviedb.org/3/search/movie?api_key=6f9325ff74905d1ba8d1ec414e8defe1&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&query=';


  searchForMovie(input) {
    console.log(this.searchBase + encodeURIComponent(input))
    this.httpClient.get(this.searchBase + encodeURIComponent(input)).subscribe((data) => {
      this.searchResultObservable = data;
      this.passSearchResults();
    })
  }

  passSearchResults() {
    this.searchResult = this.searchResultObservable.results;
  }

  showSearchResults() {
    this.searchResult.forEach((element, index) => {
      console.log(element);
    });
  }

  returnSearchResults() {
    return this.searchResult;
  }
}
