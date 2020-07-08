import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessibility-bar',
  templateUrl: './acessibility-bar.component.html',
  styleUrls: ['./acessibility-bar.component.css']
})
export class AcessibilityBarComponent {
  constructor() { }

  toggleHighContrast() {
    document.querySelector('html').classList.toggle('contrast')
  }
}
