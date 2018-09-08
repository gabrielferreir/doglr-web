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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _views_error_error_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/error/error-routing.module */ "./src/app/views/error/error-routing.module.ts");
/* harmony import */ var _views_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/auth/auth-routing.module */ "./src/app/views/auth/auth-routing.module.ts");
/* harmony import */ var _views_main_main_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/main/main-routing.module */ "./src/app/views/main/main-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = _views_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AUTH_ROUTES"].concat(_views_main_main_routing_module__WEBPACK_IMPORTED_MODULE_4__["MAIN_ROUTES"], _views_error_error_routing_module__WEBPACK_IMPORTED_MODULE_2__["ERROR_ROUTES"]);
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

module.exports = "<router-outlet></router-outlet>\r\n<ui-snackbar-container></ui-snackbar-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _views_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/auth/auth.module */ "./src/app/views/auth/auth.module.ts");
/* harmony import */ var _views_main_main_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/main/main.module */ "./src/app/views/main/main.module.ts");
/* harmony import */ var _views_error_error_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/error/error.module */ "./src/app/views/error/error.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _views_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _views_main_main_module__WEBPACK_IMPORTED_MODULE_7__["MainModule"],
                _views_error_error_module__WEBPACK_IMPORTED_MODULE_8__["ErrorModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production })
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/api/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/api/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.request = function (method, url, options) {
        var _this = this;
        var headersParams = this.generateHeaders(__assign({ 'Content-Type': 'application/json' }, options.headers));
        var httpOptions = {
            headers: headersParams,
            body: options.body
        };
        var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"](method, url, httpOptions.body, httpOptions);
        return {
            subscribe: function (sucess, error, complete) {
                return _this._http
                    .request(request)
                    .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.response(res, sucess); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (res) { return _this.error(res, error); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(complete)).subscribe();
            }
        };
    };
    ApiService.prototype.generateHeaders = function (headers) {
        var newHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        var keys = Object.keys(headers);
        keys.map(function (key) {
            newHeaders = newHeaders.set(key, headers[key]);
        });
        return newHeaders;
    };
    ApiService.prototype.response = function (res, callback) {
        return res.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response ? callback(res.body) : null;
    };
    ApiService.prototype.error = function (res, callback) {
        switch (res.status) {
            case 0:
                console.log('Um de nossos serviços está fora do ar e não foi possível processar sua requisição. Tente novamente mais tarde.');
                break;
            case 400:
                console.log('Requisição inválida. Verifique as informações fornecidas.');
                break;
            case 409:
                console.log(res.error.message);
                break;
            case 500:
                console.log('Ocorreu um erro interno. Já fomos informados do erro. Tente novamente mais tarde.');
        }
        if (callback) {
            callback(res);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/components/card-animal/card-animal.component.html":
/*!************************************************************************!*\
  !*** ./src/app/core/components/card-animal/card-animal.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"card-animal\" (click)=\"open()\">\r\n\r\n  <section class=\"card-animal__image\"\r\n           [ngStyle]=\"\r\n           {'background-image': pathImage ?\r\n           'url(' + pathImage + ')' :\r\n            'url(../../../../assets/image-animals/no-image.svg)',\r\n            'backgroundSize': 'cover',\r\n            'background-color':  pathImage ? '#EEE' : 'transparent'\r\n            }\r\n\">\r\n    <!--<img *ngIf=\"info.image\" [src]=\"'../../../../assets/image-animals/' + info.image\"/>-->\r\n  </section>\r\n\r\n  <section class=\"card-animal__info\">\r\n    <span class=\"card-animal__info__title\">{{ info.title }}</span>\r\n    <span class=\"card-animal__info__breed\">{{ info.breed }}</span>\r\n    <span class=\"card-animal__info__age\">{{ info.age + ' anos' }}</span>\r\n    <section class=\"card-animal__info__footer\">\r\n      <span>{{ info.views === 0 ? 'Sem visualições' : info.views === 1 ? info.views + ' visualização' : info.views + ' visualizações' }} </span>\r\n      <button class=\"ui-button flat primary no-padding\" (click)=\"share($event, info.title, info.description, info.id)\">COMPARTILHAR</button>\r\n    </section>\r\n\r\n  </section>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/core/components/card-animal/card-animal.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/components/card-animal/card-animal.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-animal {\n  width: 100%;\n  background-color: #FFF;\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  box-sizing: border-box;\n  overflow: hidden; }\n  .card-animal__image {\n    min-width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    margin-right: 8px;\n    background-position: center;\n    background-repeat: no-repeat; }\n  .card-animal__info {\n    width: 100%; }\n  .card-animal__info__title, .card-animal__info__breed, .card-animal__info__age {\n      display: block;\n      font-size: 12px; }\n  .card-animal__info__title {\n      font-weight: 500;\n      font-size: 16px;\n      color: rgba(0, 0, 0, 0.87); }\n  .card-animal__info__breed {\n      margin-top: 4px; }\n  .card-animal__info__footer {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      font-size: 12px; }\n  .card-animal .no-padding {\n    padding: 0; }\n"

/***/ }),

/***/ "./src/app/core/components/card-animal/card-animal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/card-animal/card-animal.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardAnimalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardAnimalComponent", function() { return CardAnimalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardAnimalComponent = /** @class */ (function () {
    function CardAnimalComponent(router) {
        this.router = router;
    }
    CardAnimalComponent.prototype.ngOnInit = function () {
        this.pathImage = this.info.images && this.info.images[0] ? "" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].PATH_ANIMAL_IMAGES + this.info.images[0].path : null;
    };
    CardAnimalComponent.prototype.share = function (event, title, description, id) {
        event.cancelBubble = true;
        var nav = navigator;
        if (nav.share) {
            nav.share({
                title: title,
                text: description,
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'animal/' + id
            })
                .then(function () { return console.log('Successful share'); })
                .catch(function (error) { return console.log('Error sharing', error); });
        }
        else {
            alert('Navegador não tem suporte');
        }
    };
    CardAnimalComponent.prototype.open = function () {
        this.editing ?
            this.router.navigate(['/update-animal/', this.info.id]) :
            this.router.navigate(['/animal/', this.info.id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('info'),
        __metadata("design:type", Object)
    ], CardAnimalComponent.prototype, "info", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('editing'),
        __metadata("design:type", Boolean)
    ], CardAnimalComponent.prototype, "editing", void 0);
    CardAnimalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-animal',
            template: __webpack_require__(/*! ./card-animal.component.html */ "./src/app/core/components/card-animal/card-animal.component.html"),
            styles: [__webpack_require__(/*! ./card-animal.component.scss */ "./src/app/core/components/card-animal/card-animal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CardAnimalComponent);
    return CardAnimalComponent;
}());



/***/ }),

/***/ "./src/app/core/components/card-animal/card-animal.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/card-animal/card-animal.module.ts ***!
  \*******************************************************************/
/*! exports provided: CardAnimalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardAnimalModule", function() { return CardAnimalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_animal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-animal.component */ "./src/app/core/components/card-animal/card-animal.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardAnimalModule = /** @class */ (function () {
    function CardAnimalModule() {
    }
    CardAnimalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [_card_animal_component__WEBPACK_IMPORTED_MODULE_1__["CardAnimalComponent"]],
            exports: [_card_animal_component__WEBPACK_IMPORTED_MODULE_1__["CardAnimalComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CardAnimalModule);
    return CardAnimalModule;
}());



/***/ }),

