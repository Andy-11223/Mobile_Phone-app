import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../models/smartphone.model";
import { ProductEndpointService } from "./endpoint-product.service";

@Injectable()
export class ProductService {

  constructor(private ProductEndpoint: ProductEndpointService) { }

  public getSmartphones(): Observable<Product[]> {
    return this.ProductEndpoint.getAllSmartphones<Product[]>().pipe<Product[]>(
      map((smartphones: Product[]) => smartphones)
    );
  }

  public getLaptops(): Observable<Product[]> {
    return this.ProductEndpoint.getAllLaptops<Product[]>().pipe<Product[]>(
      map((smartphones: Product[]) => smartphones)
    );
  }

  public getComments(): Observable<Comment[]> {
    return this.ProductEndpoint.getAllComments<Comment[]>().pipe<Comment[]>(
      map((smartphones: Comment[]) => smartphones)
    );
  }
}
