import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";

const DUMMY_JSON_URL_SMARTPHONES = 'https://dummyjson.com/products/category/smartphones'
const DUMMY_JSON_URL_LAPTOPS = 'https://dummyjson.com/products/category/laptops'
const DUMMY_JSON_URL_COMMENTS = 'https://dummyjson.com/comments'

@Injectable()
export class ProductEndpointService {

  constructor(private http: HttpClient) { }

  get web_json_smartphones_data() {
    return `${DUMMY_JSON_URL_SMARTPHONES}`;
  }

  get web_json_laptops_data() {
    return `${DUMMY_JSON_URL_LAPTOPS}`;
  }

  get web_json_comments_data() {
    return `${DUMMY_JSON_URL_COMMENTS}`;
  }

  getAllSmartphones<T>(): Observable<T> {
    return this.http
      .get(this.web_json_smartphones_data).pipe(
        map(response => response as T),
        catchError(e => throwError(e))
      )
  }

  getAllLaptops<T>(): Observable<T> {
    return this.http
      .get(this.web_json_laptops_data).pipe(
        map(response => response as T),
        catchError(e => throwError(e))
      )
  }

  getAllComments<T>(): Observable<T> {
    return this.http
      .get(this.web_json_comments_data).pipe(
        map(response => response as T),
        catchError(e => throwError(e))
      )
  }
}
