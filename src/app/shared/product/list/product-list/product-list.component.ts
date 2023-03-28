import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getSmartphones().subscribe(smartphones => {
      console.log('smartphones', smartphones)
    });

    this.productService.getLaptops().subscribe(laptops => {
      console.log('laptops', laptops)
    });
  }

}
