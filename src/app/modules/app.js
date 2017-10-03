"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app-routing");
var app_1 = require("../components/app");
var all_products_1 = require("../components/all-products");
var favourite_products_1 = require("../components/favourite-products");
var add_product_1 = require("../components/add-product");
var edit_product_1 = require("../components/edit-product");
var products_1 = require("../services/products");
var products_database_1 = require("../helpers/products-database");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.AppRoutingModule],
        declarations: [app_1.AppComponent, all_products_1.AllProductsComponent, favourite_products_1.FavouriteProductsComponent, add_product_1.AddProductComponent, edit_product_1.EditProductComponent],
        bootstrap: [app_1.AppComponent],
        providers: [products_1.ProductsService, products_database_1.ProductsDatabase]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.js.map