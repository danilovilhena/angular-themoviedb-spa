import { Component } from '@angular/core';

@Component({
  selector: 'app-acessibility-bar',
  templateUrl: './acessibility-bar.component.html',
  styleUrls: ['./acessibility-bar.component.css']
})

export class AcessibilityBarComponent {
  bodySize = 16;
  h3Size = 28;
  h4Size = 24;
  h5Size = 20;
  searchSize = 20;

  toggleHighContrast() {
    document.querySelector('html').classList.toggle('contrast')
  }

  increaseFontSize() {
    this.bodySize = this.bodySize + 1
    this.h3Size = this.h3Size + 1
    this.h4Size = this.h4Size + 1
    this.h5Size = this.h5Size + 1
    this.searchSize = this.searchSize + 1
    this.setCurrentFontSize()
  }

  returnToInitialFontSize() {
    this.bodySize = 16
    this.h3Size = 28
    this.h4Size = 24
    this.h5Size = 20
    this.searchSize = 20
    this.setCurrentFontSize()
  }

  decreaseFontSize() {
    this.bodySize = this.bodySize - 1
    this.h3Size = this.h3Size - 1
    this.h4Size = this.h4Size - 1
    this.h5Size = this.h5Size - 1
    this.searchSize = this.searchSize - 1
    this.setCurrentFontSize()
  }

  setCurrentFontSize() {
    document.querySelector('body').style.fontSize = this.bodySize + "px"

    document.querySelectorAll('h3').forEach((element) => {
      element.style.fontSize = this.h3Size + "px"
    })

    document.querySelectorAll('h5').forEach((element) => {
      element.style.fontSize = this.h5Size + "px"
    })

    document.querySelectorAll('h4').forEach((element) => {
      element.style.fontSize = this.h4Size + "px"
    })

    document.querySelectorAll('button').forEach((element) => {
      element.style.fontSize = this.searchSize + "px"
    })

    document.querySelectorAll('input').forEach((element) => {
      element.style.fontSize = this.searchSize + "px"
    })
  }
}
