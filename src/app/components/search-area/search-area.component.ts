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
      this.formatGenre();
      this.formatDescription();
    });
  }

  formatDate() {
    this.results.forEach((result) => {
      if (result.release_date == undefined || result.release_date == '') {
        result.release_date = 'Indisponível'
      }
      else {
        let split = result.release_date.split('-')
        result.release_date = split[2] + '/' + split[1] + '/' + split[0]
      }
    })
  }

  formatGenre() {
    this.results.forEach((result) => {
      if (result.genre_ids.length == 0) {
        result.genre = 'Indisponíveis'
      }
      else {
        result.genre_ids.forEach((genre) => {
          this.apiService.genreList.forEach((genreInList) => {
            if (genreInList.id == genre) {
              if (result.genre == undefined) {
                result.genre = genreInList.name;
              }
              else {
                result.genre = result.genre + ', ' + genreInList.name
              }
            }
          })
        })
      }
    })
  }

  formatDescription() {
    this.results.forEach((result) => {
      if (result.overview == '') {
        result.overview = 'Indisponível para esse filme.'
      }
    })
  }

}
