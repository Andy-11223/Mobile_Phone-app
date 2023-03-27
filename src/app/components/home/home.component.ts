import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getCatalogContent().subscribe(categories => {
      console.log(categories)
    })
  }

}
