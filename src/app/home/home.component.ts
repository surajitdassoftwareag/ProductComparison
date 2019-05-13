import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  percentage = 0;
  @HostListener('window:scroll', [])
  setProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    // tslint:disable-next-line: no-string-literal
    this.percentage = ((document.documentElement.scrollTop
      / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100);
    progressBar['style'].setProperty('--scroll', this.percentage + '%' );
  }

  constructor() { }

  ngOnInit() {
  }

}
