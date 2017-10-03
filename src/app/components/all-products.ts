import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

import { ProductsService } from '../services/products';

@Component({
	selector: 'all-products',
	templateUrl: './all-products.html',
	styleUrls: ['./all-products.css']
})

export class AllProductsComponent implements OnInit {
	products: Product[] = [];

	constructor(private productsService: ProductsService) {

	}

	getAllProducts(): void {
		this.products = this.productsService.getAll();
	}

	changeState(id: number): void {
		this.productsService.changeStateById(id);
	}

	deleteProduct(id: number): void {
		this.products = this.productsService.deleteById(id);
	}

	ngOnInit(): void {
		this.getAllProducts();
	}
}