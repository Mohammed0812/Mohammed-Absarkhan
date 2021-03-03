import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
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
  delete(i: any) {
    this.product.splice(i, 1);
  }

ngOnInit(): void {
}

}
