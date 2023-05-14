(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! C:\Users\Per_A\Documents\under_the_gun\under_the_gun\root\src\main.ts */ "zUnb"
        );

        /***/
      },

    /***/ F1my:
      /*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
      /*! exports provided: HomePageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HomePageComponent",
          function () {
            return HomePageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/router */ "tyNb");

        class HomePageComponent {
          constructor(router) {
            this.router = router;
          }
          startGame() {
            this.router.navigateByUrl("play");
          }
        }
        HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
          return new (t || HomePageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
            )
          );
        };
        HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: HomePageComponent,
          selectors: [["app-home-page"]],
          decls: 10,
          vars: 0,
          consts: [
            [1, "div-root"],
            [1, "header-title"],
            [1, "header-subtitle"],
            [
              "type",
              "button",
              1,
              "btn",
              "btn-link",
              "button-play",
              "center",
              3,
              "click",
            ],
            [1, "image-div"],
            [
              "src",
              "./../assets/card_tilted_left.svg",
              "alt",
              "playing card left",
              1,
              "image-home",
              "left",
            ],
            [
              "src",
              "./../assets/card_tilted_right.svg",
              "alt",
              "playing card right",
              1,
              "image-home",
              "right",
            ],
          ],
          template: function HomePageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "h1",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                2,
                "Under the gun"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "h3",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                4,
                "The game that teaches you when to bet or fold"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "button",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function HomePageComponent_Template_button_click_5_listener() {
                  return ctx.startGame();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                6,
                " Play game "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                8,
                "img",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "img",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            '.div-root[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0, #e55d87, #5fc3e4);\n  width: 100vw;\n  height: 100vh;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  font-size: 7em;\n  font-family: "Roboto";\n  text-align: center;\n  text-shadow: 1px 1px 5px black;\n}\n\n.header-subtitle[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-family: "Roboto";\n  text-align: center;\n  text-shadow: 0.5px 0.5px 2px black;\n}\n\n.button-play[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-family: "Roboto";\n  font-weight: 800;\n  margin: auto;\n  animation: blinker 3s linear infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0.5;\n  }\n}\n\n.button-play[_ngcontent-%COMP%]:hover {\n  color: #776d6d;\n}\n\n.image-div[_ngcontent-%COMP%] {\n  margin-top: 4em;\n  display: flex;\n  justify-content: center;\n}\n\n.image-home[_ngcontent-%COMP%] {\n  width: 25em;\n  height: auto;\n  position: absolute;\n}\n\n.left[_ngcontent-%COMP%] {\n  margin-right: 128px;\n}\n\n.right[_ngcontent-%COMP%] {\n  margin-left: 128px;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHFDQUFBO0FBR0Y7O0FBREE7RUFDRTtJQUNFLFlBQUE7RUFJRjtBQUNGOztBQUZBO0VBQ0UsY0FBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUlGOztBQURBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU9GIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtcm9vdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDAsICNlNTVkODcsICM1ZmMzZTQpO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5oZWFkZXItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogN2VtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggYmxhY2s7XHJcbn1cclxuLmhlYWRlci1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAwLjVweCAwLjVweCAycHggYmxhY2s7XHJcbn1cclxuLmJ1dHRvbi1wbGF5IHtcclxuICBmb250LXNpemU6IDNlbTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgYW5pbWF0aW9uOiBibGlua2VyIDNzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG59XHJcbi5idXR0b24tcGxheTpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigxMTksIDEwOSwgMTA5KTtcclxufVxyXG5cclxuLmltYWdlLWRpdiB7XHJcbiAgbWFyZ2luLXRvcDogNGVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS1ob21lIHtcclxuICB3aWR0aDogMjVlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5sZWZ0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDEyOHB4O1xyXG59XHJcbi5yaWdodCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyOHB4O1xyXG59XHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */',
          ],
        });

        /***/
      },

    /***/ Sy1n:
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppComponent",
          function () {
            return AppComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/router */ "tyNb");

        class AppComponent {
          constructor() {
            this.title = "under_the_gun";
          }
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 1,
          vars: 0,
          consts: [[2, "width", "100vw", "height", "100vh"]],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                0,
                "router-outlet",
                0
              );
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"],
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */",
          ],
        });

        /***/
      },

    /***/ ZAI4:
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppModule",
          function () {
            return AppModule;
          }
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/platform-browser */ "jhN1");
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./app-routing.module */ "vY5A");
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./app.component */ "Sy1n");
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/platform-browser/animations */ "R1ws"
          );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/material/button */ "bTqV");
        /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
        /* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
        /* harmony import */ var _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ./game-page/game-page.component */ "daKB");
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! @angular/core */ "fXoL");

        class AppModule {}
        AppModule.ɵfac = function AppModule_Factory(t) {
          return new (t || AppModule)();
        };
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__[
          "ɵɵdefineNgModule"
        ]({
          type: AppModule,
          bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
          ],
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__[
          "ɵɵdefineInjector"
        ]({
          providers: [],
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                "BrowserModule"
              ],
              _app_routing_module__WEBPACK_IMPORTED_MODULE_1__[
                "AppRoutingModule"
              ],
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__[
                "BrowserAnimationsModule"
              ],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                "MatButtonModule"
              ],
              _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__[
                "MatGridListModule"
              ],
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__[
                "NgbModule"
              ],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](
              AppModule,
              {
                declarations: [
                  _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                  _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_7__[
                    "GamePageComponent"
                  ],
                  _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__[
                    "HomePageComponent"
                  ],
                ],
                imports: [
                  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                    "BrowserModule"
                  ],
                  _app_routing_module__WEBPACK_IMPORTED_MODULE_1__[
                    "AppRoutingModule"
                  ],
                  _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__[
                    "BrowserAnimationsModule"
                  ],
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                    "MatButtonModule"
                  ],
                  _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__[
                    "MatGridListModule"
                  ],
                  _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__[
                    "NgbModule"
                  ],
                ],
              }
            );
        })();

        /***/
      },

    /***/ daKB:
      /*!**************************************************!*\
  !*** ./src/app/game-page/game-page.component.ts ***!
  \**************************************************/
      /*! exports provided: GamePageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GamePageComponent",
          function () {
            return GamePageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */ var src_services_card_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! src/services/card.service */ "vReT");

        class GamePageComponent {
          constructor(cardService) {
            this.cardService = cardService;
            this.currentLevel = 1;
            this.leftCard = {
              card: { type: "2", suit: "Heart" },
              url: "",
            };
            this.rightCard = {
              card: { type: "4", suit: "Club" },
              url: "",
            };
          }
          ngOnInit() {
            this.generateNewCards();
            console.log(this.leftCard);
          }
          selectOption(choice) {
            console.log(choice);
            const correctAnswer = this.cardService.isCorrectOption(
              this.leftCard.card,
              this.rightCard.card
            );
            if (correctAnswer == choice) {
              console.log("You are correct! The answer was", choice);
              this.nextLevel();
            } else {
              console.log("Wrong answer unfortunetly.");
              this.gameOver();
            }
          }
          gameOver() {
            this.currentLevel = 1;
          }
          nextLevel() {
            this.currentLevel += 1;
            this.generateNewCards();
          }
          generateNewCards() {
            let cardNameUrl = "";
            this.leftCard.card = this.cardService.pickRandomCard();
            cardNameUrl =
              this.leftCard.card.type +
              this.leftCard.card.suit.toString().charAt(0);
            this.leftCard.url = "./../assets/cards/" + cardNameUrl + ".svg";
            this.rightCard.card = this.cardService.pickRandomCard();
            cardNameUrl =
              this.rightCard.card.type +
              this.rightCard.card.suit.toString().charAt(0);
            this.rightCard.url = "./../assets/cards/" + cardNameUrl + ".svg";
          }
        }
        GamePageComponent.ɵfac = function GamePageComponent_Factory(t) {
          return new (t || GamePageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              src_services_card_service__WEBPACK_IMPORTED_MODULE_1__[
                "CardService"
              ]
            )
          );
        };
        GamePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: GamePageComponent,
          selectors: [["app-game-page"]],
          decls: 20,
          vars: 3,
          consts: [
            [1, "div-root"],
            [1, "center"],
            [1, "center", 2, "font-size", "xx-large"],
            [1, "card-area"],
            ["alt", "playing card left", 1, "image-home", "left", 3, "src"],
            ["alt", "playing card right", 1, "image-home", "right", 3, "src"],
            [1, "select-area"],
            [1, "select-text"],
            [
              "type",
              "button",
              1,
              "btn",
              "btn-success",
              "select-text",
              "rounded",
              3,
              "click",
            ],
            [1, "select-text", 2, "vertical-align", "middle"],
            [
              "type",
              "button",
              1,
              "btn",
              "btn-danger",
              "select-text",
              "rounded",
              3,
              "click",
            ],
          ],
          template: function GamePageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "h1",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                2,
                "Under the gun"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "h1",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                6,
                "img",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                7,
                "img",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "div",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "span",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                11,
                "Do you"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "button",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function GamePageComponent_Template_button_click_14_listener() {
                  return ctx.selectOption("bet");
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Bet ");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "span",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " or ");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "button",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function GamePageComponent_Template_button_click_18_listener() {
                  return ctx.selectOption("fold");
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                19,
                " Fold "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                "Level ",
                ctx.currentLevel,
                ""
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "src",
                ctx.leftCard.url,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "src",
                ctx.rightCard.url,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
              );
            }
          },
          styles: [
            ".div-root[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0, #e55d87, #5fc3e4);\n  width: 100vw;\n  height: 100vh;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.card-area[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.image-home[_ngcontent-%COMP%] {\n  width: 25em;\n  height: auto;\n  position: absolute;\n}\n\n.left[_ngcontent-%COMP%] {\n  margin-right: 128px;\n  \n  transform: rotate(-17deg);\n}\n\n.right[_ngcontent-%COMP%] {\n  margin-left: 128px;\n  \n  transform: rotate(17deg);\n}\n\n.select-area[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 4em;\n  width: 100%;\n  text-align: center;\n}\n\n.select-text[_ngcontent-%COMP%] {\n  font-size: 4em;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdhbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ21DLDBCQUFBO0VBSW5DLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNrQywwQkFBQTtFQUlsQyx3QkFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBUUYiLCJmaWxlIjoiZ2FtZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1yb290IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMCwgI2U1NWQ4NywgIzVmYzNlNCk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1hcmVhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2UtaG9tZSB7XHJcbiAgd2lkdGg6IDI1ZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ubGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMjhweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xN2RlZyk7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE3ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE3ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTdkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xN2RlZyk7XHJcbn1cclxuLnJpZ2h0IHtcclxuICBtYXJnaW4tbGVmdDogMTI4cHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxN2RlZyk7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTdkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxN2RlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTdkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE3ZGVnKTtcclxufVxyXG4uc2VsZWN0LWFyZWEge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDRlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlbGVjdC10ZXh0IHtcclxuICBmb250LXNpemU6IDRlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */",
          ],
        });

        /***/
      },

    /***/ vReT:
      /*!**************************************!*\
  !*** ./src/services/card.service.ts ***!
  \**************************************/
      /*! exports provided: CardService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CardService",
          function () {
            return CardService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");

        class CardService {
          constructor() {
            this.deck = [
              { type: "2", suit: "Heart" },
              { type: "3", suit: "Heart" },
              { type: "4", suit: "Heart" },
              { type: "5", suit: "Heart" },
              { type: "6", suit: "Heart" },
              { type: "7", suit: "Heart" },
              { type: "8", suit: "Heart" },
              { type: "9", suit: "Heart" },
              { type: "10", suit: "Heart" },
              { type: "J", suit: "Heart" },
              { type: "Q", suit: "Heart" },
              { type: "K", suit: "Heart" },
              { type: "A", suit: "Heart" },
              { type: "2", suit: "Diamond" },
              { type: "3", suit: "Diamond" },
              { type: "4", suit: "Diamond" },
              { type: "5", suit: "Diamond" },
              { type: "6", suit: "Diamond" },
              { type: "7", suit: "Diamond" },
              { type: "8", suit: "Diamond" },
              { type: "9", suit: "Diamond" },
              { type: "10", suit: "Diamond" },
              { type: "J", suit: "Diamond" },
              { type: "Q", suit: "Diamond" },
              { type: "K", suit: "Diamond" },
              { type: "A", suit: "Diamond" },
              { type: "2", suit: "Club" },
              { type: "3", suit: "Club" },
              { type: "4", suit: "Club" },
              { type: "5", suit: "Club" },
              { type: "6", suit: "Club" },
              { type: "7", suit: "Club" },
              { type: "8", suit: "Club" },
              { type: "9", suit: "Club" },
              { type: "10", suit: "Club" },
              { type: "J", suit: "Club" },
              { type: "Q", suit: "Club" },
              { type: "K", suit: "Club" },
              { type: "A", suit: "Club" },
              { type: "2", suit: "Spade" },
              { type: "3", suit: "Spade" },
              { type: "4", suit: "Spade" },
              { type: "5", suit: "Spade" },
              { type: "6", suit: "Spade" },
              { type: "7", suit: "Spade" },
              { type: "8", suit: "Spade" },
              { type: "9", suit: "Spade" },
              { type: "10", suit: "Spade" },
              { type: "J", suit: "Spade" },
              { type: "Q", suit: "Spade" },
              { type: "K", suit: "Spade" },
              { type: "A", suit: "Spade" },
            ];
          }
          isCorrectOption(c1, c2) {
            // If the cards are the same and are high AKQJ109
            if (this.isGoodPocket(c1, c2)) return "bet";
            // If one of the cards are an ace.
            if (this.containGoodAce(c1, c2)) return "bet";
            // If theyre nicely suited
            if (this.isSuited(c1, c2)) return "bet";
            return "fold";
          }
          pickRandomCard() {
            return this.deck[Math.floor(Math.random() * this.deck.length)];
          }
          // Helper algorithms
          isGoodPocket(c1, c2) {
            if ("AKQJ109".includes(c1.type)) return c1.type === c2.type;
            return false;
          }
          isSuited(c1, c2) {
            if (c1.suit === c2.suit) {
              const types = c1.type + c2.type;
              const goodMatch = [
                "KQ",
                "KJ",
                "QJ",
                "J10",
                "QK",
                "JK",
                "JQ",
                "10J",
              ];
              return goodMatch.findIndex((type) => type === types) !== -1;
            }
            return false;
          }
          containGoodAce(c1, c2) {
            let types = c1.type + c2.type;
            let isSuited = c1.suit === c2.suit;
            if (types.includes("A")) {
              if (types.includes("K") || types.includes("Q")) {
                return true;
              }
              if (isSuited) {
                return "J10".includes(c1.type) || "J10".includes(c2.type);
              }
              return false;
            }
          }
        }
        CardService.ɵfac = function CardService_Factory(t) {
          return new (t || CardService)();
        };
        CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: CardService,
          factory: CardService.ɵfac,
          providedIn: "root",
        });

        /***/
      },

    /***/ vY5A:
      /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppRoutingModule",
          function () {
            return AppRoutingModule;
          }
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/router */ "tyNb");
        /* harmony import */ var _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./game-page/game-page.component */ "daKB");
        /* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ "fXoL");

        const routes = [
          {
            path: "play",
            component:
              _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_1__[
                "GamePageComponent"
              ],
          },
          {
            path: "**",
            component:
              _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__[
                "HomePageComponent"
              ],
          },
        ];
        class AppRoutingModule {}
        AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        };
        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          "ɵɵdefineNgModule"
        ]({ type: AppRoutingModule });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          "ɵɵdefineInjector"
        ]({
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_0__[
                "RouterModule"
              ].forRoot(routes),
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
          ],
        });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](
              AppRoutingModule,
              {
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                ],
                exports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                ],
              }
            );
        })();

        /***/
      },

    /***/ zUnb:
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/platform-browser */ "jhN1");
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./app/app.module */ "ZAI4");

        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
          "platformBrowser"
        ]()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]
          )
          .catch((err) => console.error(err));

        /***/
      },

    /***/ zn8P:
      /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function () {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "zn8P";

        /***/
      },
  },
  [[0, "runtime", "vendor"]],
]);
//# sourceMappingURL=main.js.map