/***/ "./src/app/core/components/slide/slide.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/slide/slide.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"readyToGo\">\r\n  <ui-tabs-pages #images>\r\n\r\n    <div class=\"page\" *ngFor=\"let image of slide; let index = index\">\r\n\r\n      <div *ngIf=\"images.currentPage === (index + 1)\" (click)=\"nextImage()\">\r\n\r\n        <ui-card-content style=\"padding: 0; text-align: center;\">\r\n          <img [src]=\"PATH + image.path\" class=\"image-post\"/>\r\n        </ui-card-content>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </ui-tabs-pages>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/components/slide/slide.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/components/slide/slide.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/slide/slide.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/slide/slide.component.ts ***!
  \**********************************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideComponent = /** @class */ (function () {
    function SlideComponent() {
        this.PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].PATH_ANIMAL_IMAGES;
        this.slide = !this.slide ? null : this.slide;
    }
    SlideComponent.prototype.ngOnInit = function () {
    };
    SlideComponent.prototype.nextImage = function () {
        var totalPages = this.images.element.nativeElement.querySelectorAll('.page').length;
        var nextPage = this.images.currentPage < totalPages ? this.images.currentPage + 1 : 1;
        this.images.pagesGoToPage(nextPage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('slide'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "slide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('readyToGo'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "readyToGo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('images'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "images", void 0);
    SlideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slide',
            template: __webpack_require__(/*! ./slide.component.html */ "./src/app/core/components/slide/slide.component.html"),
            styles: [__webpack_require__(/*! ./slide.component.scss */ "./src/app/core/components/slide/slide.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "./src/app/core/components/slide/slide.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/components/slide/slide.module.ts ***!
  \*******************************************************/
/*! exports provided: SlideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideModule", function() { return SlideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slide_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide.component */ "./src/app/core/components/slide/slide.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideModule = /** @class */ (function () {
    function SlideModule() {
    }
    SlideModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [_slide_component__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]],
            exports: [_slide_component__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SlideModule);
    return SlideModule;
}());



/***/ }),

/***/ "./src/app/core/guard/guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/guard/guard.service.ts ***!
  \*********************************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GuardService = /** @class */ (function () {
    function GuardService(router, _api, _user) {
        this.router = router;
        this._api = _api;
        this._user = _user;
    }
    GuardService.prototype.canActivate = function (next, state) {
        var user = this._user.getUser();
        // VERIFIQUE PELO LOGIN
        return user.id ? true : this.remake();
    };
    GuardService.prototype.remake = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cookies = _this._user.getCookie().authentication;
            if (!cookies) {
                _this.router.navigate(['/login']);
                resolve(false);
            }
            _this._api.request('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API + "/refazer/" + cookies, {})
                .subscribe(function (res) {
                var content = res.content;
                _this._user.setUser(content.user);
                resolve(true);
            }, function (err) {
                resolve(false);
                _this.router.navigate(['/login']);
            }, function () {
            });
        });
    };
    GuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/core/user/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/user/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService() {
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.COOKIE_NAME = {
            authentication: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].system + "Authentication"
        };
    }
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.setUser = function (user) {
        this.user.next(user);
    };
    UserService.prototype.getToken = function () {
        return ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiCookie"].get(this.COOKIE_NAME.authentication);
    };
    UserService.prototype.setToken = function (newToken) {
        this.token = newToken;
        this.setCookie(newToken);
    };
    UserService.prototype.setCookie = function (token) {
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiCookie"].set(this.COOKIE_NAME.authentication, token, 365, '/');
    };
    UserService.prototype.getCookie = function () {
        return {
            authentication: ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiCookie"].get(this.COOKIE_NAME.authentication),
        };
    };
    UserService.prototype.remove = function () {
        this.user = null;
        this.token = null;
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiCookie"].delete(this.COOKIE_NAME.authentication);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _core_guard_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/guard/guard.service */ "./src/app/core/guard/guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["SMNUIModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            ],
            providers: [ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"], _core_api_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _core_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _core_guard_guard_service__WEBPACK_IMPORTED_MODULE_9__["GuardService"]],
            bootstrap: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/views/auth/auth-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/auth/auth-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AUTH_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ROUTES", function() { return AUTH_ROUTES; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/views/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/views/auth/register/register.component.ts");


var AUTH_ROUTES = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
];


/***/ }),

/***/ "./src/app/views/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/views/auth/login/login.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/views/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/views/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"core\">\r\n  <div class=\"logo\">\r\n  </div>\r\n  <ui-card>\r\n    <div class=\"ui-progress accent\" [class.hide]=\"!loading\">\r\n      <div class=\"indeterminate\"></div>\r\n    </div>\r\n    <div class=\"page pre-info\">\r\n      <form #preLoginForm=\"ngForm\" class=\"ui-validate on-submit on-dirty\" (submit)=\"login(preLoginForm)\">\r\n        <ui-card-title>Inicie sua sessão</ui-card-title>\r\n        <ui-card-content>\r\n          <ui-input-container>\r\n            <input type=\"email\"\r\n                   name=\"email\"\r\n                   [(ngModel)]=\"info.email\"\r\n                   uiInput\r\n                   required\r\n                   #ngModelEmail=\"ngModel\"\r\n                   email\r\n                   id=\"pre-login-usuario\"\r\n                   class=\"accent\"\r\n                   autofocus>\r\n            <label for=\"pre-login-usuario\">E-mail</label>\r\n            <div class=\"ui-messages\">\r\n              <div *ngIf=\"ngModelEmail.errors && ngModelEmail.dirty\">\r\n                <div class=\"ui-message error\" [hidden]=\"!ngModelEmail.pristine && !ngModelEmail.errors.required\">\r\n                  Use seu e-mail\r\n                </div>\r\n                <div class=\"ui-message error\" [hidden]=\"!ngModelEmail.errors.email\">\r\n                  Use um e-mail válido\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ui-input-container>\r\n\r\n          <ui-input-container>\r\n            <input type=\"password\"\r\n                   name=\"pass\"\r\n                   [(ngModel)]=\"info.pass\"\r\n                   uiInput\r\n                   required\r\n                   #ngModelPass=\"ngModel\"\r\n                   id=\"pass\"\r\n                   class=\"accent\"\r\n                   autofocus>\r\n            <label for=\"pass\">Senha</label>\r\n            <div class=\"ui-messages\">\r\n              <div *ngIf=\"ngModelPass.errors && ngModelPass.dirty\">\r\n                <div class=\"ui-message error\" [hidden]=\"!ngModelPass.pristine && !ngModelPass.errors.required\">\r\n                  Use sua senha\r\n                </div>\r\n                <div class=\"ui-message error\" [hidden]=\"!ngModelPass.pristine && !ngModelPass.errors.wrong\">\r\n                  Usuario ou senha incorretos\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ui-input-container>\r\n\r\n        </ui-card-content>\r\n        <div class=\"ui-button-container cover\">\r\n          <button class=\"ui-button primary full\" uiRipple>Entrar</button>\r\n          <button class=\"ui-button full\" uiRipple routerLink=\"/register\">CADASTRAR</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ui-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/deep/ app-root, :host {\n  height: 100%; }\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #00695C; }\n:host > .core {\n    max-width: 420px;\n    width: 100%; }\n:host > .core .logo {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 16px; }\n:host > .core .logo img {\n        width: 180px; }\n:host > .core ui-card {\n      position: relative;\n      overflow: hidden; }\n:host > .core ui-card .ui-progress {\n        position: absolute; }\n:host > .core ui-card ui-card-title {\n        font-size: 18px;\n        padding: 32px 32px 0; }\n:host > .core ui-card .ui-list li {\n        padding: 0 24px; }\n:host > .core ui-card ui-card-content {\n        padding: 32px; }\n:host > .core ui-card .ui-button-container {\n        padding: 0 32px 32px; }\n:host > .core ui-card .senha-expirada ui-card-content, :host > .core ui-card .bloqueado ui-card-content, :host > .core ui-card .bloqueado-por-horario ui-card-content {\n        padding-top: 16px; }\n:host > .core ui-card .senha-expirada .info-text, :host > .core ui-card .bloqueado .info-text, :host > .core ui-card .bloqueado-por-horario .info-text {\n        margin-bottom: 24px; }\n"

