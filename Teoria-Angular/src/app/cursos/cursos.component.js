"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CursosComponent = void 0;
var core_1 = require("@angular/core");
var CursosComponent = /** @class */ (function () {
    //public nombre: string;
    function CursosComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    CursosComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) {
            //this.nombre = params.nombre;
            //this.nombre = params['nombre'];
            console.log(params);
        });
    };
    CursosComponent.prototype.redirigir = function () {
        this._router.navigate(['/zapatillas']);
    };
    CursosComponent = __decorate([
        (0, core_1.Component)({
            selector: 'cursos',
            templateUrl: './cursos.component.html',
            styleUrls: ['./cursos.component.css']
        })
    ], CursosComponent);
    return CursosComponent;
}());
exports.CursosComponent = CursosComponent;
