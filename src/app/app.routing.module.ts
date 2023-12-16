// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductsComponent} from "./new-products/new-products.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";

const routes: Routes = [
  {path: "login" , component: LoginComponent},
  {path: "admin", component: AdminTemplateComponent,},
  { path: "products", component: ProductsComponent },
  { path: "newProducts", component: NewProductsComponent},
  { path: "editProducts/:id", component: EditProductComponent},
  { path: "home", component: HomeComponent},
  {path:"", redirectTo: "login", pathMatch: 'full'}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
