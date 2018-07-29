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

module.exports = "<router-outlet></router-outlet>\r\n"

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
        console.log(user);
        return user.id ? true : this.remake();
    };
    GuardService.prototype.remake = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cookies = _this._user.getCookie().authentication;
            console.log(cookies);
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
                console.log('Complete');
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
        this.user = {};
        this.COOKIE_NAME = {
            authentication: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].system + "Authentication"
        };
    }
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.setUser = function (user) {
        this.user = user;
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

var AUTH_ROUTES = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] }
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
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]]
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

module.exports = "<div class=\"core\">\r\n  <div class=\"logo\">\r\n    <!--<img src=\"../../../../assets/images/logo-acif-white.svg\" alt=\"Acif logo\" title=\"Acif logo\">-->\r\n  </div>\r\n  <ui-card>\r\n    <div class=\"ui-progress accent\" [class.hide]=\"!loading\">\r\n      <div class=\"indeterminate\"></div>\r\n    </div>\r\n      <div class=\"page pre-info\">\r\n        <form #preLoginForm=\"ngForm\" class=\"ui-validate on-submit on-dirty\" (submit)=\"login()\">\r\n          <ui-card-title>Inicie sua sessão</ui-card-title>\r\n          <ui-card-content>\r\n            <ui-input-container>\r\n              <input type=\"email\"\r\n                     name=\"usuario\"\r\n                     [(ngModel)]=\"info.email\"\r\n                     uiInput\r\n                     required\r\n                     #ngModelEmail=\"ngModel\"\r\n                     email\r\n                     id=\"pre-login-usuario\"\r\n                     class=\"accent\"\r\n                     autofocus>\r\n              <label for=\"pre-login-usuario\">E-mail</label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"ngModelEmail.errors && ngModelEmail.dirty\">\r\n                  <div class=\"ui-message error\" [hidden]=\"!ngModelEmail.pristine && !ngModelEmail.errors.required\">\r\n                    Use seu e-mail\r\n                  </div>\r\n                  <div class=\"ui-message error\" [hidden]=\"!ngModelEmail.errors.email\">\r\n                    Use um e-mail válido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n            <ui-input-container>\r\n              <input type=\"password\"\r\n                     name=\"pass\"\r\n                     [(ngModel)]=\"info.pass\"\r\n                     uiInput\r\n                     required\r\n                     #ngModelPass=\"ngModel\"\r\n                     id=\"pass\"\r\n                     class=\"accent\"\r\n                     autofocus>\r\n              <label for=\"pass\">Senha</label>\r\n              <div class=\"ui-messages\">\r\n                <div *ngIf=\"ngModelPass.errors && ngModelPass.dirty\">\r\n                  <div class=\"ui-message error\" [hidden]=\"!ngModelPass.pristine && !ngModelPass.errors.required\">\r\n                    Use sua senha\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ui-input-container>\r\n\r\n          </ui-card-content>\r\n          <div class=\"ui-button-container cover\">\r\n            <button class=\"ui-button accent full\" uiRipple>Entrar</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n  </ui-card>\r\n</div>\r\n"

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
    function LoginComponent(_api, _user, _router) {
        this._api = _api;
        this._user = _user;
        this._router = _router;
        this.info = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API);
        // this.login();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        event.preventDefault();
        this._api.request('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API + "/login", {
            body: this.info
        }).subscribe(function (response) {
            var content = response.content;
            _this._user.setToken(content.token);
            _this._user.setUser(content.user);
            _this._router.navigate(['/']);
        }, function (err) {
            console.log(err);
        }, function () {
            console.log('Concluido');
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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
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

/***/ "./src/app/views/main/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/main/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/main/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/views/main/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]]
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



var MAIN_ROUTES = [{
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"],
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
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

module.exports = "<ui-toolbar class=\"fixed flat elevate-on-scroll primary elevate-on-s960\" id=\"app-header\">\r\n  <button (click)=\"menuOpen = true\" class=\"ui-button flat icon\" uiRipple>\r\n    <i class=\"material-icons\">menu</i>\r\n  </button>\r\n  <div class=\"logo\">\r\n    <!--<img src=\"assets/images/logo-acif-white.svg\" alt=\"Acif lofo\" title=\"Acif logo\">-->\r\n  </div>\r\n  <span class=\"title\">{{ title }}</span>\r\n  <div class=\"align-right\">\r\n    <div class=\"avatar\"\r\n         [uiMenuTrigger]=\"menuUser\"\r\n         menu-align=\"right\"\r\n         theme-class=\"menu-user\"\r\n         [ngStyle]=\"{'background-image': user.image ? 'url(' + user.image + ')' : '',\r\n                         'background-color': user.image ? 'white' : '#00B59F',\r\n                          'color': 'white'}\">\r\n      <span *ngIf=\"user && !user.image && user.name\">{{user.name.charAt(0)}}</span>\r\n    </div>\r\n  </div>\r\n</ui-toolbar>\r\n\r\n<!-- Add class 'persistent' para deixar o menu persistente, deve também descomentar o código no main.component -->\r\n<ui-nav-drawer [(open)]=\"menuOpen\">\r\n  <ui-toolbar class=\"flat\">\r\n    <button (click)=\"menuOpen = false\" class=\"ui-button flat icon\" uiRipple>\r\n      <i class=\"material-icons\">menu</i>\r\n    </button>\r\n    <div class=\"logo\">\r\n      <!--<img src=\"assets/images/logo-acif.svg\" alt=\"Acif logo\" title=\"Acif logo\">-->\r\n    </div>\r\n  </ui-toolbar>\r\n  <div class=\"ui-nav-drawer-overflow\">\r\n    <div class=\"ui-list\">\r\n      <a class=\"ui-list-item\" uiRipple routerLink=\"/\" [routerLinkActive]=\"['active']\"\r\n         [routerLinkActiveOptions]=\"{ exact: true }\">Home</a>\r\n    </div>\r\n  </div>\r\n</ui-nav-drawer>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<ui-menu #menuUser>\r\n  <header>\r\n    <div class=\"avatar\"\r\n         [uiMenuTrigger]=\"menuUser\"\r\n         menu-align=\"right\"\r\n         [ngStyle]=\"{'background-image': user.image ? 'url(' + user.image + ')' : '',\r\n                         'background-color': user.image ? 'white' : '#00B59F',\r\n                         'color': '#FFF'}\">\r\n      <span *ngIf=\"!user.image\">{{user.name?.charAt(0)}}</span>\r\n    </div>\r\n    <div class=\"primary-text\">{{user.name}}</div>\r\n  </header>\r\n  <div class=\"ui-menu-content size-3x\">\r\n    <div class=\"ui-menu-item\" uiRipple (click)=\"logoff()\">\r\n      Sair\r\n    </div>\r\n  </div>\r\n</ui-menu>\r\n"

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
    function MainComponent(_user, _router) {
        this._user = _user;
        this._router = _router;
        this.title = 'Home';
        this.user = this._user.getUser();
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.logoff = function () {
        this._router.navigate(['/login']);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/views/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/views/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
                _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]
            ],
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]]
        })
    ], MainModule);
    return MainModule;
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
    production: false,
    API: 'http://localhost:5010',
    system: 'MiAuDote'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Users\GABRIEL\Documents\projects\tg-social-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map