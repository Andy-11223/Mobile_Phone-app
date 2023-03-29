import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './shared/search/search.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { CatalogComponent } from './shared/catalog/catalog/catalog.component';
import { ProductDetailComponent } from './shared/product/detail/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MaterialGalleryComponent } from './components/material-gallery/material-gallery.component';
import { ProductListComponent } from './shared/product/list/product-list/product-list.component';
import { CatalogContainerComponent } from './shared/catalog/catalog-container/catalog-container.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogEndpointService } from './services/endpoint-catalog.service';
import { CatalogService } from './services/catalog.service';
import { ProductEndpointService } from './services/endpoint-product.service';
import { ProductService } from './services/product.service';
import { CommentEndpointService } from './services/comment-endpoint.service';
import { CommentsService } from './services/comment.service';
import { ProductListContainerComponent } from './shared/product/list/list-container/product-list-container.component';
import { ProductDetailContainerComponent } from './shared/product/detail/product-container/product-detail-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    CatalogComponent,
    ProductDetailComponent,
    HomeComponent,
    CommentsComponent,
    ContactsComponent,
    RegistrationComponent,
    MaterialGalleryComponent,
    ProductDetailContainerComponent,
    ProductListContainerComponent,
    ProductListComponent,
    CatalogContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CatalogEndpointService,
    CatalogService,
    ProductEndpointService,
    ProductService,
    CommentEndpointService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
