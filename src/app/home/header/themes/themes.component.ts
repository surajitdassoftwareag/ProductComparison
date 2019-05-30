import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit, AfterViewInit {
  colors: string[] = [];
  constructor() { }
  ngOnInit() {
    this.colors = ['Red', 'Blue', 'Green', 'Orange', 'Magenta', 'Blueviolet', 'Grey'];
  }

  ngAfterViewInit() {
    document.querySelectorAll('ul > li').forEach((ele) => {
      ele.addEventListener('click', (event) => {
        // tslint:disable-next-line: no-string-literal
        document.documentElement.style.setProperty('--light-orange', event['srcElement']['title']);
      });
    });
  }
}
