import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SearchBarComponent } from './home/header/search-bar/search-bar.component';
import { InboxComponent } from './home/header/inbox/inbox.component';
import { RatingComponent } from './rating/rating.component';
import { IngredientDetailsComponent } from './home/ingredient-details/ingredient-details.component';
import { MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchBarComponent,
    InboxComponent,
    RatingComponent,
    IngredientDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    IngredientDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

