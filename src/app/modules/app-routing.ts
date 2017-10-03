import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllProductsComponent } from '../components/all-products';
import { FavouriteProductsComponent } from '../components/favourite-products';
import { AddProductComponent } from '../components/add-product';
import { EditProductComponent } from '../components/edit-product';

const routes: Routes = [
	{ path: '', redirectTo: 'all-products', pathMatch: 'full' },
	{ path: 'all-products', component: AllProductsComponent }, 
	{ path: 'favourite-products', component: FavouriteProductsComponent },
	{ path: 'add-product', component: AddProductComponent },
	{ path: 'edit-product/:id', component: EditProductComponent }
];

@NgModule ({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {
	
}