/***/ }),

/***/ "./src/app/views/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_api, _user, _router, _element) {
        this._api = _api;
        this._user = _user;
        this._router = _router;
        this._element = _element;
        this.info = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        event.preventDefault();
        var elementPassword = this._element.nativeElement.querySelector('#pass');
        if (form.invalid || this.loading) {
            form.controls.email.markAsTouched();
            form.controls.email.markAsDirty();
            form.controls.pass.markAsTouched();
            form.controls.pass.markAsDirty();
            // elementPassword.focus();
            return;
        }
        this.loading = true;
        this._api.request('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API + "/login", {
            body: this.info
        }).subscribe(function (response) {
            var content = response.content;
            _this._user.setToken(content.token);
            _this._user.setUser(content.user);
            _this._router.navigate(['/']);
        }, function (err) {
            console.error(err);
            if (err.status = 404) {
                form.controls.pass.setErrors({ wrong: true });
                elementPassword.focus();
            }
        }, function () {
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _core_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/auth/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/auth/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"core\">\r\n  <ui-toolbar class=\"fixed flat primary extend\">\r\n    <button class=\"ui-button flat icon\" type=\"button\" uiRipple [routerLink]=\"['/login']\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </button>\r\n    <span class=\"title\">Cadastro</span>\r\n  </ui-toolbar>\r\n\r\n  <div class=\"ui-s960\">\r\n    <ui-card class=\"elevate-on-toolbar\">\r\n\r\n      <ui-card-content>\r\n        <ui-subheader>Preencha o formulario abaixo:</ui-subheader>\r\n\r\n        <form #formCadastro=\"ngForm\" class=\"ui-validate on-dirty on-submit\">\r\n\r\n          <ui-input-container>\r\n            <input id=\"name\" #inputName=\"ngModel\" type=\"text\"\r\n                   [(ngModel)]=\"info.name\"\r\n                   required\r\n                   uiInput\r\n                   name=\"name\">\r\n            <label for=\"name\">Nome</label>\r\n            <div class=\"ui-messages\">\r\n              <div *ngIf=\"inputName.errors && inputName.dirty\">\r\n                <div class=\"ui-message error\"\r\n                     [hidden]=\"!inputName.pristine && !inputName.errors.required\">\r\n                  Digite seu nome\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ui-input-container>\r\n\r\n          <ui-input-container>\r\n            <input id=\"email\" #inputEmail=\"ngModel\" type=\"email\"\r\n                   [(ngModel)]=\"info.email\"\r\n                   required\r\n                   email\r\n                   uiInput\r\n                   name=\"email\">\r\n            <label for=\"email\">Email</label>\r\n            <div class=\"ui-messages\">\r\n              <div *ngIf=\"inputEmail.errors && inputEmail.dirty\">\r\n                <div class=\"ui-message error\"\r\n                     [hidden]=\"!inputEmail.pristine && !inputEmail.errors.required\">\r\n                  Digite seu email\r\n                </div>\r\n                <div class=\"ui-message error\"\r\n                     [hidden]=\"!inputEmail.pristine && !inputEmail.errors.usedEmail\">\r\n                  Esse email já foi utilizado\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ui-input-container>\r\n\r\n          <ui-input-container>\r\n            <input id=\"pass\" #inputPass=\"ngModel\" type=\"password\"\r\n                   [(ngModel)]=\"info.pass\"\r\n                   required\r\n                   uiInput\r\n                   name=\"pass\">\r\n            <label for=\"pass\">Senha</label>\r\n            <div class=\"ui-messages\">\r\n              <div *ngIf=\"inputPass.errors && inputPass.dirty\">\r\n                <div class=\"ui-message error\"\r\n                     [hidden]=\"!inputPass.pristine && !inputPass.errors.required\">\r\n                  Digite sua senha\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ui-input-container>\r\n\r\n          <ui-input-container>\r\n            <input id=\"phone\" #inputPhone=\"ngModel\" type=\"tel\"\r\n                   [(ngModel)]=\"info.phone\"\r\n                   uiInput\r\n                   name=\"phone\"\r\n                   uiMaskPhone>\r\n            <label for=\"phone\">Telefone</label>\r\n            <div class=\"ui-messages\">\r\n              <div *ngIf=\"inputPhone.errors && inputPhone.dirty\">\r\n                <div class=\"ui-message error\"\r\n                     [hidden]=\"!inputPhone.pristine && !inputPhone.errors.usedPhone\">\r\n                  Esse telefone já foi utilizado\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ui-input-container>\r\n\r\n\r\n        </form>\r\n      </ui-card-content>\r\n    </ui-card>\r\n    <div class=\"ui-fab-container\">\r\n      <a class=\"ui-button primary fab\" uiRipple (click)=\"onSubmit(formCadastro)\">\r\n        <ui-progress-radial class=\"indeterminate\" *ngIf=\"saving\"></ui-progress-radial>\r\n        <i class=\"material-icons\">save</i>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/auth/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/auth/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host .core {\n  width: 100%;\n  height: 100%; }\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n  :host /deep/ ui-toolbar header {\n    height: 162px;\n    padding-bottom: 102px; } }\n"

/***/ }),

/***/ "./src/app/views/auth/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/auth/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_api, _router, _element) {
        this._api = _api;
        this._router = _router;
        this._element = _element;
        this.info = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_4__["UiElement"].focus(this._element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        this._api.request('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API + "/user", {
            body: this.info
        }).subscribe(function (response) {
            _this._router.navigate(['/login']);
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_4__["UiSnackbar"].show({
                text: 'Usuario cadastrado com sucesso'
            });
        }, function (err) {
            if (err.status === 409) {
                if (err.error.executionCode === 1) {
                    form.controls.email.setErrors({ usedEmail: true });
                }
                if (err.error.executionCode === 2) {
                    form.controls.phone.setErrors({ usedPhone: true });
                }
            }
        }, function () {
            // this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/views/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/error/error-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/error/error-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ERROR_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_ROUTES", function() { return ERROR_ROUTES; });
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/views/error/not-found/not-found.component.ts");

var ERROR_ROUTES = [
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"] },
    { path: '**', redirectTo: 'not-found' }
];


/***/ }),

