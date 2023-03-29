import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";

const DUMMY_JSON_URL_COMMENTS = 'https://dummyjson.com/comments'

@Injectable()
export class CommentEndpointService {

  constructor(private http: HttpClient) { }

  get web_json_comments_data() {
    return `${DUMMY_JSON_URL_COMMENTS}`;
  }

  getAllComments<T>(): Observable<T> {
    return this.http
      .get(this.web_json_comments_data).pipe(
        map(response => response as T),
        catchError(e => throwError(e))
      )
  }
}
