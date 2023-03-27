import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getCatalogInfo<T>(): Observable<T> {
    return this.http
      .get('https://dummyjson.com/products/categories').pipe(
        map(responce => responce as T),
        catchError(e => throwError(e))
      );
  }
}