/***/ "./src/app/views/error/error.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/error/error.module.ts ***!
  \*********************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found/not-found.module */ "./src/app/views/error/not-found/not-found.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_1__["NotFoundModule"]
            ],
            declarations: []
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "./src/app/views/error/not-found/not-found.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/error/not-found/not-found.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/error/not-found/not-found.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.component.ts ***!
  \**************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/views/error/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/views/error/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/views/error/not-found/not-found.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.module.ts ***!
  \***********************************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/views/error/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ }),

/***/ "./src/app/views/main/animal/animal.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/main/animal/animal.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s960\">\r\n  <ui-card class=\"elevate-on-toolbar\" [class.loading]=\"loading\">\r\n\r\n    <div class=\"ui-progress\" [class.hide]=\"!loading\">\r\n      <div class=\"indeterminate\"></div>\r\n    </div>\r\n\r\n\r\n    <ui-toolbar class=\"flat\">\r\n      <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n      <span class=\"title\">Animal</span>\r\n    </ui-toolbar>\r\n\r\n\r\n    <app-slide [slide]=\"slide\" [readyToGo]=\"readyToGo\"></app-slide>\r\n\r\n    <ui-tabs class=\"no-padding primary\" #tabAnimal>\r\n      <div class=\"tab selected\" uiRipple (click)=\"animals.pagesGoToPage(1)\">\r\n        Informações\r\n      </div>\r\n      <div class=\"tab\" uiRipple (click)=\"animals.pagesGoToPage(2)\">\r\n        Contato\r\n      </div>\r\n    </ui-tabs>\r\n\r\n    <ui-tabs-pages #animals [tabs]=\"tabAnimal\">\r\n      <div class=\"page\">\r\n        <ui-card-content>\r\n          <header class=\"header-descricao\">\r\n\r\n            <section class=\"header-descricao__item\">\r\n              <span class=\"header-descricao__item__title\">Nome</span>\r\n              <span class=\"header-descricao__item__subtitle\">{{ info.title }}</span>\r\n            </section>\r\n\r\n            <section class=\"header-descricao__item\">\r\n              <span class=\"header-descricao__item__title\">Raça</span>\r\n              <span class=\"header-descricao__item__subtitle\">{{ info.breed }}</span>\r\n            </section>\r\n\r\n            <section class=\"header-descricao__item\">\r\n              <span class=\"header-descricao__item__title\">Idade</span>\r\n              <span class=\"header-descricao__item__subtitle\">{{ info.age }} meses</span>\r\n            </section>\r\n\r\n          </header>\r\n\r\n          <main class=\"content-descricao\">\r\n            <h3 class=\"content-descricao__title\">Descrição</h3>\r\n            <p class=\"content-descricao__description\">{{ info.description }}</p>\r\n          </main>\r\n\r\n        </ui-card-content>\r\n      </div>\r\n      <div class=\"page\">\r\n        <ul class=\"ui-list\">\r\n\r\n          <li class=\"ui-list-item multi-line\">\r\n            <div class=\"icon\">\r\n              <i class=\"material-icons\">phone</i>\r\n            </div>\r\n\r\n            <div class=\"lines\">\r\n\r\n              <div class=\"primary\">Telefone</div>\r\n\r\n              <div class=\"secondary\">{{ info.telefone | uiPhone }}</div>\r\n\r\n            </div>\r\n          </li>\r\n\r\n          <li class=\"ui-list-item multi-line\">\r\n            <div class=\"icon\">\r\n              <i class=\"material-icons\">location_on</i>\r\n            </div>\r\n\r\n            <div class=\"lines\">\r\n\r\n              <div class=\"primary\">Endereço</div>\r\n\r\n              <div class=\"secondary\">{{ info.rua + ', ' + info.numero + ' - ' + info.bairro + ', ' + info.cidade + ' - '\r\n                + info.uf + ', ' + info.cep }}\r\n              </div>\r\n\r\n            </div>\r\n          </li>\r\n\r\n\r\n        </ul>\r\n      </div>\r\n    </ui-tabs-pages>\r\n\r\n  </ui-card>\r\n\r\n  <div style=\"height: 80px;\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/main/animal/animal.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/views/main/animal/animal.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .image-post {\n  height: auto;\n  max-height: 500px; }\n\n.header-descricao {\n  display: flex;\n  justify-content: space-around; }\n\n.header-descricao__item {\n    text-align: center; }\n\n.header-descricao__item__title {\n      display: block;\n      width: 100%;\n      font-weight: 500; }\n\n.header-descricao__item__subtitle {\n      display: block;\n      width: 100%; }\n\n.content-descricao__title {\n  font-weight: 500;\n  font-size: 14px;\n  margin-top: 16px; }\n\n.content-descricao__description {\n  font-size: 14px;\n  margin: 8px 0; }\n"

/***/ }),

/***/ "./src/app/views/main/animal/animal.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/main/animal/animal.component.ts ***!
  \*******************************************************/
/*! exports provided: AnimalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalComponent", function() { return AnimalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnimalComponent = /** @class */ (function () {
    function AnimalComponent(_location, _api, _route, toolbarService) {
        this._location = _location;
        this._api = _api;
        this._route = _route;
        this.toolbarService = toolbarService;
        this.info = {};
    }
    AnimalComponent.prototype.ngOnInit = function () {
        this.get();
    };
    AnimalComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.set('Nova mídia');
        this.toolbarService.activateExtendedToolbar(960);
    };
    AnimalComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    AnimalComponent.prototype.get = function () {
        var _this = this;
        this.loading = true;
        this._api.request('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API + "/animals/" + this._route.snapshot.params.id, {})
            .subscribe(function (res) {
            _this.info = res.content;
        }, function (err) {
            console.error(err);
        }, function () {
            _this.slide = _this.info.images;
            _this.readyToGo = true;
            _this.loading = false;
        });
    };
    AnimalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animal',
            template: __webpack_require__(/*! ./animal.component.html */ "./src/app/views/main/animal/animal.component.html"),
            styles: [__webpack_require__(/*! ./animal.component.scss */ "./src/app/views/main/animal/animal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_5__["UiToolbarService"]])
    ], AnimalComponent);
    return AnimalComponent;
}());



/***/ }),

