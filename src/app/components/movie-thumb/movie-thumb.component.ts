import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-thumb',
  templateUrl: './movie-thumb.component.html',
  styleUrls: ['./movie-thumb.component.css']
})
export class MovieThumbComponent {
  constructor() { }

  @Input() result;

}
