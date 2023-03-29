import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../models/smartphone.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() public smartphonesList: Product[] = [];
  @Input() public laptopsList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void { }

}
