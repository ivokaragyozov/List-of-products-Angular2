"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var products_1 = require("../services/products");
var FavouriteProductsComponent = (function () {
    function FavouriteProductsComponent(productsService) {
        this.productsService = productsService;
        this.favouriteProducts = [];
    }
    FavouriteProductsComponent.prototype.getFavouritesProducts = function () {
        this.favouriteProducts = this.productsService.getFavourites();
    };
    FavouriteProductsComponent.prototype.changeState = function (id) {
        this.productsService.changeStateById(id);
        this.favouriteProducts = this.productsService.getFavourites();
    };
    FavouriteProductsComponent.prototype.deleteProduct = function (id) {
        this.productsService.deleteById(id);
        this.favouriteProducts = this.productsService.getFavourites();
    };
    FavouriteProductsComponent.prototype.ngOnInit = function () {
        this.getFavouritesProducts();
    };
    return FavouriteProductsComponent;
}());
FavouriteProductsComponent = __decorate([
    core_1.Component({
        selector: 'favourite-products',
        templateUrl: './favourite-products.html',
        styleUrls: ['./favourite-products.css']
    }),
    __metadata("design:paramtypes", [products_1.ProductsService])
], FavouriteProductsComponent);
exports.FavouriteProductsComponent = FavouriteProductsComponent;
//# sourceMappingURL=favourite-products.js.map