/***/ "./src/app/views/main/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/main/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s960\">\r\n  <ui-card class=\"elevate-on-toolbar\">\r\n    <div class=\"ui-progress\" [class.hide]=\"!loading\">\r\n      <div class=\"indeterminate\"></div>\r\n    </div>\r\n    <div>\r\n      <ui-tabs class=\"no-padding primary\" #tabs>\r\n        <div class=\"tab selected\" uiRipple (click)=\"tabsPages.pagesGoToPage(1); getAnimals('');\">\r\n          Todos\r\n        </div>\r\n        <div class=\"tab\" uiRipple (click)=\"tabsPages.pagesGoToPage(2); getAnimals('C');\">\r\n          Cachorros\r\n        </div>\r\n        <div class=\"tab\" uiRipple (click)=\"tabsPages.pagesGoToPage(3); getAnimals('G');\">\r\n          Gatos\r\n        </div>\r\n      </ui-tabs>\r\n    </div>\r\n    <div>\r\n      <ui-tabs-pages #tabsPages [tabs]=\"tabs\">\r\n        <div class=\"page\">\r\n          <div *ngIf=\"tabsPages.currentPage === 1\">\r\n            <ui-card-content style=\"padding: 16px 8px\">\r\n              <app-card-animal *ngFor=\"let animal of animals\" [info]=\"animal\"></app-card-animal>\r\n              <p class=\"empty\" *ngIf=\"animals.length === 0\">{{ loading ? 'Carregando...' : 'Não há animais cadastrados' }}</p>\r\n            </ui-card-content>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"page\">\r\n          <div *ngIf=\"tabsPages.currentPage === 2\">\r\n            <ui-card-content>\r\n              <app-card-animal *ngFor=\"let animal of animalsDog\" [info]=\"animal\"></app-card-animal>\r\n              <p class=\"empty\" *ngIf=\"animalsDog.length === 0\">{{ loading ? 'Carregando...' : 'Não há animais cadastrados nessa categoria' }}</p>\r\n            </ui-card-content>\r\n          </div>\r\n        </div>\r\n        <div class=\"page\">\r\n          <div *ngIf=\"tabsPages.currentPage === 3\">\r\n            <ui-card-content>\r\n              <app-card-animal *ngFor=\"let animal of animalsCat\" [info]=\"animal\"></app-card-animal>\r\n              <p class=\"empty\" *ngIf=\"animalsCat.length === 0\">{{ loading ? 'Carregando...' : 'Não há animais cadastrados nessa categoria' }}</p>\r\n            </ui-card-content>\r\n          </div>\r\n        </div>\r\n      </ui-tabs-pages>\r\n    </div>\r\n  </ui-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/main/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/views/main/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .empty {\n  color: rgba(0, 0, 0, 0.62); }\n"

/***/ }),

/***/ "./src/app/views/main/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/main/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
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
    function HomeComponent(_api, toolbarService) {
        this._api = _api;
        this.toolbarService = toolbarService;
        this.animals = [];
        this.animalsDog = [];
        this.animalsCat = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAnimals('');
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.set('Home');
        this.toolbarService.activateExtendedToolbar(960);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    HomeComponent.prototype.getAnimals = function (type) {
        var _this = this;
        this.loading = true;
        this._api.request('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API + "/animals" + (type ? '?tipo=' + type : ''), {})
            .subscribe(function (res) {
            if (type && type.toUpperCase() === 'C') {
                _this.animalsDog = res.content || [];
            }
            else if (type && type.toUpperCase() === 'G') {
                _this.animalsCat = res.content || [];
            }
            else {
                _this.animals = res.content || [];
            }
        }, null, function () {
            _this.loading = false;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_3__["UiToolbarService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/main/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/views/main/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/views/main/home/home.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _core_components_card_animal_card_animal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/components/card-animal/card-animal.module */ "./src/app/core/components/card-animal/card-animal.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _core_components_card_animal_card_animal_module__WEBPACK_IMPORTED_MODULE_3__["CardAnimalModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/views/main/main-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/main/main-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MAIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function() { return MAIN_ROUTES; });
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _core_guard_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/guard/guard.service */ "./src/app/core/guard/guard.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/main/home/home.component.ts");
/* harmony import */ var _animal_animal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animal/animal.component */ "./src/app/views/main/animal/animal.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/views/main/register/register.component.ts");
/* harmony import */ var _my_animals_my_animals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-animals/my-animals.component */ "./src/app/views/main/my-animals/my-animals.component.ts");






var MAIN_ROUTES = [{
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"],
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: 'animal/:id',
                component: _animal_animal_component__WEBPACK_IMPORTED_MODULE_3__["AnimalComponent"]
            },
            {
                path: 'register-animal',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                canActivate: [_core_guard_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]]
            },
            {
                path: 'update-animal/:id',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                canActivate: [_core_guard_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]]
            },
            {
                path: 'my-animals',
                component: _my_animals_my_animals_component__WEBPACK_IMPORTED_MODULE_5__["MyAnimalsComponent"],
                canActivate: [_core_guard_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]]
            }
        ]
    }];


/***/ }),

/***/ "./src/app/views/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/views/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-toolbar class=\"fixed flat elevate-on-scroll primary elevate-on-s960\" id=\"app-header\">\r\n  <button (click)=\"menuOpen = true\" class=\"ui-button flat icon\" uiRipple>\r\n    <i class=\"material-icons\">menu</i>\r\n  </button>\r\n  <div class=\"logo\">\r\n  </div>\r\n  <span class=\"title\">{{ title }}</span>\r\n  <div class=\"align-right\" *ngIf=\"user.name\">\r\n    <div class=\"avatar\"\r\n         [uiMenuTrigger]=\"menuUser\"\r\n         menu-align=\"right\"\r\n         theme-class=\"menu-user\"\r\n         [ngStyle]=\"{'background-image': user.image ? 'url(' + user.image + ')' : '',\r\n                         'background-color': user.image ? 'white' : '#00B59F',\r\n                          'color': 'white'}\">\r\n      <span *ngIf=\"user && !user.image && user.name\">{{user.name.charAt(0)}}</span>\r\n    </div>\r\n  </div>\r\n</ui-toolbar>\r\n\r\n<!-- Add class 'persistent' para deixar o menu persistente, deve também descomentar o código no main.component -->\r\n<ui-nav-drawer [(open)]=\"menuOpen\">\r\n  <ui-toolbar class=\"flat\">\r\n    <button (click)=\"menuOpen = false\" class=\"ui-button flat icon\" uiRipple>\r\n      <i class=\"material-icons\">menu</i>\r\n    </button>\r\n    <div class=\"logo\">\r\n    </div>\r\n  </ui-toolbar>\r\n  <div class=\"ui-nav-drawer-overflow\">\r\n    <div class=\"ui-list\">\r\n      <a class=\"ui-list-item\" uiRipple routerLink=\"/\" [routerLinkActive]=\"['active']\"\r\n         [routerLinkActiveOptions]=\"{ exact: true }\">Home</a>\r\n      <a class=\"ui-list-item\" uiRipple routerLink=\"/register-animal\" [routerLinkActive]=\"['active']\"\r\n         [routerLinkActiveOptions]=\"{ exact: true }\">Cadastrar animal</a>\r\n      <a class=\"ui-list-item\" uiRipple routerLink=\"/my-animals\" [routerLinkActive]=\"['active']\"\r\n         [routerLinkActiveOptions]=\"{ exact: true }\">Meus animais</a>\r\n    </div>\r\n  </div>\r\n</ui-nav-drawer>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<ui-menu #menuUser>\r\n  <header>\r\n    <div class=\"avatar\"\r\n         [uiMenuTrigger]=\"menuUser\"\r\n         menu-align=\"right\"\r\n         [ngStyle]=\"{'background-image': user.image ? 'url(' + user.image + ')' : '',\r\n                         'background-color': user.image ? 'white' : '#00B59F',\r\n                         'color': '#FFF'}\">\r\n      <span *ngIf=\"!user.image\">{{user.name?.charAt(0)}}</span>\r\n    </div>\r\n    <div class=\"primary-text\">{{user.name}}</div>\r\n  </header>\r\n  <div class=\"ui-menu-content size-3x\">\r\n    <div class=\"ui-menu-item\" uiRipple (click)=\"logoff()\">\r\n      Sair\r\n    </div>\r\n  </div>\r\n</ui-menu>\r\n"

/***/ }),

/***/ "./src/app/views/main/main.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/main/main.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > /deep/ ui-nav-drawer ui-list .ui-list {\n  padding: 0; }\n\n:host > ui-toolbar .avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  margin: 12px;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n/deep/ .menu-user header {\n  display: flex;\n  align-items: center; }\n\n/deep/ .menu-user .avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  margin: 12px;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n"

