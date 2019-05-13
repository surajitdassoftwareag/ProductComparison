import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rate;
  @Input() color;
  @ViewChild('rate1') rate1: ElementRef;
  @ViewChild('rate2') rate2: ElementRef;
  @ViewChild('rate3') rate3: ElementRef;
  @ViewChild('rate4') rate4: ElementRef;
  @ViewChild('rate5') rate5: ElementRef;
  constructor() { }

  ngOnInit() {
    try {
      if (this.rate === '0' || this.rate === '' || this.rate === undefined || isNaN(this.rate)) {
        this.rate = 0.0;
      } else if (parseFloat(this.rate) > 5) {
        this.rate = 5.0;
      } else {
        this.rate = parseFloat(this.rate);
      }
    } catch (e) {
      this.rate = 0.0;
    }

    let flag = false;
    for (let count = 5; count > 0; count--) {
      const ele = 'rate' + count;
      if (this.rate === count || flag) {
        this[ele].nativeElement.classList.add('full');
        flag = true;
      } else {
        if (this.rate < count && (count - this.rate) !== 0.5) {
          this[ele].nativeElement.classList.add('none');
        } else {
          this[ele].nativeElement.classList.add('half');
          flag = true;
        }
      }
    }

    // if (this.rate === 0.5) {
    //   this.rate1.nativeElement.classList.add('half');
    // }
    //   this.rate2.nativeElement.classList.add('none');
    //   this.rate3.nativeElement.classList.add('none');
    //   this.rate4.nativeElement.classList.add('none');
    //   this.rate5.nativeElement.classList.add('none');
    // }
  }
}
