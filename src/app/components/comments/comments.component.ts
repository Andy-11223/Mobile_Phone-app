import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comment.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(comments => {
      console.log('commentaries', comments)
    })
  }

}
