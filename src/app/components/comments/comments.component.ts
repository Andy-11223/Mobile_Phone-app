import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private commentsService: ProductService) { }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(commets => {
      console.log('commetaries', commets)
    })
  }

}
