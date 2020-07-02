import { Component, OnInit } from '@angular/core';
import { APIServiceComponent } from '../api-service/api-service.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  constructor(private apiService: APIServiceComponent) { }

  ngOnInit() {

  }
}
