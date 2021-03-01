import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname = "";
  myclass = "sample-class-name";
  fprice = 0;
  fquant = 0;

  product: any = [
  ];

  constructor() {
    let a = localStorage.getItem('product');
    if (a) {
      this.product = JSON.parse(a);
    }
  }

  addProduct() {
    let f = {
      name: this.fname,
      price: this.fprice,
      quant: this.fquant
    };
    this.product.push(f);
    localStorage.setItem('product', JSON.stringify(this.product));
  }
 
}
