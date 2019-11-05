import { Component, OnInit } from '@angular/core';
import { Product } from '../product.service';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Products[];

  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(response => this.products = response)
  }

}
