"use strict";
exports.__esModule = true;
exports.routing = exports.appRoutingProviders = void 0;
var router_1 = require("@angular/router");
//importar componentes
var home_component_1 = require("./home/home.component");
var zapatillas_component_1 = require("./zapatillas/zapatillas.component");
var videojuego_component_1 = require("./videojuego/videojuego.component");
var cursos_component_1 = require("./cursos/cursos.component");
//Array de rutas
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'zapatillas', component: zapatillas_component_1.ZapatillasComponent },
    { path: 'videojuego', component: videojuego_component_1.VideojuegoComponent },
    { path: 'cursos', component: cursos_component_1.CursosComponent },
    { path: 'cursos/:nombre', component: cursos_component_1.CursosComponent },
    { path: 'cursos/:apellidos', component: cursos_component_1.CursosComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
//exportar el modulo del router
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
