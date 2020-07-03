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
  randomGenres = [];
  genreTitle = '';
  results = [];


  ngOnInit(): void {
    this.apiService.getGenreList();
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
    });
  }
}
