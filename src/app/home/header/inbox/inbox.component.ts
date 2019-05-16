import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  favProducts: any;
  products: any;
  constructor(public utilityService: UtilityService) { }

  ngOnInit() {
    this.favProducts = [
      {
        firstName: 'Surajit',
        lastName: 'Das',
        name: 'Test 1',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        rating: '2.5',
        color: this.utilityService.getRandomColor()
      },
      {
        firstName: 'Surajit',
        lastName: 'Das',
        name: 'Test 1',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        rating: '4.5',
        color: this.utilityService.getRandomColor()
      }
    ];

    this.products = [
      {
        firstName: 'Surajit',
        lastName: 'Das',
        name: 'Test 1',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        rating: '1.5',
        color: this.utilityService.getRandomColor()
      },
      {
        firstName: 'Surajit',
        lastName: 'Das',
        name: 'Test 1',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        rating: '3.5',
        color: this.utilityService.getRandomColor()
      },
      {
        firstName: 'Surajit',
        lastName: 'Das',
        name: 'Test 1',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        rating: '2.5',
        color: this.utilityService.getRandomColor()
      }
    ];
  }

  toggleInboxSubMenu(event) {
    event.currentTarget.classList.toggle('open');
  }
}
