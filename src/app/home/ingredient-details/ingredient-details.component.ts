import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IngredientDetailsComponent implements OnInit {
  ingredients: any;
  constructor(
    public dialogRef: MatDialogRef<IngredientDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
  }

  ngOnInit() {
    this.ingredients = [
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
  }

  close() {
    this.dialogRef.close();
  }
}