/***/ }),

/***/ "./src/app/views/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/api/api.service */ "./src/app/core/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainComponent = /** @class */ (function () {
    function MainComponent(_user, _router, toolbarService, _api) {
        this._user = _user;
        this._router = _router;
        this.toolbarService = toolbarService;
        this._api = _api;
        this.title = 'Home';
        this.user = {};
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
        this.toolbarService.change.subscribe(function (title) {
            _this.title = title;
        });
    };
    MainComponent.prototype.logoff = function () {
        this._router.navigate(['/login']);
        this._user.remove();
    };
    MainComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._user.getUser().subscribe(function (res) {
            _this.user = res;
        });
        if (!Object.keys(this.user).length) {
            var cookies = this._user.getCookie().authentication;
            this._api.request('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API + "/refazer/" + cookies, {})
                .subscribe(function (res) {
                _this._user.setUser(res.content.user);
            });
        }
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/views/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/views/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_3__["UiToolbarService"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/views/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ "./src/app/views/main/home/home.module.ts");
/* harmony import */ var _animal_animal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animal/animal.component */ "./src/app/views/main/animal/animal.component.ts");
/* harmony import */ var _core_components_slide_slide_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/slide/slide.module */ "./src/app/core/components/slide/slide.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/views/main/register/register.component.ts");
/* harmony import */ var _my_animals_my_animals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-animals/my-animals.component */ "./src/app/views/main/my-animals/my-animals.component.ts");
/* harmony import */ var _core_components_card_animal_card_animal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/components/card-animal/card-animal.module */ "./src/app/core/components/card-animal/card-animal.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
                _core_components_slide_slide_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"],
                _core_components_card_animal_card_animal_module__WEBPACK_IMPORTED_MODULE_8__["CardAnimalModule"]
            ],
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _animal_animal_component__WEBPACK_IMPORTED_MODULE_4__["AnimalComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _my_animals_my_animals_component__WEBPACK_IMPORTED_MODULE_7__["MyAnimalsComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/views/main/my-animals/my-animals.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/my-animals/my-animals.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s960\">\n  <ui-card class=\"elevate-on-toolbar\">\n    <div class=\"ui-progress\" [class.hide]=\"!loading\">\n      <div class=\"indeterminate\"></div>\n    </div>\n\n\n    <ui-toolbar class=\"flat\">\n      <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\n        <i class=\"material-icons\">arrow_back</i>\n      </button>\n      <span class=\"title\">Meus animais</span>\n    </ui-toolbar>\n\n      <ui-card-content style=\"padding: 16px 8px\">\n        <app-card-animal *ngFor=\"let animal of animals\" [info]=\"animal\" [editing]=\"true\"></app-card-animal>\n      </ui-card-content>\n\n\n  </ui-card>\n</div>\n"

/***/ }),

/***/ "./src/app/views/main/my-animals/my-animals.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/my-animals/my-animals.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main/my-animals/my-animals.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/main/my-animals/my-animals.component.ts ***!
  \***************************************************************/
/*! exports provided: MyAnimalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAnimalsComponent", function() { return MyAnimalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyAnimalsComponent = /** @class */ (function () {
    function MyAnimalsComponent(toolbarService, _api, _user, _location) {
        this.toolbarService = toolbarService;
        this._api = _api;
        this._user = _user;
        this._location = _location;
    }
    MyAnimalsComponent.prototype.ngOnInit = function () {
        this.getMyAnimals();
    };
    MyAnimalsComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.set('Meus animais');
        this.toolbarService.activateExtendedToolbar(960);
    };
    MyAnimalsComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    MyAnimalsComponent.prototype.getMyAnimals = function () {
        var _this = this;
        this.loading = true;
        this._api.request('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/myanimals", {
            headers: {
                authentication: this._user.getToken()
            }
        })
            .subscribe(function (res) {
            _this.animals = res.content;
        }, function (err) {
            console.error(err);
        }, function () {
            _this.loading = false;
        });
    };
    MyAnimalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-animals',
            template: __webpack_require__(/*! ./my-animals.component.html */ "./src/app/views/main/my-animals/my-animals.component.html"),
            styles: [__webpack_require__(/*! ./my-animals.component.scss */ "./src/app/views/main/my-animals/my-animals.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _core_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], MyAnimalsComponent);
    return MyAnimalsComponent;
}());



/***/ }),

