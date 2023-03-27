import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Catalog } from "../models/catalog.model";
import { CatalogEndpointService } from "./endpoint-catalog.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private CatalogEndpoint: CatalogEndpointService) { }

  public getCatalogContent(): Observable<Catalog[]> {
    return this.CatalogEndpoint.getCatalogInfo<Catalog[]>().pipe<Catalog[]>(
      map((categories: Catalog[]) => categories)
    );
  }
}
