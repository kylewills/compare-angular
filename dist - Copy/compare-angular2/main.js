(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'faq',
        component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"navbar is-dark\">\n  <div class=\"container\">\n    <div class=\"navbar-brand nav-left\">\n      <a routerLink=\"/\" class=\"nav-item\">Kyle D Wills</a>\n    </div>\n\n      <!-- Here we put our Angular event bind with the click event.\n      click is the event, toggleNav is the property the will be defined \n    in the app.component.ts class of home folder ( in the export class add toggleNav : false) and !toggleNav is the false to its true: so\n    clicking on or off etc... Angular class binding is done through and ng directive(angular)\n    [ngClass], {is-active} is the bulma class that changes the\n    hamburger icon to an x if the menu is open. It is binded to the toggleNav\n  and checks if it is true or false...  -->\n    <span class=\"navbar-burger nav-toggle\" (click)=\"toggleNav = !toggleNav;\" [ngClass]=\"{'is-active': toggleNav }\">\n        <span></span>\n        <span></span>\n        <span></span>\n    </span>\n\n    <!-- ngclass binding here is for active binding with toggleNav\n    attached to this div. it is responsible for showing or hiding of\n    this navbar menu whether click is clicked by user-->\n    <div class=\"nav-right navbar-menu navbar-end\" [ngClass]=\"{'is-active': toggleNav }\">\n      \n      <!-- in angular you don't use href, you use \n      routerLink -->\n        <a routerLink=\"/\" class=\"navbar-item r-item\">Home</a>\n        <a class=\"navbar-item r-item\">About</a>\n        <a class=\"navbar-item r-item\">Features</a>\n        <a routerLink=\"/faq\" class=\"navbar-item r-item\">FAQ</a>\n      \n\n      <div class=\"navbar-item\">\n        <p class=\"control\">\n          <a class=\"button is-danger is-outlined\">\n            <span class=\"icon\">\n              <i class=\"fa fa-download\"></i>\n            </span>\n            <span>Join Now</span>\n          </a>\n        </p>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"columns\">\n      <div class=\"column\">\n        <p>This is a quick landing home page built with Bulma and Angular.</p>  \n      </div>\n      <div class=\"column has-text-right\">\n        <a class=\"icon\" href=\"#\"><i class=\"fa fa-facebook fa-2x\"></i></a>\n        <a class=\"icon\" href=\"#\"><i class=\"fa fa-twitter fa-2x\"></i></a>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar a:hover {\n  color: gray; }\n\n.nav-left a {\n  color: #fff;\n  font-weight: bold;\n  padding: 1rem; }\n\na.r-item {\n  color: #C1C1C1;\n  padding: 0.5rem 1.75rem; }\n\n@media screen and (max-width: 768px) {\n    a.r-item {\n      color: gray; }\n      a.r-item:hover {\n        background-color: #F1F1F1; } }\n\n.nav-toggle span {\n  background-color: #C1C1C1; }\n\nfooter {\n  background-color: #ffbb34;\n  color: #fff;\n  font-size: 1.4rem;\n  padding: 3.5rem; }\n\nfooter .icon {\n    color: #fff;\n    margin-left: 30px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // set a property that holds a random colour for our style
        this.randomcolor = this.getRandomColor();
    }
    // function to get random colours - a random generator function
    AppComponent.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = ' # ';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    // function to set a new random color
    AppComponent.prototype.setColor = function () {
        this.randomcolor = this.getRandomColor();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__["FaqComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"faq\">\n  <div class=\"container\">\n    <section class=\"section\">\n      <h1 class=\"title\">Frequently Asked Questions</h1>\n      <h2 class=\"subtitle\">On her way she met a copy.</h2>\n\n        \n      <div class=\"columns pd\">\n        \n        <!-- the sections that get repeated from our data library\n          using *ngFor to input into the title and answer classes...\n          Change \"let faq of faqs\" to the code below if you want to\n          slice the data array to 12, using angular...\n         -->\n        <div class=\"column is-one-third\" *ngFor=\"let faq of ( faqs ? faqs.slice(0,9): [])\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <p class=\"title\">{{ faq.title }}</p>\n              <p class=\"answer\">{{ faq.body }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/faq/faq.component.sass":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pd {\n  padding: 2.5em 0 1.5em 0; }\n\n.answer {\n  margin-top: 10px !important; }\n\n.columns {\n  flex-wrap: wrap; }\n"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // from angulars built in http library
 // a map operator from reactive extensions(rxjs)
// import 'rxjs/add/operator/map'; //old way
var FaqComponent = /** @class */ (function () {
    function FaqComponent(http) {
        var _this = this;
        this.http = http;
        this.http.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); })) // you must wrap in .pipe now...
            .subscribe(function (res) { return _this.faqs = res; });
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.sass */ "./src/app/faq/faq.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">Welcome to my Bulma and Angular built page</h1>\n      <div class=\"is-two-thirds column is-paddingless\">\n        <h2 class=\"subtitle is-4\">\"Oh, God\", he thought, \"what a strenuous career it is that I've chosen! Travelling day in and day out.</h2>\n      </div>\n      <a class=\"button is-large is-primary\" id=\"learn\">Learn more about us!</a>\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"columns pd is-desktop\">\n      <div class=\"column is-1 has-text-centered\">\n        <i class=\"fa fa-cog fa-5x\" ></i>\n      </div>\n      <div class=\"column is-one-third-desktop\" >\n        <p class=\"title\" [style.color]=\"randomcolor\"><strong>A wonderful serenity has taken possession of my work.</strong></p> \n      </div>\n      <div class=\"column\">\n        <p> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to </p>\n      </div>\n    </div>\n\n    <div class=\"column\">\n      <a class=\"button is-large is-dark iconbtn\"(click)=\"setColor()\" >Change Icon Colour</a>\n      <a class=\"button is-large is-dark textbtn\"(click)=\"setColor()\">Change Text Colour</a>\n    </div>\n\n    <!--<div class=\"column is-one-third-desktop\" >\n      <p class=\"title\" [ngStyle]=\"{'color' : getRandomColor()}\"><strong>A wonderful serenity has taken possession of my work.</strong></p> \n    </div>\n    <div class=\"column\">\n      <p> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to </p>\n    </div>\n  </div>\n\n  <div class=\"column\">\n    <a class=\"button is-large is-dark iconbtn\" [(ngModel)]=\"color\" >Change Icon Colour</a>\n    <a class=\"button is-large is-dark textbtn\" [(ngModel)]=\"color\">Change Text Colour</a>\n  </div>-->\n\n\n  <div class=\"columns pd\">\n    <div class=\"column\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n         <p class=\"title\"> Separated they live in Bookmarks grove right at the coast of the Semantics... </p>\n         <p class=\"subtitle\"> -Kyle Wills</p> \n        </div>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n         <p class=\"title\"> Far far away, behind the word mountains, far from the countries... </p>\n         <p class=\"subtitle\"> -Toby Wills</p> \n        </div>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n         <p class=\"title\"> She packed her seven versalia, put her initial into the belt and made herself on the way... </p>\n         <p class=\"subtitle\"> -Jess Wills</p> \n        </div>\n      </div>\n    </div>\n   </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\n  background: url(\"/assets/lake.jpg\");\n  background-size: 100% 100%;\n  font-family: Arial, Helvetica, sans-serif; }\n  .hero .title {\n    color: white;\n    font-weight: bold; }\n  @media screen and (min-width: 769px), print {\n      .hero .title {\n        font-size: 2.5rem; } }\n  @media screen and (min-width: 1000px) {\n      .hero .title {\n        font-size: 3.5rem;\n        margin-top: 2rem; } }\n  h2 {\n  margin: 1.5rem 0 2rem 0 !important;\n  color: white; }\n  .fa-cog {\n  font-size: 40px; }\n  @media screen and (min-width: 1000px) {\n  #learn {\n    margin-bottom: 2rem; } }\n  @media screen and (min-width: 769px), print {\n  .pd {\n    padding: 2em 0; } }\n  .iconbtn {\n  margin-right: 1rem; }\n  @media screen and (max-width: 768px) {\n    .iconbtn {\n      font-size: 0.8rem;\n      margin-bottom: 1rem; } }\n  .textbtn {\n  margin-left: 1rem; }\n  @media screen and (max-width: 768px) {\n    .textbtn {\n      font-size: 0.8rem;\n      margin-left: 0rem; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // set a property that holds a random colour for our style
        this.randomcolor = this.getRandomColor();
    }
    // function to get random colours - a random generator function
    HomeComponent.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = ' # ';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    // function to set a new random color
    HomeComponent.prototype.setColor = function () {
        this.randomcolor = this.getRandomColor();
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\CODES JS\compare-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map