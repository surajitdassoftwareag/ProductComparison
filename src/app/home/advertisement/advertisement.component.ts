import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  @Input() advertisements;
  constructor() { }

  ngOnInit() {
  }

  openAdvertismentList(url) {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', url);
    anchor.target = '_blank';
    setTimeout(() => {
      anchor.click();
    }, 0);
  }
}
