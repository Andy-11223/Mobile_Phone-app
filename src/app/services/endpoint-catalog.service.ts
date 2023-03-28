import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

const DUMMY_JSON_URL = 'https://dummyjson.com/products/categories'

@Injectable()
export class CatalogEndpointService {

  constructor(private http: HttpClient) { }

  get web_json_data() {
    return `${DUMMY_JSON_URL}`;
  }

  getCatalogInfo<T>(): Observable<T> {
    return this.http
      .get(this.web_json_data).pipe(
        map(responce => responce as T),
        catchError(e => throwError(e))
      );
  }
}
