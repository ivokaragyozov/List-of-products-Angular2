import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../services/products';

@Component({
	selector: 'add-product',
	templateUrl: './add-product.html',
	styleUrls: ['./add-product.css']
})

export class AddProductComponent {
	name: string;

	constructor(private productsService: ProductsService, private router: Router) {

	}

	submitNewProduct(): void {
		this.productsService.add(this.name);
		this.router.navigate(['']);
	}
}