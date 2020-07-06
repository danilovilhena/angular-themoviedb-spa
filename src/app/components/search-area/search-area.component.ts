import { Component, OnInit } from '@angular/core';
import { APIServiceComponent } from '../api-service/api-service.component';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent {

  userInput = '';
  searchResultsObservable;
  results = [];
  hiddenSearchResult = false;

  constructor(private apiService: APIServiceComponent) { }

  onUpdateInput(event: any) {
    this.userInput = (<HTMLInputElement>event.target).value;
  }

  onMovieSearch() {
    this.getDataSearched(this.userInput);
    this.hiddenSearchResult = true;
  }

  getDataSearched(input) {
    this.apiService.searchFromAPI(input).subscribe((data) => {
      this.searchResultsObservable = data;
      this.results = this.searchResultsObservable.results;
      this.formatDate();
    });
  }

  formatDate() {
    this.results.forEach((element) => {
      let split = element.release_date.split('-')
      element.release_date = split[2] + '/' + split[1] + '/' + split[0]
    })
  }

}
