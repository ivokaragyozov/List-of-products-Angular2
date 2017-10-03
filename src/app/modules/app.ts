import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing';

import { AppComponent } from '../components/app';
import { AllProductsComponent } from '../components/all-products';
import { FavouriteProductsComponent } from '../components/favourite-products';
import { AddProductComponent } from '../components/add-product';
import { EditProductComponent } from '../components/edit-product';

import { ProductsService } from '../services/products';

import { ProductsDatabase } from '../helpers/products-database';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, AllProductsComponent, FavouriteProductsComponent, AddProductComponent, EditProductComponent ],
  bootstrap: [ AppComponent ], 
  providers: [ ProductsService, ProductsDatabase ]
})

export class AppModule {

}
