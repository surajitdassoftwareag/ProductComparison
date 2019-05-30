import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.advertisements = [
      {
        name: 'Advertisement 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      },
      {
        name: 'Advertisement 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819t4Tg5gIL._SY355_.jpg'
      }
    ];

    this.productList = [
      {
        caption: 'Name',
        title: 'Colgate'
      },
      {
        caption: 'Name',
        title: 'Colgate'
      },
      {
        caption: 'Name',
        title: 'Colgate'
      },
      {
        caption: 'Name',
        title: 'Colgate'
      },
      {
        caption: 'Name',
        title: 'Colgate'
      }
    ];

    this.suggestionList = this.productList;
  }

  toggleFrontRear(event) {
    event.currentTarget.classList.toggle('open');
  }

  openIngredientBox(data) {
    const dialogRef = this.dialog.open(IngredientDetailsComponent, {
      width: '30vw',
      data,
      disableClose: true,
      panelClass: 'ingredientDetailsComponentClass'
      }
    );
  }
}
