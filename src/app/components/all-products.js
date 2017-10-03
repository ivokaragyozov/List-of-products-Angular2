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
var AllProductsComponent = (function () {
    function AllProductsComponent(productsService) {
        this.productsService = productsService;
        this.products = [];
    }
    AllProductsComponent.prototype.getAllProducts = function () {
        this.products = this.productsService.getAll();
    };
    AllProductsComponent.prototype.changeState = function (id) {
        this.productsService.changeStateById(id);
    };
    AllProductsComponent.prototype.deleteProduct = function (id) {
        this.products = this.productsService.deleteById(id);
    };
    AllProductsComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    return AllProductsComponent;
}());
AllProductsComponent = __decorate([
    core_1.Component({
        selector: 'all-products',
        templateUrl: './all-products.html',
        styleUrls: ['./all-products.css']
    }),
    __metadata("design:paramtypes", [products_1.ProductsService])
], AllProductsComponent);
exports.AllProductsComponent = AllProductsComponent;
//# sourceMappingURL=all-products.js.map