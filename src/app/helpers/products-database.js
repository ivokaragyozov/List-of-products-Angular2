"use strict";
var ProductsDatabase = (function () {
    function ProductsDatabase() {
        this.products = [];
        this.nxtId = 0;
    }
    ProductsDatabase.prototype.add = function (name) {
        var newProduct = {
            id: this.nxtId,
            name: name,
            isFavourite: false
        };
        this.nxtId++;
        this.products.push(newProduct);
        return this.products;
    };
    ProductsDatabase.prototype.deleteById = function (id) {
        this.products = this.products.filter(function (p) { return p.id !== id; });
        return this.products;
    };
    ProductsDatabase.prototype.getAll = function () {
        return this.products;
    };
    ProductsDatabase.prototype.getFavourites = function () {
        var favourites = this.products.filter(function (p) { return p.isFavourite === true; });
        return favourites;
    };
    ProductsDatabase.prototype.changeStateById = function (id) {
        var ind = this.products.findIndex(function (p) { return p.id === id; });
        this.products[ind].isFavourite = !this.products[ind].isFavourite;
    };
    ProductsDatabase.prototype.getById = function (id) {
        var ind = this.products.findIndex(function (p) { return p.id === id; });
        return this.products[ind];
    };
    ProductsDatabase.prototype.editNameById = function (id, newName) {
        var ind = this.products.findIndex(function (p) { return p.id === id; });
        this.products[ind].name = newName;
    };
    return ProductsDatabase;
}());
exports.ProductsDatabase = ProductsDatabase;
//# sourceMappingURL=products-database.js.map