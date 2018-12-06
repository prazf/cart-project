import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductItem } from './product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productItem: ProductItem[] = [
    new ProductItem(1, 'Cupboard', 750, 'assets/cupboard.jpg','furniture'),
    new ProductItem(2,'tablet', 133000, 'assets/tablet.jpg','gadgets'),
    new ProductItem(3,'Mixer', 102000, 'assets/mixer.jpg','home'),
    new ProductItem(4,'Saree', 35000, 'assets/saree.jpg','clothes'),
  ]

  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number,
    productCategory: string
  }>();

  constructor() { }

  ngOnInit() {
  }

  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.productItem.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
        productId: this.productItem[index].id,
        productName: this.productItem[index].name,
        productPrice: this.productItem[index].price,
        productCategory: this.productItem[index].category
      });
}


}
