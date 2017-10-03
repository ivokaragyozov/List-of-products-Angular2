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
var products_database_1 = require("../helpers/products-database");
var ProductsService = (function () {
    function ProductsService(productsDatabase) {
        this.productsDatabase = productsDatabase;
    }
    ProductsService.prototype.getAll = function () {
        return this.productsDatabase.getAll();
    };
    ProductsService.prototype.getFavourites = function () {
        return this.productsDatabase.getFavourites();
    };
    ProductsService.prototype.add = function (name) {
        return this.productsDatabase.add(name);
    };
    ProductsService.prototype.deleteById = function (id) {
        return this.productsDatabase.deleteById(id);
    };
    ProductsService.prototype.changeStateById = function (id) {
        this.productsDatabase.changeStateById(id);
    };
    ProductsService.prototype.getById = function (id) {
        return this.productsDatabase.getById(id);
    };
    ProductsService.prototype.editNameById = function (id, newName) {
        this.productsDatabase.editNameById(id, newName);
    };
    return ProductsService;
}());
ProductsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [products_database_1.ProductsDatabase])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.js.map