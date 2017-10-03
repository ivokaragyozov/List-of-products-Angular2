import { Product } from '../models/product';

export class ProductsDatabase {
	products: Product[] = [];
	nxtId: number = 0;

	add(name: string): Product[] {
		let newProduct: Product =  {
			id: this.nxtId,
			name: name, 
			isFavourite: false
		};

		this.nxtId++;

		this.products.push(newProduct);
		return this.products;
	}

	deleteById(id: number) {
		this.products = this.products.filter(p => p.id !== id);
		return this.products;
	}

	getAll(): Product[] {
		return this.products;
	}

	getFavourites(): Product[] {
		let favourites = this.products.filter(p => p.isFavourite === true);
		return favourites;
	}

	changeStateById(id: number): void {
		let ind = this.products.findIndex(p => p.id === id);
		this.products[ind].isFavourite = !this.products[ind].isFavourite;
	}

	getById(id: number): Product {
		let ind = this.products.findIndex(p => p.id === id);
		return this.products[ind];
	}

	editNameById(id: number, newName: string): void {
		let ind = this.products.findIndex(p => p.id === id);
		this.products[ind].name = newName;
	}
}