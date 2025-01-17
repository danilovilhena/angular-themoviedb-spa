import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent {
  constructor() { }

  @Input() genreTitle;
  @Input() results;
}
