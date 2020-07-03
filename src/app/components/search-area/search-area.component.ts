import { Component, OnInit } from '@angular/core';
import { APIServiceComponent } from '../api-service/api-service.component';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent {
  userInput = '';
  results = [];
  hiddenSearchError = false;
  hiddenSearchResult = false;
  communicationText = 'Carregando resultados...'

  constructor(private apiService: APIServiceComponent) { }

  onUpdateInput(event: any) {
    this.userInput = (<HTMLInputElement>event.target).value;
  }

  onMovieSearch() {
    this.apiService.searchForMovie(this.userInput);
    setTimeout(() => {
      this.hiddenSearchResult = true;
      this.results = this.apiService.returnSearchResults();
      this.formatDate();
    }, 2000)
  }

  formatDate() {
    this.results.forEach((element) => {
      let split = element.release_date.split('-')
      element.release_date = split[2] + '/' + split[1] + '/' + split[0]
    })
  }

}
