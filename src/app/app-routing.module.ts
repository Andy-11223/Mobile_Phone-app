import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CatalogComponent } from './shared/catalog/catalog/catalog.component';
import { ProductDetailComponent } from './shared/product/detail/product-detail/product-detail.component';

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "catalog", component: CatalogComponent },
  { path: "catalog/:id", component: ProductDetailComponent },
  { path: "about-us", component: ContactsComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "**", component: NotFoundError }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
