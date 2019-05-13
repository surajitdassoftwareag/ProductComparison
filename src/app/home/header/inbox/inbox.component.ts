import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleInboxSubMenu(event) {
    event.currentTarget.classList.toggle('open');
  }
}
