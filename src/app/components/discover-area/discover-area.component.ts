import { Component, OnInit } from '@angular/core';
import { APIServiceComponent } from '../api-service/api-service.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discover-area',
  templateUrl: './discover-area.component.html',
  styleUrls: ['./discover-area.component.css']
})
export class DiscoverAreaComponent implements OnInit {

  constructor(private apiService: APIServiceComponent, private httpClient: HttpClient) { }

  discoverResultObservable;
  randomGenre;
  genreTitle = '';
  results = [];

  ngOnInit(): void {
    this.apiService.getGenreListFromAPI();
    setTimeout(() => {
      this.randomGenre = this.apiService.selectRandomGenre();
      this.genreTitle = this.randomGenre.name;
      this.getDataDiscovered(this.randomGenre.id)
    }, 2000)
  }

  getDataDiscovered(genre) {
    this.apiService.discoverFromAPI(genre).subscribe((data) => {
      this.discoverResultObservable = data;
      this.results = this.discoverResultObservable.results;
      this.formatDate();
      this.formatGenre();
      this.formatDescription();
    });
  }

  formatDate() {
    this.results.forEach((result) => {
      if (result.release_date == undefined || result.release_date == '') {
        result.release_date = 'indisponível'
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
