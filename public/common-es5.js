function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/admin-dashboard/services/article.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin-dashboard/services/article.service.ts ***!
    \*************************************************************/

  /*! exports provided: ArticleService */

  /***/
  function srcAppAdminDashboardServicesArticleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleService", function () {
      return ArticleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../shared/services/base.service */
    "./src/app/shared/services/base.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ArticleService = /*#__PURE__*/function (_shared_services_base) {
      _inherits(ArticleService, _shared_services_base);

      var _super = _createSuper(ArticleService);

      function ArticleService(http) {
        var _this;

        _classCallCheck(this, ArticleService);

        _this = _super.call(this, 'article');
        _this.http = http;
        return _this;
      }

      _createClass(ArticleService, [{
        key: "getArticle",
        value: function getArticle() {
          return this.http.get(this.url, this.getOptions());
        }
      }, {
        key: "addArticle",
        value: function addArticle(data) {
          return this.http.post(this.url + 'add', data, this.getOptionsWithToken());
        }
      }, {
        key: "getArticleById",
        value: function getArticleById(id) {
          return this.http.get(this.url + id, this.getOptions());
        }
      }, {
        key: "editArticle",
        value: function editArticle(updatedData, id) {
          return this.http.put(this.url + 'edit/' + id, updatedData, this.getOptionsWithToken());
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle(id) {
          return this.http["delete"](this.url + id, this.getOptionsWithToken());
        } // Add and edit article with file upload XHR 

      }, {
        key: "uploadArticle",
        value: function uploadArticle(article, files, method) {
          var _this2 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            var xhr = new XMLHttpRequest();
            var formData = new FormData();

            if (files.length) {
              formData.append('image', files[0], files[0].name);
            }

            for (var key in article) {
              formData.append(key, article[key]);
            }

            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  observer.next(xhr.response);
                } else {
                  observer.error(xhr.response);
                }
              }
            };

            var endUrl;

            if (method == 'PUT') {
              endUrl = _this2.url + 'edit/' + article._id + '?token=' + localStorage.getItem('token');
            } else {
              endUrl = _this2.url + 'add' + '?token=' + localStorage.getItem('token');
            }

            xhr.open(method, endUrl, true);
            xhr.send(formData);
          });
        }
      }]);

      return ArticleService;
    }(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

    ArticleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ArticleService);
    /***/
  },

  /***/
  "./src/app/admin-dashboard/services/user.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin-dashboard/services/user.service.ts ***!
    \**********************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppAdminDashboardServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../shared/services/base.service */
    "./src/app/shared/services/base.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserService = /*#__PURE__*/function (_shared_services_base2) {
      _inherits(UserService, _shared_services_base2);

      var _super2 = _createSuper(UserService);

      function UserService(http) {
        var _this3;

        _classCallCheck(this, UserService);

        _this3 = _super2.call(this, 'user');
        _this3.http = http;
        return _this3;
      }

      _createClass(UserService, [{
        key: "getUser",
        value: function getUser() {
          // console.log(this.url);
          return this.http.get(this.url, this.getOptions());
        }
      }, {
        key: "addUser",
        value: function addUser(data) {
          console.log(data, this.url);
          return this.http.post(this.url + 'add', data, this.getOptionsWithToken());
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          return this.http.get(this.url + id, this.getOptions());
        }
      }, {
        key: "editUser",
        value: function editUser(updatedData, id) {
          return this.http.put(this.url + 'edit/' + id, updatedData, this.getOptionsWithToken());
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http["delete"](this.url + id, this.getOptionsWithToken());
        }
      }, {
        key: "search",
        value: function search() {// to be continued
        } // edit User with file upload XHR 

      }, {
        key: "uploadUser",
        value: function uploadUser(user, files, method) {
          var _this4 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            var xhr = new XMLHttpRequest();
            var formData = new FormData();

            if (files.length) {
              formData.append('image', files[0], files[0].name);
            }

            for (var key in user) {
              formData.append(key, user[key]);
            }

            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  observer.next(xhr.response);
                } else {
                  observer.error(xhr.response);
                }
              }
            };

            var endUrl;

            if (method == 'PUT') {
              endUrl = _this4.url + 'edit/' + user._id + '?token=' + localStorage.getItem('token');
            } else {
              endUrl = _this4.url + 'add' + '?token=' + localStorage.getItem('token');
            }

            xhr.open(method, endUrl, true);
            xhr.send(formData);
          });
        }
      }]);

      return UserService;
    }(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserService);
    /***/
  },

  /***/
  "./src/app/models/article.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/article.model.ts ***!
    \*****************************************/

  /*! exports provided: Article */

  /***/
  function srcAppModelsArticleModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Article", function () {
      return Article;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Article = function Article(details) {
      _classCallCheck(this, Article);

      this.title = details.title || "";
      this.description = details.description || "";
      this.content = details.content || "";
      this.author = details.author || "";
      this.image = details.image || "";
      this.isPublished = details.isPublished || "";
      this.approvedDate = details.approvedDate || "";
    };
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map