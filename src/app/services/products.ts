import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { ProductsDatabase } from '../helpers/products-database'; 

@Injectable()
export class ProductsService {
	constructor(private productsDatabase: ProductsDatabase) {

	}

	getAll(): Product[] {
		return this.productsDatabase.getAll();
	}

	getFavourites(): Product[] {
		return this.productsDatabase.getFavourites();
	}

	add(name: string): Product[] {
		return this.productsDatabase.add(name);
	}

	deleteById(id: number): Product[] {
		return this.productsDatabase.deleteById(id);
	}

	changeStateById(id: number): void {
		this.productsDatabase.changeStateById(id);
	}

	getById(id: number): Product {
		return this.productsDatabase.getById(id);
	}

	editNameById(id: number, newName: string): void {
		this.productsDatabase.editNameById(id, newName);
	}
}