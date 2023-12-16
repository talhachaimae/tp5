import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";


import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing.module";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductsComponent} from "./new-products/new-products.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NewProductsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule , FormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],

})
export class AppModules{ }
