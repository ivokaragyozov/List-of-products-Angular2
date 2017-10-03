import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

import { ProductsService } from '../services/products';

@Component({
	selector: 'favourite-products', 
	templateUrl: './favourite-products.html',
	styleUrls: ['./favourite-products.css']
})

export class FavouriteProductsComponent implements OnInit {
	favouriteProducts: Product[] = [];

	constructor(private productsService: ProductsService) {

	}

	getFavouritesProducts(): void {
		this.favouriteProducts = this.productsService.getFavourites();
	}

	changeState(id: number): void {
		this.productsService.changeStateById(id);
		this.favouriteProducts = this.productsService.getFavourites();
	}

	deleteProduct(id: number): void {
		this.productsService.deleteById(id);
		this.favouriteProducts = this.productsService.getFavourites();
	}

	ngOnInit(): void {
		this.getFavouritesProducts();
	}
}