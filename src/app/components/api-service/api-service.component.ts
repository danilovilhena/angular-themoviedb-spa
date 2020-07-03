import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class APIServiceComponent {
  constructor(private httpClient: HttpClient) { }

  genreList;
  randomGenres = [];

  searchFromAPI(input) {
    return this.httpClient.get('https://api.themoviedb.org/3/search/movie?api_key=6f9325ff74905d1ba8d1ec414e8defe1&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&vote_average.gte=5page=1&query=' + encodeURIComponent(input))
  }

  discoverFromAPI(genre) {
    return this.httpClient.get('https://api.themoviedb.org/3/discover/movie?with_genres=' + encodeURIComponent(genre) + '&api_key=6f9325ff74905d1ba8d1ec414e8defe1&language=pt-BR&sort_by=popularity.desc&vote_average.gte=5&include_adult=false&include_video=false&page=' + (Math.floor(Math.random() * 25)))
  }

  getGenreList() {
    this.httpClient.get("https://api.themoviedb.org/3/genre/movie/list?api_key=6f9325ff74905d1ba8d1ec414e8defe1&language=pt-BR").subscribe((data) => {
      this.genreList = data;
      this.genreList = this.genreList.genres;
    })
  }

  selectRandomGenre() {
    let randomGenre = this.genreList[Math.floor(Math.random() * this.genreList.length)];
    if (!this.randomGenres.includes(randomGenre)) {
      this.randomGenres.push(randomGenre);
      return randomGenre;
    }
  }

}
