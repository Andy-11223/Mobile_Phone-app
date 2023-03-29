import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/smartphone.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {
  public smartphonesList: Product[] = [];
  public laptopsList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getSmartphones().subscribe(smartphones => {
      console.log('smartphones', smartphones);
      this.smartphonesList = smartphones;
    });

    this.productService.getLaptops().subscribe(laptops => {
      console.log('laptops', laptops);
      this.laptopsList = laptops;
    });
  }
}
