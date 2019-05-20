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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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

module.exports = "<app-navbar></app-navbar>\n<router-outlet> </router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lookAfter';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image-slider/image-slider.component */ "./src/app/image-slider/image-slider.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _user_form_user_form_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-form/user-form.service */ "./src/app/user-form/user-form.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

























// Add an icon to the library for convenient access in other components
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faBaby"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faArrowCircleLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faArrowCircleRight"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faFacebook"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faYoutube"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__["UserFormComponent"],
                _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_13__["ImageSliderComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__["CollapseModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot(),
            ],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__["UserFormComponent"]],
            providers: [_user_form_user_form_service__WEBPACK_IMPORTED_MODULE_20__["UserFormService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron mb-0\" style=\"min-height: 63vh\">\n  <div class=\"container text-center text-wrap\" style=\"font-size:1.6em\">\n    <h1 class=\"schoolbell font-weight-bold\">Available soon 👶🏿</h1>\n    <p class=\"overlock\" *ngIf=\"!(user && user.fullName && user.createAt)\">\n      Don't worry, soon we will be here with the best products to you!!!\n    </p>\n    <span>😉</span>\n    <p class=\"overlock\" *ngIf=\"user && user.fullName && user.createAt\">\n      Hey <strong>{{ user.fullName }}</strong\n      >, in <strong>{{ user.createAt | date }}</strong> you created your account\n      and guaranteed your access to our great products. Soon it will be here for\n      you\n    </p>\n    <span> 😊🎉🎊</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.user = localStorage.getItem('user');
        this.user = this.user ? JSON.parse(this.user) : undefined;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer page-footer bg-secondary\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row justify-content-center align-items-center my-3 py-2\">\n          <a href=\"https://www.fb.com\" target=\"_blank\">\n            <fa-icon\n              class=\"text-white mx-3 hover-shadow-box-animation\"\n              size=\"2x\"\n              [icon]=\"['fab', 'facebook']\"\n            ></fa-icon>\n          </a>\n          <a href=\"https://www.instagram.com\" target=\"_blank\">\n            <fa-icon\n              class=\"text-white mx-3 hover-shadow-box-animation\"\n              size=\"2x\"\n              [icon]=\"['fab', 'instagram']\"\n            ></fa-icon>\n          </a>\n          <a href=\"https://www.youtube.com\" target=\"_blank\">\n            <fa-icon\n              class=\"text-white mx-3 hover-shadow-box-animation\"\n              size=\"2x\"\n              [icon]=\"['fab', 'youtube']\"\n            ></fa-icon>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"footer-copyright \" style=\"background-color: #535353\">\n    <div class=\"container text-center py-3\">\n      © {{ year }} Copyright:\n      <span>Look After</span>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hover-shadow-box-animation {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n          transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px transparent;\n  transition-duration: 0.3s;\n  transition-property: box-shadow, -webkit-transform;\n  transition-property: box-shadow, transform;\n  transition-property: box-shadow, transform, -webkit-transform; }\n\n.hover-shadow-box-animation:hover,\n.hover-shadow-box-animation:focus,\n.hover-shadow-box-animation:active {\n  box-shadow: 1px 10px 10px -10px rgba(0, 0, 24, 0.5);\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hlbnJpcXVlL0RvY3VtZW50cy9GQy1MQS9sb29rQWZ0ZXIvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpREFBeUM7VUFBekMseUNBQXlDO0VBQ3pDLCtCQUErQjtFQUUvQix5QkFBeUI7RUFDekIsa0RBQTBDO0VBQTFDLDBDQUEwQztFQUExQyw2REFBMEMsRUFBQTs7QUFFNUM7OztFQUdFLG1EQUFtRDtFQUNuRCw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdmVyLXNoYWRvdy1ib3gtYW5pbWF0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCB0cmFuc3BhcmVudDtcbiAgLy8gICBtYXJnaW46IDEwcHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcbn1cbi5ob3Zlci1zaGFkb3ctYm94LWFuaW1hdGlvbjpob3Zlcixcbi5ob3Zlci1zaGFkb3ctYm94LWFuaW1hdGlvbjpmb2N1cyxcbi5ob3Zlci1zaGFkb3ctYm94LWFuaW1hdGlvbjphY3RpdmUge1xuICBib3gtc2hhZG93OiAxcHggMTBweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMjQsIDAuNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"min-vh-60 bg-transparent d-flex justify-content-center align-items-center\"\n  style=\"min-height: 60vh\"\n>\n  <img\n    class=\"h-100 w-100 image image-cover description-image\"\n    style=\"object-position: unset!important;\"\n    src=\"./assets/img/description.jpg\"\n  />\n  <div class=\"h-100 container text-center bg-transparent\">\n    <h1 class=\"schoolbell font-weight-bold\">\n      <fa-icon icon=\"baby\" class=\"px-1\"></fa-icon>Look After\n    </h1>\n    <h5 class=\"overlock\">\n      Be welcome to our website, here you will find the best products for your\n      need! <br />\n      We have the best quality for the best price\n    </h5>\n  </div>\n</div>\n<div\n  class=\"min-vh-60 row justify-content-center align-items-center mx-0 px-4 bg-secondary\"\n  style=\"min-height: 70vh\"\n  id=\"products\"\n>\n  <app-image-slider class=\"h-100\" [imagesInitial]=\"products\"></app-image-slider>\n</div>\n<div\n  #contact\n  class=\"vh-20 bg-light d-flex justify-content-center align-items-center\"\n  style=\"min-height: 30vh\"\n  id=\"contact\"\n>\n  <div class=\"h-100 container text-center\">\n    <div class=\"row justify-content-center my-1\">\n      <h1\n        class=\"border-bottom border-info hover-underline-animation text-dark overlock\"\n      >\n        Contact Us\n      </h1>\n    </div>\n    <div class=\"row justify-content-around my-1 mx-5 px-5\">\n      <div>\n        <h5\n          class=\"w-100 border-bottom border-info overlock hover-underline-animation text-dark\"\n        >\n          Email\n        </h5>\n        <p>confort@lookafter.com</p>\n      </div>\n      <div>\n        <h5\n          class=\"w-100 border-bottom border-info overlock hover-underline-animation text-dark\"\n        >\n          Phone\n        </h5>\n        <p>1-971-diaper</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description-image {\n  position: absolute;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hlbnJpcXVlL0RvY3VtZW50cy9GQy1MQS9sb29rQWZ0ZXIvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_data_products_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/products.json */ "./src/assets/data/products.json");
var _assets_data_products_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/products.json */ "./src/assets/data/products.json", 1);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.products = _assets_data_products_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image-slider/image-slider.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-slider/image-slider.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  *ngIf=\"imagesChunked\"\n  class=\"center\"\n  (mouseenter)=\"stopRoll()\"\n  (mouseleave)=\"startRoll()\"\n>\n  <div\n    *ngFor=\"let imageGroup of imagesChunked; let i = index\"\n    class=\"align-self-center image-page\"\n  >\n    <div class=\"row justify-content-center align-items-center col-md-12 mx-0\">\n      <div\n        *ngFor=\"let product of imageGroup\"\n        class=\" col-6 col-sm-6 col-md-6 px-1 py-2 img-wrapper\"\n        [hidden]=\"i !== sliderControls.currentPage\"\n        [@thumbState]=\"i === sliderControls.currentPage ? 'active' : 'inactive'\"\n      >\n        <img\n          [src]=\"'./assets/img/products/' + product.img\"\n          [alt]=\"product.name\"\n          class=\"image image-cover\"\n        />\n        <div class=\"d-flex bg-light justify-content-between py-2 px-2\">\n          <label class=\"alig-self-center mb-0\">\n            <strong>Name:</strong> {{ product.name }}</label\n          >\n          <label class=\"alig-self-center mb-0\">\n            <strong>Size:</strong> {{ product.size }}</label\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"arrow-left\" class=\"arrow align-self-center\">\n    <button class=\"btn d-block float-left\" (click)=\"goToPreviousPage()\">\n      <fa-icon\n        icon=\"arrow-circle-left\"\n        class=\"px-1 d-block float-left\"\n        size=\"3x\"\n      ></fa-icon>\n    </button>\n    <button class=\"btn d-block float-right\" (click)=\"goToNextPage()\">\n      <fa-icon\n        icon=\"arrow-circle-right\"\n        class=\"px-1 d-block float-left\"\n        size=\"3x\"\n      ></fa-icon>\n    </button>\n  </div>\n  <div class=\"dots\">\n    <input\n      type=\"radio\"\n      class=\"d-none\"\n      name=\"slider\"\n      [attr.id]=\"'slider' + i\"\n      *ngFor=\"let imageGroup of imagesChunked; let i = index\"\n    />\n    <label\n      *ngFor=\"let imageGroup of imagesChunked; let i = index\"\n      for=\"{{ 'slider' + i }}\"\n      class=\"mx-1 shadow-lg\"\n      (click)=\"goToPage(i)\"\n      [ngClass]=\"{ 'checked-dot': i === sliderControls.currentPage }\"\n    ></label>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/image-slider/image-slider.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/image-slider/image-slider.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div[hidden] {\n  display: none; }\n\n.image-page {\n  z-index: 9; }\n\n.img-wrapper {\n  transition: all 1s; }\n\n.arrow {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  z-index: 100; }\n\n.arrow fa-icon {\n  color: #cccccc;\n  opacity: 0.7; }\n\n.arrow fa-icon:hover {\n    opacity: 1; }\n\n.center {\n  display: table;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  max-height: 100%; }\n\n.dots {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  text-align: center; }\n\n.dots > label {\n  cursor: pointer;\n  border-radius: 5px;\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: #bbb;\n  opacity: 0.7;\n  transition: all 0.3s; }\n\n.dots > label:hover {\n    opacity: 1; }\n\n.checked-dot {\n  background: white !important; }\n\n.btn.focus,\n.btn:focus {\n  outline: 0;\n  box-shadow: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hlbnJpcXVlL0RvY3VtZW50cy9GQy1MQS9sb29rQWZ0ZXIvc3JjL2FwcC9pbWFnZS1zbGlkZXIvaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBR0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsbUNBQW1DO0VBSW5DLDJCQUEyQjtFQUMzQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUZkO0lBS0ksVUFBVSxFQUFBOztBQUlkO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFNWixvQkFBb0IsRUFBQTs7QUFidEI7SUFTSSxVQUFVLEVBQUE7O0FBT2Q7RUFDRSw0QkFBNEIsRUFBQTs7QUFHOUI7O0VBRUUsVUFBVTtFQUNWLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2Utc2xpZGVyL2ltYWdlLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmltYWdlLXBhZ2Uge1xuICB6LWluZGV4OiA5O1xufVxuXG4uaW1nLXdyYXBwZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXM7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmFycm93IGZhLWljb24ge1xuICBjb2xvcjogI2NjY2NjYztcbiAgb3BhY2l0eTogMC43O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5kb3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kb3RzID4gbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjYmJiO1xuICBvcGFjaXR5OiAwLjc7XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5jaGVja2VkLWRvdCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4uZm9jdXMsXG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/image-slider/image-slider.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-slider/image-slider.component.ts ***!
  \********************************************************/
/*! exports provided: ImageSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSliderComponent", function() { return ImageSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var ImageSliderComponent = /** @class */ (function () {
    function ImageSliderComponent() {
        this.itemsPerPage = 4;
        this.rollDefaultInterval = 2500;
    }
    ImageSliderComponent.prototype.ngOnInit = function () {
        this.startRoll();
        this.imagesChunked = this.chunk(this.imagesInitial, this.itemsPerPage);
        this.FISRT_PAGE = {
            previousPage: this.imagesChunked.length - 1,
            currentPage: 0,
            nextPage: 1,
        };
        this.LAST_PAGE = {
            previousPage: this.imagesChunked.length - 2,
            currentPage: this.imagesChunked.length - 1,
            nextPage: 0,
        };
        this.sliderControls = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.FISRT_PAGE);
    };
    ImageSliderComponent.prototype.chunk = function (arr, chunkSize, cache) {
        if (chunkSize === void 0) { chunkSize = 1; }
        if (cache === void 0) { cache = []; }
        var tmp = arr.slice();
        if (chunkSize <= 0) {
            return cache;
        }
        while (tmp.length) {
            cache.push(tmp.splice(0, chunkSize));
        }
        return cache;
    };
    ImageSliderComponent.prototype.goToNextPage = function () {
        var isLastPage = this.sliderControls.currentPage === this.imagesChunked.length - 1;
        if (isLastPage) {
            this.sliderControls = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.FISRT_PAGE);
        }
        else {
            ++this.sliderControls.currentPage;
            ++this.sliderControls.previousPage;
            ++this.sliderControls.nextPage;
        }
    };
    ImageSliderComponent.prototype.goToPreviousPage = function () {
        var isFirstPage = this.sliderControls.currentPage === 0;
        if (isFirstPage) {
            this.sliderControls = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.LAST_PAGE);
        }
        else {
            --this.sliderControls.currentPage;
            --this.sliderControls.previousPage;
            --this.sliderControls.nextPage;
        }
    };
    ImageSliderComponent.prototype.goToPage = function (newPage) {
        var isFirstPage = newPage === 0;
        var isLastPage = newPage === this.imagesChunked.length - 1;
        if (isLastPage) {
            this.sliderControls = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.LAST_PAGE);
        }
        else if (isFirstPage) {
            this.sliderControls = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.FISRT_PAGE);
        }
        else {
            this.sliderControls.currentPage = newPage;
            this.sliderControls.previousPage = newPage - 1;
            this.sliderControls.nextPage = newPage + 1;
        }
    };
    ImageSliderComponent.prototype.previousPage = function (arr, index) {
        var lastIndex = arr.length - 1;
        var newIndex = index === 0 ? lastIndex : --index;
        var item = arr[newIndex];
        return [item, newIndex];
    };
    ImageSliderComponent.prototype.startRoll = function () {
        var _this = this;
        this.rollInterval = setInterval(function () {
            _this.goToNextPage();
        }, this.rollDefaultInterval);
    };
    ImageSliderComponent.prototype.stopRoll = function () {
        window.clearInterval(this.rollInterval);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ImageSliderComponent.prototype, "imagesInitial", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageSliderComponent.prototype, "itemsPerPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageSliderComponent.prototype, "rollDefaultInterval", void 0);
    ImageSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-slider',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('thumbState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'scale(0.5)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'scale(1)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')),
                ]),
            ],
            template: __webpack_require__(/*! ./image-slider.component.html */ "./src/app/image-slider/image-slider.component.html"),
            styles: [__webpack_require__(/*! ./image-slider.component.scss */ "./src/app/image-slider/image-slider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageSliderComponent);
    return ImageSliderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ngx-spinner></ngx-spinner>\n  <div class=\"row \">\n    <div class=\"col-md-10 offset-md-1\">\n      <h3>Register Form</h3>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n        <div class=\"form-group\">\n          <input\n            type=\"email\"\n            formControlName=\"email\"\n            class=\"form-control\"\n            placeholder=\"Email\"\n            [ngClass]=\"{ 'is-invalid': submitted && formControls.email.errors }\"\n          />\n          <div\n            *ngIf=\"submitted && formControls.email.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"formControls.email.errors.required\">\n              Email is required\n            </div>\n            <div *ngIf=\"formControls.email.errors.pattern\">\n              Email must be a valid email address\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            class=\"form-control\"\n            placeholder=\"Password\"\n            [ngClass]=\"{\n              'is-invalid': submitted && formControls.password.errors\n            }\"\n          />\n          <div\n            *ngIf=\"submitted && formControls.password.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"formControls.password.errors.required\">\n              Confirm Password is required\n            </div>\n            <div *ngIf=\"formControls.password.errors.mustMatch\">\n              Passwords must match\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input\n            type=\"checkbox\"\n            name=\"mockError\"\n            id=\"mockError\"\n            formControlName=\"mockError\"\n            class=\"mr-2\"\n          />\n          <label for=\"mockError\">Mock request error</label>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary w-100\">Login</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, bsModalRef, spinner, toastrService, loginService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.bsModalRef = bsModalRef;
        this.spinner = spinner;
        this.toastrService = toastrService;
        this.loginService = loginService;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\w+@\w+\.\w+$/)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mockError: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(LoginComponent.prototype, "formControls", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loginData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.loginForm.value);
        var code = this.loginData.mockError ? 400 : 200;
        this.loginService.login(this.loginData, code).subscribe(function (response) {
            _this.spinner.hide();
            _this.bsModalRef.hide();
            _this.router.navigateByUrl('/dashboard');
        }, function (error) {
            _this.spinner.hide();
            _this.toastrService.error('Please try again later', 'Something wrong 😞');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.url = 'https://httpbin.org/status';
    }
    LoginService.prototype.login = function (user, code) {
        if (code === void 0) { code = 200; }
        return this.http.post(this.url + "/" + code, user);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <nav class=\"navbar navbar-expand-md \">\n        <a class=\"navbar-brand schoolbell font-weight-bold text-dark\" href=\"#\"\n          ><fa-icon icon=\"baby\" class=\"px-1\"></fa-icon>Look After</a\n        >\n        <button\n          class=\"navbar-toggler ml-auto custom-toggler\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          (click)=\"isCollapsed = !isCollapsed\"\n        >\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div\n          class=\"collapse navbar-collapse\"\n          [collapse]=\"isCollapsed\"\n          id=\"navbarSupportedContent\"\n        >\n          <ul class=\"navbar-nav mr-auto\" *ngIf=\"isCollapsed\">\n            <li class=\"nav-item py-1\" *ngIf=\"!isLogged\">\n              <a class=\"nav-link text-dark\" (click)=\"scroll('products')\"\n                >Products</a\n              >\n            </li>\n            <li class=\"nav-item py-1\" *ngIf=\"!isLogged\">\n              <a class=\"nav-link text-dark\" (click)=\"scroll('contact')\">\n                Contact Us\n              </a>\n            </li>\n          </ul>\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item py-1 pr-1\" *ngIf=\"!isLogged\">\n              <button class=\"btn btn-primary\" (click)=\"openUserFormModal()\">\n                Register\n              </button>\n            </li>\n            <li class=\"nav-item py-1 pl-1\" *ngIf=\"!isLogged\">\n              <button\n                class=\"btn btn-outline-primary\"\n                (click)=\"openLoginModal()\"\n              >\n                Login\n              </button>\n            </li>\n            <li class=\"nav-item py-1 pl-1\" *ngIf=\"isLogged\">\n              <button class=\"btn btn-outline-primary\" (click)=\"logout()\">\n                Logout\n              </button>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-toggler .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hlbnJpcXVlL0RvY3VtZW50cy9GQy1MQS9sb29rQWZ0ZXIvc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdVFBQXVRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS10b2dnbGVyIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0Nzdmcgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMjU1LDI1NSwyNTUsIDEpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA4aDI0TTQgMTZoMjRNNCAyNGgyNCcvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(modalService, router) {
        var _this = this;
        this.modalService = modalService;
        this.router = router;
        this.isCollapsed = true;
        this.config = {
            animated: true,
        };
        this.isLogged = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                var url = event.urlAfterRedirects;
                _this.isLogged = url === '/home' ? false : true;
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.openLoginModal = function () {
        this.bsModalRef = this.modalService.show(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], this.config);
    };
    NavbarComponent.prototype.openUserFormModal = function () {
        this.bsModalRef = this.modalService.show(_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"], this.config);
    };
    NavbarComponent.prototype.scroll = function (id) {
        document
            .getElementById(id)
            .scrollIntoView({ block: 'end', behavior: 'smooth' });
    };
    NavbarComponent.prototype.logout = function () {
        this.router.navigateByUrl('/home');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-form/user-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ngx-spinner></ngx-spinner>\n  <div class=\"row \">\n    <div class=\"col-md-10 offset-md-1\">\n      <h3>Register Form</h3>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <input\n            type=\"text\"\n            formControlName=\"fullName\"\n            class=\"form-control\"\n            placeholder=\"Full Name\"\n            [ngClass]=\"{\n              'is-invalid': submitted && formControls.fullName.errors\n            }\"\n          />\n          <div\n            *ngIf=\"submitted && formControls.fullName.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"formControls.fullName.errors.required\">\n              Full Name is required\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input\n            type=\"text\"\n            formControlName=\"phone\"\n            class=\"form-control\"\n            placeholder=\"Phone\"\n            [ngClass]=\"{\n              'is-invalid': submitted && formControls.phone.errors\n            }\"\n          />\n          <div\n            *ngIf=\"submitted && formControls.phone.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"formControls.phone.errors.required\">\n              Phone is required\n            </div>\n            <div *ngIf=\"formControls.phone.errors.pattern\">\n              Phone must have 9 numbers\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            class=\"form-control\"\n            placeholder=\"Email\"\n            [ngClass]=\"{ 'is-invalid': submitted && formControls.email.errors }\"\n          />\n          <div\n            *ngIf=\"submitted && formControls.email.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"formControls.email.errors.required\">\n              Email is required\n            </div>\n            <div *ngIf=\"formControls.email.errors.pattern\">\n              Email must be a valid email address\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            class=\"form-control\"\n            placeholder=\"Password\"\n            [ngClass]=\"{\n              'is-invalid': submitted && formControls.password.errors\n            }\"\n          />\n          <div\n            *ngIf=\"submitted && formControls.password.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"formControls.password.errors.required\">\n              Password is required\n            </div>\n            <div *ngIf=\"formControls.password.errors.minlength\">\n              Password must be at least 6 characters\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input\n            type=\"password\"\n            formControlName=\"confirmPassword\"\n            class=\"form-control\"\n            placeholder=\"Confirm Password\"\n            [ngClass]=\"{\n              'is-invalid': submitted && formControls.confirmPassword.errors\n            }\"\n          />\n          <div\n            *ngIf=\"submitted && formControls.confirmPassword.errors\"\n            class=\"invalid-feedback\"\n          >\n            <div *ngIf=\"formControls.confirmPassword.errors.required\">\n              Confirm Password is required\n            </div>\n            <div *ngIf=\"formControls.confirmPassword.errors.mustMatch\">\n              Passwords must match\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input\n            type=\"checkbox\"\n            name=\"mockError\"\n            id=\"mockError\"\n            formControlName=\"mockError\"\n            class=\"mr-2\"\n          />\n          <label for=\"mockError\">Mock request error</label>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary w-100\">Register</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-form/user-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-form/user-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _user_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-form.service */ "./src/app/user-form/user-form.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");








var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(formBuilder, userFormService, spinner, toastrService, bsModalRef) {
        this.formBuilder = formBuilder;
        this.userFormService = userFormService;
        this.spinner = spinner;
        this.toastrService = toastrService;
        this.bsModalRef = bsModalRef;
        this.submitted = false;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{9}$')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\w+@\w+\.\w+$/)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mockError: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(UserFormComponent.prototype, "formControls", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.submitted = true;
        if (this.registerForm.invalid) {
            this.spinner.hide();
            return;
        }
        this.user = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.registerForm.value);
        var code = this.user.mockError ? 400 : 200;
        this.userFormService.register(this.user, code).subscribe(function (response) {
            _this.spinner.hide();
            _this.bsModalRef.hide();
            _this.toastrService.success('You are ready to login and enjoy!!😄', 'Registered with success');
            _this.user.createAt = new Date();
            localStorage.setItem('user', JSON.stringify(_this.user));
        }, function (error) {
            _this.spinner.hide();
            _this.toastrService.error('Please try again later', 'Something wrong 😞');
        });
    };
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.scss */ "./src/app/user-form/user-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _user_form_service__WEBPACK_IMPORTED_MODULE_4__["UserFormService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.service.ts":
/*!************************************************!*\
  !*** ./src/app/user-form/user-form.service.ts ***!
  \************************************************/
/*! exports provided: UserFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormService", function() { return UserFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserFormService = /** @class */ (function () {
    function UserFormService(http) {
        this.http = http;
        this.url = 'https://httpbin.org/status';
    }
    UserFormService.prototype.register = function (user, code) {
        if (code === void 0) { code = 200; }
        return this.http.post(this.url + "/" + code, user);
    };
    UserFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserFormService);
    return UserFormService;
}());



/***/ }),

/***/ "./src/assets/data/products.json":
/*!***************************************!*\
  !*** ./src/assets/data/products.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = [{"size":"M","name":"Basic","img":"diaper1.jpg"},{"size":"L","name":"Roots","img":"diaper2.jpg"},{"size":"XL","name":"Cloudy","img":"diaper3.jpg"},{"size":"M","name":"Dino","img":"diaper4.jpg"},{"size":"XL","name":"Caty","img":"diaper5.jpg"},{"size":"M","name":"Unicorn","img":"diaper6.jpg"},{"size":"M/L","name":"bear","img":"diaper7.jpg"},{"size":"L","name":"jungle","img":"diaper8.jpg"}];

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/henrique/Documents/FC-LA/lookAfter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map