/***/ "./src/app/views/main/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/main/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s960\">\r\n  <ui-card class=\"elevate-on-toolbar\" [class.loading]=\"loading\">\r\n\r\n    <div class=\"ui-progress\" [class.hide]=\"!loading\">\r\n      <div class=\"indeterminate\"></div>\r\n    </div>\r\n\r\n\r\n    <ui-toolbar class=\"flat\">\r\n      <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n      <span class=\"title\">{{ addingNew ? 'Cadastrar animal' : 'Alterando animal' }}</span>\r\n    </ui-toolbar>\r\n\r\n\r\n    <ui-card-content>\r\n      <fieldset [disabled]=\"saving || loading\">\r\n        <form #form=\"ngForm\" class=\"ui-validate on-dirty on-submit\">\r\n\r\n          <section class=\"images\">\r\n\r\n            <div class=\"images__wrapper\"\r\n                 *ngFor=\"let image of info.images; let index = index\"\r\n                 [hidden]=\"image.removed\">\r\n\r\n              <div class=\"images__image\">\r\n                <img class=\"images__src\" [src]=\"image.path ? PATH + image.path : image.base64\"/>\r\n              </div>\r\n              <div class=\"images__remove\" (click)=\"removeImage(index)\">\r\n                <i class=\"material-icons\">remove</i>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"images__wrapper\">\r\n              <div class=\"images__image\" (click)=\"openExplorer()\">\r\n                <div class=\"images__add\">\r\n                  <i class=\"material-icons\">add</i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <input type=\"file\"\r\n                   name=\"input\"\r\n                   uiInputFile\r\n                   [(ngModel)]=\"info.imagemPath\"\r\n                   [read]=\"changeImagem.bind(this)\"\r\n                   [error]=\"changeImagemError.bind(this)\"\r\n                   #inputNovaImagem\r\n                   #fieldNovaImagem=\"ngModel\"\r\n                   accept=\"jpg,jpeg,png\"\r\n                   max-file-size=\"15MB\"\r\n                   hidden>\r\n\r\n          </section>\r\n\r\n          <div class=\"ui-flex-container break-on-s960\">\r\n\r\n            <ui-input-container>\r\n              <input id=\"title\" #inputTitle=\"ngModel\" type=\"text\"\r\n                     [(ngModel)]=\"info.title\"\r\n                     uiInput\r\n                     name=\"title\"\r\n                     required>\r\n              <label for=\"title\">Nome</label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputTitle.errors && inputTitle.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputTitle.pristine && !inputTitle.errors.required\">\r\n                    Digite o nome\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n          </div>\r\n\r\n          <div class=\"ui-flex-container break-on-s960\">\r\n\r\n            <ui-input-container>\r\n            <textarea id=\"descricao\" [(ngModel)]=\"info.description\" name=\"descricao\"\r\n                      rows=\"1\" uiInput\r\n                      autosize\r\n                      uiMaxlength=\"1000\"\r\n                      required\r\n                      #inputDescricao=\"ngModel\"></textarea>\r\n              <label for=\"descricao\">Descrição</label>\r\n              <div class=\"ui-messages\">\r\n\r\n                <div *ngIf=\"inputDescricao.errors && inputDescricao.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputDescricao.pristine && !inputDescricao.errors.required\">\r\n                    Digite uma descrição\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"ui-message counter\"\r\n                     [class.error]=\"inputDescricao.errors && inputDescricao.errors.uiMaxlength\">\r\n                  {{info.description ? info.description.length : 0}}/1000\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n          </div>\r\n\r\n          <div class=\"ui-flex-container break-on-s960\">\r\n\r\n            <ui-input-container>\r\n              <ui-select #inputType=\"ngModel\"\r\n                         name=\"type\"\r\n                         [(ngModel)]=\"info.type\"\r\n                         [options]=\"typeOptions.registros\"\r\n                         value=\"id\"\r\n                         label=\"nome\"\r\n                         uiInput\r\n                         required\r\n                         id=\"type\"></ui-select>\r\n              <label for=\"type\">\r\n                {{ !typeOptions.carregando && typeOptions.carregado ? 'Tipo' : 'Carregando tipos'}}\r\n              </label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputType.errors && inputType.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputType.pristine && !inputType.errors.required\">\r\n                    Escolha um tipo\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n            <ui-input-container>\r\n              <ui-select #inputSexo=\"ngModel\"\r\n                         name=\"sexo\"\r\n                         [(ngModel)]=\"info.sexo\"\r\n                         [options]=\"sexoOptions.registros\"\r\n                         value=\"id\"\r\n                         label=\"nome\"\r\n                         uiInput\r\n                         required\r\n                         id=\"sexo\"></ui-select>\r\n              <label for=\"type\">\r\n                {{ !sexoOptions.carregando && sexoOptions.carregado ? 'Sexo' : 'Carregando sexos'}}\r\n              </label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputSexo.errors && inputSexo.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputSexo.pristine && !inputSexo.errors.required\">\r\n                    Selecione o sexo\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n            <ui-input-container>\r\n              <input id=\"age\" #inputAge=\"ngModel\" type=\"text\"\r\n                     [(ngModel)]=\"info.age\"\r\n                     uiInput\r\n                     uiMaskInteger\r\n                     placeholder=\"Em meses\"\r\n                     name=\"age\"\r\n                     required>\r\n              <label for=\"age\">Idade</label>\r\n\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputAge.errors && inputAge.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputAge.pristine && !inputAge.errors.required\">\r\n                    Digite a idade\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n          </div>\r\n\r\n          <div class=\"ui-flex-container break-on-s960\">\r\n\r\n            <ui-input-container>\r\n              <ui-select #inputPorte=\"ngModel\"\r\n                         name=\"porte\"\r\n                         [(ngModel)]=\"info.porte\"\r\n                         [options]=\"porteOptions.registros\"\r\n                         value=\"id\"\r\n                         label=\"nome\"\r\n                         uiInput\r\n                         required\r\n                         id=\"porte\"></ui-select>\r\n              <label for=\"type\">\r\n                {{ !porteOptions.carregando && porteOptions.carregado ? 'Porte' : 'Carregando portes'}}\r\n              </label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputPorte.errors && inputPorte.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputPorte.pristine && !inputPorte.errors.required\">\r\n                    Selecione o porte\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n            <ui-input-container>\r\n              <ui-select #inputBreed=\"ngModel\"\r\n                         name=\"type\"\r\n                         [(ngModel)]=\"info.breed\"\r\n                         [options]=\"breedOptions.registros\"\r\n                         value=\"id\"\r\n                         label=\"nome\"\r\n                         uiInput\r\n                         required\r\n                         id=\"breed\"></ui-select>\r\n              <label for=\"type\">\r\n                {{ !breedOptions.carregando && breedOptions.carregado ? 'Raça' : 'Carregando raças'}}\r\n              </label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputBreed.errors && inputBreed.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputBreed.pristine && !inputBreed.errors.required\">\r\n                    Selecione a raça\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n            <ui-input-container>\r\n              <ui-select #inputTemperament=\"ngModel\"\r\n                         name=\"type\"\r\n                         [(ngModel)]=\"info.temperament\"\r\n                         [options]=\"temperamentOptions.registros\"\r\n                         value=\"id\"\r\n                         label=\"nome\"\r\n                         uiInput\r\n                         required\r\n                         id=\"temperament\"></ui-select>\r\n              <label for=\"type\">\r\n                {{ !temperamentOptions.carregando && temperamentOptions.carregado ? 'Temperamento' : 'Carregando\r\n                temperamentos' }}\r\n              </label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputTemperament.errors && inputTemperament.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputTemperament.pristine && !inputTemperament.errors.required\">\r\n                    Selecione o temperamento\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n          </div>\r\n\r\n          <ui-subheader>Informações de contato</ui-subheader>\r\n          <div class=\"ui-flex-container break-on-s960\">\r\n\r\n            <ui-input-container>\r\n              <input id=\"cep\" #inputCep=\"ngModel\" type=\"text\"\r\n                     [(ngModel)]=\"info.cep\"\r\n                     uiInput\r\n                     uiMaskCep\r\n                     name=\"cep\"\r\n                     required>\r\n              <label for=\"cep\">CEP</label>\r\n              <div class=\"icon\">\r\n                <i class=\"material-icons\">search</i>\r\n              </div>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputCep.errors && inputCep.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputCep.pristine && !inputCep.errors.required\">\r\n                    Digite o CEP\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n            <ui-input-container>\r\n              <input id=\"rua\" #inputRua=\"ngModel\" type=\"text\"\r\n                     [(ngModel)]=\"info.rua\"\r\n                     uiInput\r\n                     name=\"rua\"\r\n                     required>\r\n              <label for=\"rua\">Rua</label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputRua.errors && inputRua.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputRua.pristine && !inputRua.errors.required\">\r\n                    Digite o CEP\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n            <ui-input-container>\r\n              <input id=\"numero\" #inputNumero=\"ngModel\" type=\"text\"\r\n                     [(ngModel)]=\"info.numero\"\r\n                     uiInput\r\n                     name=\"numero\"\r\n                     required>\r\n              <label for=\"numero\">Numero</label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputNumero.errors && inputNumero.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputNumero.pristine && !inputNumero.errors.required\">\r\n                    Digite o CEP\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n          </div>\r\n\r\n          <div class=\"ui-flex-container break-on-s960\">\r\n\r\n            <ui-input-container>\r\n              <input id=\"bairro\" #inputBairro=\"ngModel\" type=\"text\"\r\n                     [(ngModel)]=\"info.bairro\"\r\n                     uiInput\r\n                     name=\"bairro\"\r\n                     required>\r\n              <label for=\"bairro\">Bairro</label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputBairro.errors && inputBairro.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputBairro.pristine && !inputBairro.errors.required\">\r\n                    Digite o CEP\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n            <ui-input-container>\r\n              <input id=\"cidade\" #inputCidade=\"ngModel\" type=\"text\"\r\n                     [(ngModel)]=\"info.cidade\"\r\n                     uiInput\r\n                     name=\"cidade\"\r\n                     required>\r\n              <label for=\"cidade\">Cidade</label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputCidade.errors && inputCidade.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputCidade.pristine && !inputCidade.errors.required\">\r\n                    Digite o CEP\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n            <ui-input-container>\r\n              <input id=\"uf\" #inputUf=\"ngModel\" type=\"text\"\r\n                     [(ngModel)]=\"info.uf\"\r\n                     uiInput\r\n                     name=\"uf\"\r\n                     required>\r\n              <label for=\"uf\">UF</label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputUf.errors && inputUf.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputUf.pristine && !inputUf.errors.required\">\r\n                    Digite o CEP\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n          </div>\r\n\r\n          <div class=\"ui-flex-container break-on-s960\">\r\n\r\n            <ui-input-container>\r\n              <input id=\"telefone\" #inputTelefone=\"ngModel\" type=\"text\"\r\n                     uiMaskPhone\r\n                     [(ngModel)]=\"info.telefone\"\r\n                     uiInput\r\n                     name=\"telefone\"\r\n                     required>\r\n              <label for=\"telefone\">Telefone de contato</label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"inputTelefone.errors && inputTelefone.dirty\">\r\n                  <div class=\"ui-message error\"\r\n                       [hidden]=\"!inputTelefone.pristine && !inputTelefone.errors.required\">\r\n                    Digite o telefone\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n          </div>\r\n\r\n        </form>\r\n      </fieldset>\r\n    </ui-card-content>\r\n\r\n\r\n  </ui-card>\r\n\r\n  <div class=\"ui-fab-container\">\r\n    <button class=\"ui-button success fab\" uiRipple type=\"button\"\r\n            (click)=\"onSubmit(form)\">\r\n      <ui-progress-radial class=\"indeterminate\" *ngIf=\"saving\"></ui-progress-radial>\r\n      <i class=\"material-icons\">check</i>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div style=\"height: 80px\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/main/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/main/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host .images {\n  display: flex;\n  flex-wrap: wrap; }\n:host .images__wrapper {\n    width: 25%;\n    max-width: 25%;\n    min-height: 150px;\n    max-height: 150px;\n    padding: 8px;\n    position: relative; }\n:host .images__image {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #212121; }\n:host .images__add {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer; }\n:host .images__add i {\n      font-size: 48px;\n      color: #FFFFFF; }\n:host .images__remove {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 24px;\n    width: 24px;\n    font-size: 16px;\n    right: 16px;\n    top: 16px;\n    background-color: #D50000;\n    border-radius: 50%;\n    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.14), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    cursor: pointer; }\n:host .images__remove i {\n      font-size: 18px; }\n:host .images__src {\n    max-height: 100%; }\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n  :host .images__wrapper {\n    width: 50%;\n    max-width: 50%; } }\n"

