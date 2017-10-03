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
var router_1 = require("@angular/router");
var products_1 = require("../services/products");
var EditProductComponent = (function () {
    function EditProductComponent(productsService, activatedRoute, router) {
        this.productsService = productsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    EditProductComponent.prototype.editProduct = function () {
        this.productsService.editNameById(this.id, this.newName);
        this.router.navigate(['']);
    };
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = Number(params['id']);
        });
        var product = this.productsService.getById(this.id);
        this.oldName = product.name;
    };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    core_1.Component({
        selector: 'edit-product',
        templateUrl: './edit-product.html',
        styleUrls: ['./edit-product.css']
    }),
    __metadata("design:paramtypes", [products_1.ProductsService, router_1.ActivatedRoute, router_1.Router])
], EditProductComponent);
exports.EditProductComponent = EditProductComponent;
//# sourceMappingURL=edit-product.js.map