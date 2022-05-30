"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ZapatillasComponent = void 0;
var core_1 = require("@angular/core");
var zapatilla_1 = require("../models/zapatilla");
var ZapatillasComponent = /** @class */ (function () {
    function ZapatillasComponent() {
        this.titulo = 'Componente de zapatillas';
        this.mi_marca = "fila";
        this.color = 'yellow';
        this.marcas = new Array;
        this.zapatillas = [
            new zapatilla_1.Zapatilla('Nike Fly', 'Nike', 'blanco', 80, true),
            new zapatilla_1.Zapatilla('Nike excavator', 'Nike', 'brown', 180, false),
            new zapatilla_1.Zapatilla('Rebook Rewind', 'Rebook', 'blanco', 100, true)
        ];
    }
    ZapatillasComponent.prototype.ngOnInit = function () {
        console.log(this.zapatillas);
        this.getMarcas();
    };
    ZapatillasComponent.prototype.getMarcas = function () {
        var _this = this;
        this.zapatillas.forEach(function (zapatillas, index) {
            if (_this.marcas.indexOf(zapatillas.marca) < 0) {
                _this.marcas.push(zapatillas.marca);
            }
            console.log(index);
        });
        console.log(this.marcas);
    };
    ZapatillasComponent.prototype.getMarca = function () {
        alert(this.mi_marca);
    };
    ZapatillasComponent.prototype.addMarca = function () {
        this.marcas.push(this.mi_marca);
    };
    ZapatillasComponent.prototype.borrarMarca = function (index) {
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    };
    ZapatillasComponent.prototype.onBlur = function () {
        console.log("has salido del input");
    };
    ZapatillasComponent.prototype.mostrarPalabra = function () {
        alert(this.mi_marca);
    };
    ZapatillasComponent = __decorate([
        (0, core_1.Component)({
            selector: 'zapatillas',
            templateUrl: './zapatillas.component.html'
        })
    ], ZapatillasComponent);
    return ZapatillasComponent;
}());
exports.ZapatillasComponent = ZapatillasComponent;