/***/ }),

/***/ "./src/app/views/main/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/main/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(toolbarService, _location, element, _api, _user, router, _route) {
        this.toolbarService = toolbarService;
        this._location = _location;
        this.element = element;
        this._api = _api;
        this._user = _user;
        this.router = router;
        this._route = _route;
        this.PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].PATH_ANIMAL_IMAGES;
        this.info = {
            images: []
        };
        this.typeOptions = {
            registros: [
                { id: 'C', nome: 'Cachorro' },
                { id: 'G', nome: 'Gato' }
            ]
        };
        this.sexoOptions = {
            registros: [
                { id: true, nome: 'Macho' },
                { id: false, nome: 'Femea' }
            ]
        };
        this.porteOptions = {
            registros: [
                { id: 1, nome: 'Pequeno' },
                { id: 2, nome: 'Grande' }
            ]
        };
        this.breedOptions = {
            registros: [
                { id: 1, nome: 'Vira-lata' },
                { id: 2, nome: 'PitBull' }
            ]
        };
        this.temperamentOptions = {
            registros: [
                { id: 1, nome: 'Calmo' },
                { id: 2, nome: 'Agressivo' }
            ]
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this._route.snapshot.params['id']) {
            this.addingNew = false;
            this.getAnimal();
        }
        else {
            this.addingNew = true;
        }
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.set('Cadastrar animal');
        this.toolbarService.activateExtendedToolbar(960);
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    RegisterComponent.prototype.openExplorer = function () {
        this.inputNovaImagem.nativeElement.click();
    };
    RegisterComponent.prototype.changeImagem = function (file, base64) {
        this.info.images.push({
            base64: base64,
            adding: true
        });
    };
    RegisterComponent.prototype.changeImagemError = function (file, customError) {
        if (customError.type) {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiSnackbar"].show({
                text: 'Escolha um arquivo JPG, JPEG ou PNG',
                actionText: 'OK',
                action: function (close) { return close(); }
            });
        }
        else if (customError.maxFileSize) {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiSnackbar"].show({
                text: 'Escolha um arquivo menor que 15MB',
                actionText: 'OK',
                action: function (close) { return close(); }
            });
        }
        else {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiSnackbar"].show({
                text: 'Não foi possível trocar a imagem',
                actionText: 'OK',
                action: function (close) { return close(); },
                duration: Infinity
            });
        }
    };
    RegisterComponent.prototype.removeImage = function (index) {
        if (this.info.images[index].path) {
            this.info.images[index].removed = true;
        }
        else {
            this.info.images.splice(index, 1);
        }
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        if (!this.saving) {
            this.saving = true;
            for (var control in form.controls) {
                if (form.controls.hasOwnProperty(control)) {
                    form.controls[control].markAsTouched();
                    form.controls[control].markAsDirty();
                }
            }
            if (!form.valid) {
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiElement"].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
                this.saving = false;
                return false;
            }
            this.correction();
            if (this.addingNew) {
                this.register();
            }
            else {
                this.update();
            }
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this._api.request('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/animals", {
            body: this.info,
            headers: {
                authentication: this._user.getToken()
            }
        })
            .subscribe(function (res) {
            _this.router.navigate(['/my-animals']);
        }, function (err) {
            console.error(err);
        }, function () {
            _this.saving = false;
        });
    };
    RegisterComponent.prototype.update = function () {
        var _this = this;
        this._api.request('PUT', _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/animals/" + this._route.snapshot.params['id'], {
            body: this.info,
            headers: {
                authentication: this._user.getToken()
            }
        })
            .subscribe(function (res) {
            _this.router.navigate(['/my-animals']);
        }, function (err) {
            console.error(err);
        }, function () {
            _this.saving = false;
        });
    };
    RegisterComponent.prototype.correction = function () {
        this.info.cep = Object(util__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(this.info.cep) ? this.info.cep : parseInt(this.info.cep.replace('-', ''), 10);
        this.info.age = parseInt(this.info.age, 10);
        this.info.numero = this.info.numero.toString();
    };
    RegisterComponent.prototype.getAnimal = function () {
        var _this = this;
        this.loading = true;
        this._api.request('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/animals/" + this._route.snapshot.params.id, {})
            .subscribe(function (res) {
            _this.info = res.content;
        }, function (err) {
            console.error(err);
        }, function () {
            _this.loading = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputNovaImagem'),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "inputNovaImagem", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/main/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/views/main/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _core_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
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
var environment = {
    production: false,
    // API: 'http://192.168.55.252:5010',
    // API: 'http://172.20.196.72:5010',
    API: 'http://192.168.1.5:5010',
    system: 'MiAuDote',
    PATH_ANIMAL_IMAGES: '/images/photos_animals/',
    URL: 'localhost:5000'
};


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

module.exports = __webpack_require__(/*! C:\Users\GABRIEL\Documents\projects\tg-social-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map