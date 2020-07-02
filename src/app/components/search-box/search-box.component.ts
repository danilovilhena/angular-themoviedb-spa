import { Component, OnInit } from '@angular/core';
import { APIServiceComponent } from '../api-service/api-service.component';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
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
    }, 2000)
  }

}
