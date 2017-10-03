import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Product } from '../models/product';

import { ProductsService } from '../services/products';

@Component({
	selector: 'edit-product', 
	templateUrl: './edit-product.html',
	styleUrls: ['./edit-product.css']
}) 

export class EditProductComponent implements OnInit {
	id: number;
	newName: string;
	oldName: string;

	constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) {

	}

	editProduct(): void {
		this.productsService.editNameById(this.id, this.newName);
		this.router.navigate(['']);
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params: Params) => {
			 this.id = Number(params['id']);
		});

		let product: Product = this.productsService.getById(this.id);
		this.oldName = product.name;
	}	
}