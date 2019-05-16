import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  percentage = 0;
  advertisements: any;
  productList: any;
  suggestionList: any;
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
    this.advertisements = [
      {
        name: 'Advertisement 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      },
      {
        name: 'Advertisement 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: '',
        url: 'http://test'
      }
    ];

    this.productList = [
      {},{},{},{},{},{},{},{},{},{},{},{},{},
    ];

    this.suggestionList = this.productList;
  }

  openAdvertismentList(url) {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', url);
    anchor.target = '_blank';
    setTimeout(() => {
      anchor.click();
    }, 0);
  }

  toggleFrontRear(event) {
    event.currentTarget.classList.toggle('open');
  }
}
