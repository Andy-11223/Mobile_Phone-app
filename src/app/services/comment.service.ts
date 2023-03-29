import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CommentEndpointService } from "./comment-endpoint.service";

@Injectable()
export class CommentsService {

  constructor(private commentsEndpointService: CommentEndpointService) { }

  public getComments(): Observable<Comment[]> {
    return this.commentsEndpointService.getAllComments<Comment[]>().pipe<Comment[]>(
      map((smartphones: Comment[]) => smartphones)
    );
  }
}
