import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.css']
})
export class AssistanceComponent implements OnInit {
  discussions: any[];
  constructor() { }

  ngOnInit() {
    this.discussions = [
      {
        type: 'user',
        text: 'Testing text'
      },
      {
        type: 'assistance',
        text: 'Testing text'
      },
      {
        type: 'user',
        text: 'Testing text'
      },
      {
        type: 'assistance',
        text: 'Testing text'
      },
      {
        type: 'user',
        text: 'Testing text'
      }
    ];
  }

  openChat(event) {
    event.target.parentNode.classList.toggle('open');
  }
}
