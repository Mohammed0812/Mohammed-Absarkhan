import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'hi';
 name = 'Apple';
 price = 100;
 add(): any{
   this.name = 'Apple';
   this.price = 100;
 }
}
