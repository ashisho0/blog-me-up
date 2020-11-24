(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/admin-dashboard/services/article.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin-dashboard/services/article.service.ts ***!
  \*************************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ArticleService = class ArticleService extends _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super('article');
        this.http = http;
    }
    getArticle() {
        return this.http.get(this.url, this.getOptions());
    }
    addArticle(data) {
        return this.http.post(this.url + 'add', data, this.getOptionsWithToken());
    }
    getArticleById(id) {
        return this.http.get(this.url + id, this.getOptions());
    }
    editArticle(updatedData, id) {
        return this.http.put(this.url + 'edit/' + id, updatedData, this.getOptionsWithToken());
    }
    deleteArticle(id) {
        return this.http.delete(this.url + id, this.getOptionsWithToken());
    }
    // Add and edit article with file upload XHR 
    uploadArticle(article, files, method) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((observer) => {
            const xhr = new XMLHttpRequest();
            const formData = new FormData();
            if (files.length) {
                formData.append('image', files[0], files[0].name);
            }
            for (let key in article) {
                formData.append(key, article[key]);
            }
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        observer.next(xhr.response);
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            let endUrl;
            if (method == 'PUT') {
                endUrl = this.url + 'edit/' + article._id + '?token=' + localStorage.getItem('token');
            }
            else {
                endUrl = this.url + 'add' + '?token=' + localStorage.getItem('token');
            }
            xhr.open(method, endUrl, true);
            xhr.send(formData);
        });
    }
};
ArticleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ArticleService);



/***/ }),

/***/ "./src/app/admin-dashboard/services/user.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-dashboard/services/user.service.ts ***!
  \**********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let UserService = class UserService extends _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super('user');
        this.http = http;
    }
    getUser() {
        // console.log(this.url);
        return this.http.get(this.url, this.getOptions());
    }
    addUser(data) {
        console.log(data, this.url);
        return this.http.post(this.url + 'add', data, this.getOptionsWithToken());
    }
    getUserById(id) {
        return this.http.get(this.url + id, this.getOptions());
    }
    editUser(updatedData, id) {
        return this.http.put(this.url + 'edit/' + id, updatedData, this.getOptionsWithToken());
    }
    deleteUser(id) {
        return this.http.delete(this.url + id, this.getOptionsWithToken());
    }
    search() {
        // to be continued
    }
    // edit User with file upload XHR 
    uploadUser(user, files, method) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((observer) => {
            const xhr = new XMLHttpRequest();
            const formData = new FormData();
            if (files.length) {
                formData.append('image', files[0], files[0].name);
            }
            for (let key in user) {
                formData.append(key, user[key]);
            }
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        observer.next(xhr.response);
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            let endUrl;
            if (method == 'PUT') {
                endUrl = this.url + 'edit/' + user._id + '?token=' + localStorage.getItem('token');
            }
            else {
                endUrl = this.url + 'add' + '?token=' + localStorage.getItem('token');
            }
            xhr.open(method, endUrl, true);
            xhr.send(formData);
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/models/article.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/article.model.ts ***!
  \*****************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Article {
    constructor(details) {
        this.title = details.title || "";
        this.description = details.description || "";
        this.content = details.content || "";
        this.author = details.author || "";
        this.image = details.image || "";
        this.isPublished = details.isPublished || "";
        this.approvedDate = details.approvedDate || "";
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map