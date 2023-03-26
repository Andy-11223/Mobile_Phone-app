import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
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
import { ProductContainerComponent } from './shared/product/detail/product-container/product-container.component';
import { ListContainerComponent } from './shared/product/list/list-container/list-container.component';
import { ProductListComponent } from './shared/product/list/product-list/product-list.component';
import { CatalogContainerComponent } from './shared/catalog/catalog-container/catalog-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
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
    ProductContainerComponent,
    ListContainerComponent,
    ProductListComponent,
    CatalogContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
