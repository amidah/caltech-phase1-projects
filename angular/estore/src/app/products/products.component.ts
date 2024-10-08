import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = []; // here its an array of objects of type product

  showProducts = true;

  categories = [ // here its an array of objects only
    {title: "Running", total: 9000},
    {title: "Walking", total: 5000},
    {title: "Trekking", total: 6000}
  ]


  constructor (private productService: ProductsService){}

  ngOnInit(): void{
    this.products = this.productService.getProducts();
  }
}
