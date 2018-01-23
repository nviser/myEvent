webpackJsonp([1],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSelectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LanguageSelectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
var LanguageSelectionPage = (function () {
    function LanguageSelectionPage(navCtrl, navParams, storage, alertCtrl, translateService, apiServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.apiServiceProvider = apiServiceProvider;
    }
    LanguageSelectionPage.prototype.onSelectLanguage = function (code) {
        var _this = this;
        // Prompt user to confirm the selection
        var displayCode = code;
        if (code == 'zh') {
            displayCode = 'cn';
        }
        var alert = this.alertCtrl.create({
            title: 'Confirm Language',
            message: 'You able to make changes on app settings later on.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm (' + displayCode.toUpperCase() + ')',
                    handler: function () {
                        _this.saveUserPreferredLanguage(code);
                    }
                }
            ]
        });
        alert.present();
    };
    LanguageSelectionPage.prototype.saveUserPreferredLanguage = function (code) {
        var _this = this;
        this.translateService.use(code);
        this.apiServiceProvider.locale = code;
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__config_app__["i" /* STORAGE_APP_LANGUAGE */], code).then(function () {
            _this.goToNextPage();
        });
    };
    LanguageSelectionPage.prototype.goToNextPage = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["g" /* STORAGE_APP_HAS_LOGIN */]).then(function (val) {
            // send user to dashboard
            if (val != null && val == true) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
            }
        });
    };
    return LanguageSelectionPage;
}());
LanguageSelectionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-language-selection',template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\pages\language-selection\language-selection.html"*/'<!--\n  Generated template for the LanguageSelectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<app-content>\n\n    <div class="vertical-align-content">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <img class="logo" src="assets/images/logo.png" alt="Logo">\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-label>{{"choose_language"|translate}}</ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ul>\n                        <li>\n                            <button (click)="onSelectLanguage(\'en\')" ion-button clear>{{"english_language"|translate}}</button>\n                        </li>\n                        <li>\n                            <button (click)="onSelectLanguage(\'my\')" ion-button clear>{{"malay_language"|translate}} </button>\n                        </li>\n                        <li>\n                            <button (click)="onSelectLanguage(\'zh\')" ion-button clear>{{"chinese_language"|translate}}</button>\n                        </li>\n                    </ul>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</app-content>\n'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\pages\language-selection\language-selection.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
], LanguageSelectionPage);

//# sourceMappingURL=language-selection.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_register_service_register_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_event_service_event_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//@IonicPage()
var SignUpPage = (function () {
    function SignUpPage(device, navCtrl, navParams, storage, registerService, alertCtrl, loadingCtrl, eventService, events, apiServiceProvider, platform, androidPermissions, toastCtrl, modalCtrl, viewCtrl) {
        this.device = device;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.registerService = registerService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.eventService = eventService;
        this.events = events;
        this.apiServiceProvider = apiServiceProvider;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.confirmationCode = null;
        this.form = {};
        this.setupEventLogo();
        this.setupExtraFields();
        this.getRecentUser();
        this.setupOldEventId();
        // this.platform.ready().then((readySource) => {
        //     smsStartWatch();
        // });
        //this.smsStartWatch();
        this.form.device_id = this.device.uuid;
        this.isAcceptPrivacy = false;
        this.txtPrivacyPolicy = '';
        this.form.gender = 'male';
        this.setupPrivacyPolicy();
        this.countrycode = "+60";
        this.smsCodeLength = 5;
        this.countries =
            [
                {
                    name: "United States",
                    dial_code: "+1",
                    code: "US"
                }, {
                    name: "Malaysia",
                    dial_code: "+60",
                    code: "MY"
                }, {
                    name: "Israel",
                    dial_code: "+972",
                    code: "IL"
                }, {
                    name: "Afghanistan",
                    dial_code: "+93",
                    code: "AF"
                }, {
                    name: "Albania",
                    dial_code: "+355",
                    code: "AL"
                }, {
                    name: "Algeria",
                    dial_code: "+213",
                    code: "DZ"
                }, {
                    name: "AmericanSamoa",
                    dial_code: "+1 684",
                    code: "AS"
                }, {
                    name: "Andorra",
                    dial_code: "+376",
                    code: "AD"
                }, {
                    name: "Angola",
                    dial_code: "+244",
                    code: "AO"
                }, {
                    name: "Anguilla",
                    dial_code: "+1 264",
                    code: "AI"
                }, {
                    name: "Antigua and Barbuda",
                    dial_code: "+1268",
                    code: "AG"
                }, {
                    name: "Argentina",
                    dial_code: "+54",
                    code: "AR"
                }, {
                    name: "Armenia",
                    dial_code: "+374",
                    code: "AM"
                }, {
                    name: "Aruba",
                    dial_code: "+297",
                    code: "AW"
                }, {
                    name: "Australia",
                    dial_code: "+61",
                    code: "AU"
                }, {
                    name: "Austria",
                    dial_code: "+43",
                    code: "AT"
                }, {
                    name: "Azerbaijan",
                    dial_code: "+994",
                    code: "AZ"
                }, {
                    name: "Bahamas",
                    dial_code: "+1 242",
                    code: "BS"
                }, {
                    name: "Bahrain",
                    dial_code: "+973",
                    code: "BH"
                }, {
                    name: "Bangladesh",
                    dial_code: "+880",
                    code: "BD"
                }, {
                    name: "Barbados",
                    dial_code: "+1 246",
                    code: "BB"
                }, {
                    name: "Belarus",
                    dial_code: "+375",
                    code: "BY"
                }, {
                    name: "Belgium",
                    dial_code: "+32",
                    code: "BE"
                }, {
                    name: "Belize",
                    dial_code: "+501",
                    code: "BZ"
                }, {
                    name: "Benin",
                    dial_code: "+229",
                    code: "BJ"
                }, {
                    name: "Bermuda",
                    dial_code: "+1 441",
                    code: "BM"
                }, {
                    name: "Bhutan",
                    dial_code: "+975",
                    code: "BT"
                }, {
                    name: "Bosnia and Herzegovina",
                    dial_code: "+387",
                    code: "BA"
                }, {
                    name: "Botswana",
                    dial_code: "+267",
                    code: "BW"
                }, {
                    name: "Brazil",
                    dial_code: "+55",
                    code: "BR"
                }, {
                    name: "British Indian Ocean Territory",
                    dial_code: "+246",
                    code: "IO"
                }, {
                    name: "Bulgaria",
                    dial_code: "+359",
                    code: "BG"
                }, {
                    name: "Burkina Faso",
                    dial_code: "+226",
                    code: "BF"
                }, {
                    name: "Burundi",
                    dial_code: "+257",
                    code: "BI"
                }, {
                    name: "Cambodia",
                    dial_code: "+855",
                    code: "KH"
                }, {
                    name: "Cameroon",
                    dial_code: "+237",
                    code: "CM"
                }, {
                    name: "Canada",
                    dial_code: "+1",
                    code: "CA"
                }, {
                    name: "Cape Verde",
                    dial_code: "+238",
                    code: "CV"
                }, {
                    name: "Cayman Islands",
                    dial_code: "+ 345",
                    code: "KY"
                }, {
                    name: "Central African Republic",
                    dial_code: "+236",
                    code: "CF"
                }, {
                    name: "Chad",
                    dial_code: "+235",
                    code: "TD"
                }, {
                    name: "Chile",
                    dial_code: "+56",
                    code: "CL"
                }, {
                    name: "China",
                    dial_code: "+86",
                    code: "CN"
                }, {
                    name: "Christmas Island",
                    dial_code: "+61",
                    code: "CX"
                }, {
                    name: "Colombia",
                    dial_code: "+57",
                    code: "CO"
                }, {
                    name: "Comoros",
                    dial_code: "+269",
                    code: "KM"
                }, {
                    name: "Congo",
                    dial_code: "+242",
                    code: "CG"
                }, {
                    name: "Cook Islands",
                    dial_code: "+682",
                    code: "CK"
                }, {
                    name: "Costa Rica",
                    dial_code: "+506",
                    code: "CR"
                }, {
                    name: "Croatia",
                    dial_code: "+385",
                    code: "HR"
                }, {
                    name: "Cuba",
                    dial_code: "+53",
                    code: "CU"
                }, {
                    name: "Cyprus",
                    dial_code: "+537",
                    code: "CY"
                }, {
                    name: "Czech Republic",
                    dial_code: "+420",
                    code: "CZ"
                }, {
                    name: "Denmark",
                    dial_code: "+45",
                    code: "DK"
                }, {
                    name: "Djibouti",
                    dial_code: "+253",
                    code: "DJ"
                }, {
                    name: "Dominica",
                    dial_code: "+1 767",
                    code: "DM"
                }, {
                    name: "Dominican Republic",
                    dial_code: "+1 849",
                    code: "DO"
                }, {
                    name: "Ecuador",
                    dial_code: "+593",
                    code: "EC"
                }, {
                    name: "Egypt",
                    dial_code: "+20",
                    code: "EG"
                }, {
                    name: "El Salvador",
                    dial_code: "+503",
                    code: "SV"
                }, {
                    name: "Equatorial Guinea",
                    dial_code: "+240",
                    code: "GQ"
                }, {
                    name: "Eritrea",
                    dial_code: "+291",
                    code: "ER"
                }, {
                    name: "Estonia",
                    dial_code: "+372",
                    code: "EE"
                }, {
                    name: "Ethiopia",
                    dial_code: "+251",
                    code: "ET"
                }, {
                    name: "Faroe Islands",
                    dial_code: "+298",
                    code: "FO"
                }, {
                    name: "Fiji",
                    dial_code: "+679",
                    code: "FJ"
                }, {
                    name: "Finland",
                    dial_code: "+358",
                    code: "FI"
                }, {
                    name: "France",
                    dial_code: "+33",
                    code: "FR"
                }, {
                    name: "French Guiana",
                    dial_code: "+594",
                    code: "GF"
                }, {
                    name: "French Polynesia",
                    dial_code: "+689",
                    code: "PF"
                }, {
                    name: "Gabon",
                    dial_code: "+241",
                    code: "GA"
                }, {
                    name: "Gambia",
                    dial_code: "+220",
                    code: "GM"
                }, {
                    name: "Georgia",
                    dial_code: "+995",
                    code: "GE"
                }, {
                    name: "Germany",
                    dial_code: "+49",
                    code: "DE"
                }, {
                    name: "Ghana",
                    dial_code: "+233",
                    code: "GH"
                }, {
                    name: "Gibraltar",
                    dial_code: "+350",
                    code: "GI"
                }, {
                    name: "Greece",
                    dial_code: "+30",
                    code: "GR"
                }, {
                    name: "Greenland",
                    dial_code: "+299",
                    code: "GL"
                }, {
                    name: "Grenada",
                    dial_code: "+1 473",
                    code: "GD"
                }, {
                    name: "Guadeloupe",
                    dial_code: "+590",
                    code: "GP"
                }, {
                    name: "Guam",
                    dial_code: "+1 671",
                    code: "GU"
                }, {
                    name: "Guatemala",
                    dial_code: "+502",
                    code: "GT"
                }, {
                    name: "Guinea",
                    dial_code: "+224",
                    code: "GN"
                }, {
                    name: "Guinea-Bissau",
                    dial_code: "+245",
                    code: "GW"
                }, {
                    name: "Guyana",
                    dial_code: "+595",
                    code: "GY"
                }, {
                    name: "Haiti",
                    dial_code: "+509",
                    code: "HT"
                }, {
                    name: "Honduras",
                    dial_code: "+504",
                    code: "HN"
                }, {
                    name: "Hungary",
                    dial_code: "+36",
                    code: "HU"
                }, {
                    name: "Iceland",
                    dial_code: "+354",
                    code: "IS"
                }, {
                    name: "India",
                    dial_code: "+91",
                    code: "IN"
                }, {
                    name: "Indonesia",
                    dial_code: "+62",
                    code: "ID"
                }, {
                    name: "Iraq",
                    dial_code: "+964",
                    code: "IQ"
                }, {
                    name: "Ireland",
                    dial_code: "+353",
                    code: "IE"
                }, {
                    name: "Israel",
                    dial_code: "+972",
                    code: "IL"
                }, {
                    name: "Italy",
                    dial_code: "+39",
                    code: "IT"
                }, {
                    name: "Jamaica",
                    dial_code: "+1 876",
                    code: "JM"
                }, {
                    name: "Japan",
                    dial_code: "+81",
                    code: "JP"
                }, {
                    name: "Jordan",
                    dial_code: "+962",
                    code: "JO"
                }, {
                    name: "Kazakhstan",
                    dial_code: "+7 7",
                    code: "KZ"
                }, {
                    name: "Kenya",
                    dial_code: "+254",
                    code: "KE"
                }, {
                    name: "Kiribati",
                    dial_code: "+686",
                    code: "KI"
                }, {
                    name: "Kuwait",
                    dial_code: "+965",
                    code: "KW"
                }, {
                    name: "Kyrgyzstan",
                    dial_code: "+996",
                    code: "KG"
                }, {
                    name: "Latvia",
                    dial_code: "+371",
                    code: "LV"
                }, {
                    name: "Lebanon",
                    dial_code: "+961",
                    code: "LB"
                }, {
                    name: "Lesotho",
                    dial_code: "+266",
                    code: "LS"
                }, {
                    name: "Liberia",
                    dial_code: "+231",
                    code: "LR"
                }, {
                    name: "Liechtenstein",
                    dial_code: "+423",
                    code: "LI"
                }, {
                    name: "Lithuania",
                    dial_code: "+370",
                    code: "LT"
                }, {
                    name: "Luxembourg",
                    dial_code: "+352",
                    code: "LU"
                }, {
                    name: "Madagascar",
                    dial_code: "+261",
                    code: "MG"
                }, {
                    name: "Malawi",
                    dial_code: "+265",
                    code: "MW"
                }, {
                    name: "Maldives",
                    dial_code: "+960",
                    code: "MV"
                }, {
                    name: "Mali",
                    dial_code: "+223",
                    code: "ML"
                }, {
                    name: "Malta",
                    dial_code: "+356",
                    code: "MT"
                }, {
                    name: "Marshall Islands",
                    dial_code: "+692",
                    code: "MH"
                }, {
                    name: "Martinique",
                    dial_code: "+596",
                    code: "MQ"
                }, {
                    name: "Mauritania",
                    dial_code: "+222",
                    code: "MR"
                }, {
                    name: "Mauritius",
                    dial_code: "+230",
                    code: "MU"
                }, {
                    name: "Mayotte",
                    dial_code: "+262",
                    code: "YT"
                }, {
                    name: "Mexico",
                    dial_code: "+52",
                    code: "MX"
                }, {
                    name: "Monaco",
                    dial_code: "+377",
                    code: "MC"
                }, {
                    name: "Mongolia",
                    dial_code: "+976",
                    code: "MN"
                }, {
                    name: "Montenegro",
                    dial_code: "+382",
                    code: "ME"
                }, {
                    name: "Montserrat",
                    dial_code: "+1664",
                    code: "MS"
                }, {
                    name: "Morocco",
                    dial_code: "+212",
                    code: "MA"
                }, {
                    name: "Myanmar",
                    dial_code: "+95",
                    code: "MM"
                }, {
                    name: "Namibia",
                    dial_code: "+264",
                    code: "NA"
                }, {
                    name: "Nauru",
                    dial_code: "+674",
                    code: "NR"
                }, {
                    name: "Nepal",
                    dial_code: "+977",
                    code: "NP"
                }, {
                    name: "Netherlands",
                    dial_code: "+31",
                    code: "NL"
                }, {
                    name: "Netherlands Antilles",
                    dial_code: "+599",
                    code: "AN"
                }, {
                    name: "New Caledonia",
                    dial_code: "+687",
                    code: "NC"
                }, {
                    name: "New Zealand",
                    dial_code: "+64",
                    code: "NZ"
                }, {
                    name: "Nicaragua",
                    dial_code: "+505",
                    code: "NI"
                }, {
                    name: "Niger",
                    dial_code: "+227",
                    code: "NE"
                }, {
                    name: "Nigeria",
                    dial_code: "+234",
                    code: "NG"
                }, {
                    name: "Niue",
                    dial_code: "+683",
                    code: "NU"
                }, {
                    name: "Norfolk Island",
                    dial_code: "+672",
                    code: "NF"
                }, {
                    name: "Northern Mariana Islands",
                    dial_code: "+1 670",
                    code: "MP"
                }, {
                    name: "Norway",
                    dial_code: "+47",
                    code: "NO"
                }, {
                    name: "Oman",
                    dial_code: "+968",
                    code: "OM"
                }, {
                    name: "Pakistan",
                    dial_code: "+92",
                    code: "PK"
                }, {
                    name: "Palau",
                    dial_code: "+680",
                    code: "PW"
                }, {
                    name: "Panama",
                    dial_code: "+507",
                    code: "PA"
                }, {
                    name: "Papua New Guinea",
                    dial_code: "+675",
                    code: "PG"
                }, {
                    name: "Paraguay",
                    dial_code: "+595",
                    code: "PY"
                }, {
                    name: "Peru",
                    dial_code: "+51",
                    code: "PE"
                }, {
                    name: "Philippines",
                    dial_code: "+63",
                    code: "PH"
                }, {
                    name: "Poland",
                    dial_code: "+48",
                    code: "PL"
                }, {
                    name: "Portugal",
                    dial_code: "+351",
                    code: "PT"
                }, {
                    name: "Puerto Rico",
                    dial_code: "+1 939",
                    code: "PR"
                }, {
                    name: "Qatar",
                    dial_code: "+974",
                    code: "QA"
                }, {
                    name: "Romania",
                    dial_code: "+40",
                    code: "RO"
                }, {
                    name: "Rwanda",
                    dial_code: "+250",
                    code: "RW"
                }, {
                    name: "Samoa",
                    dial_code: "+685",
                    code: "WS"
                }, {
                    name: "San Marino",
                    dial_code: "+378",
                    code: "SM"
                }, {
                    name: "Saudi Arabia",
                    dial_code: "+966",
                    code: "SA"
                }, {
                    name: "Senegal",
                    dial_code: "+221",
                    code: "SN"
                }, {
                    name: "Serbia",
                    dial_code: "+381",
                    code: "RS"
                }, {
                    name: "Seychelles",
                    dial_code: "+248",
                    code: "SC"
                }, {
                    name: "Sierra Leone",
                    dial_code: "+232",
                    code: "SL"
                }, {
                    name: "Singapore",
                    dial_code: "+65",
                    code: "SG"
                }, {
                    name: "Slovakia",
                    dial_code: "+421",
                    code: "SK"
                }, {
                    name: "Slovenia",
                    dial_code: "+386",
                    code: "SI"
                }, {
                    name: "Solomon Islands",
                    dial_code: "+677",
                    code: "SB"
                }, {
                    name: "South Africa",
                    dial_code: "+27",
                    code: "ZA"
                }, {
                    name: "South Georgia and the South Sandwich Islands",
                    dial_code: "+500",
                    code: "GS"
                }, {
                    name: "Spain",
                    dial_code: "+34",
                    code: "ES"
                }, {
                    name: "Sri Lanka",
                    dial_code: "+94",
                    code: "LK"
                }, {
                    name: "Sudan",
                    dial_code: "+249",
                    code: "SD"
                }, {
                    name: "Suriname",
                    dial_code: "+597",
                    code: "SR"
                }, {
                    name: "Swaziland",
                    dial_code: "+268",
                    code: "SZ"
                }, {
                    name: "Sweden",
                    dial_code: "+46",
                    code: "SE"
                }, {
                    name: "Switzerland",
                    dial_code: "+41",
                    code: "CH"
                }, {
                    name: "Tajikistan",
                    dial_code: "+992",
                    code: "TJ"
                }, {
                    name: "Thailand",
                    dial_code: "+66",
                    code: "TH"
                }, {
                    name: "Togo",
                    dial_code: "+228",
                    code: "TG"
                }, {
                    name: "Tokelau",
                    dial_code: "+690",
                    code: "TK"
                }, {
                    name: "Tonga",
                    dial_code: "+676",
                    code: "TO"
                }, {
                    name: "Trinidad and Tobago",
                    dial_code: "+1 868",
                    code: "TT"
                }, {
                    name: "Tunisia",
                    dial_code: "+216",
                    code: "TN"
                }, {
                    name: "Turkey",
                    dial_code: "+90",
                    code: "TR"
                }, {
                    name: "Turkmenistan",
                    dial_code: "+993",
                    code: "TM"
                }, {
                    name: "Turks and Caicos Islands",
                    dial_code: "+1 649",
                    code: "TC"
                }, {
                    name: "Tuvalu",
                    dial_code: "+688",
                    code: "TV"
                }, {
                    name: "Uganda",
                    dial_code: "+256",
                    code: "UG"
                }, {
                    name: "Ukraine",
                    dial_code: "+380",
                    code: "UA"
                }, {
                    name: "United Arab Emirates",
                    dial_code: "+971",
                    code: "AE"
                }, {
                    name: "United Kingdom",
                    dial_code: "+44",
                    code: "GB"
                }, {
                    name: "Uruguay",
                    dial_code: "+598",
                    code: "UY"
                }, {
                    name: "Uzbekistan",
                    dial_code: "+998",
                    code: "UZ"
                }, {
                    name: "Vanuatu",
                    dial_code: "+678",
                    code: "VU"
                }, {
                    name: "Wallis and Futuna",
                    dial_code: "+681",
                    code: "WF"
                }, {
                    name: "Yemen",
                    dial_code: "+967",
                    code: "YE"
                }, {
                    name: "Zambia",
                    dial_code: "+260",
                    code: "ZM"
                }, {
                    name: "Zimbabwe",
                    dial_code: "+263",
                    code: "ZW"
                },
                {
                    name: "Bolivia, Plurinational State of",
                    dial_code: "+591",
                    code: "BO"
                }, {
                    name: "Brunei Darussalam",
                    dial_code: "+673",
                    code: "BN"
                }, {
                    name: "Cocos (Keeling) Islands",
                    dial_code: "+61",
                    code: "CC"
                }, {
                    name: "Congo, The Democratic Republic of the",
                    dial_code: "+243",
                    code: "CD"
                }, {
                    name: "Cote d'Ivoire",
                    dial_code: "+225",
                    code: "CI"
                }, {
                    name: "Falkland Islands (Malvinas)",
                    dial_code: "+500",
                    code: "FK"
                }, {
                    name: "Guernsey",
                    dial_code: "+44",
                    code: "GG"
                }, {
                    name: "Holy See (Vatican City State)",
                    dial_code: "+379",
                    code: "VA"
                }, {
                    name: "Hong Kong",
                    dial_code: "+852",
                    code: "HK"
                }, {
                    name: "Iran, Islamic Republic of",
                    dial_code: "+98",
                    code: "IR"
                }, {
                    name: "Isle of Man",
                    dial_code: "+44",
                    code: "IM"
                }, {
                    name: "Jersey",
                    dial_code: "+44",
                    code: "JE"
                }, {
                    name: "Korea, Democratic People's Republic of",
                    dial_code: "+850",
                    code: "KP"
                }, {
                    name: "Korea, Republic of",
                    dial_code: "+82",
                    code: "KR"
                }, {
                    name: "Lao People's Democratic Republic",
                    dial_code: "+856",
                    code: "LA"
                }, {
                    name: "Libyan Arab Jamahiriya",
                    dial_code: "+218",
                    code: "LY"
                }, {
                    name: "Macao",
                    dial_code: "+853",
                    code: "MO"
                }, {
                    name: "Macedonia, The Former Yugoslav Republic of",
                    dial_code: "+389",
                    code: "MK"
                }, {
                    name: "Micronesia, Federated States of",
                    dial_code: "+691",
                    code: "FM"
                }, {
                    name: "Moldova, Republic of",
                    dial_code: "+373",
                    code: "MD"
                }, {
                    name: "Mozambique",
                    dial_code: "+258",
                    code: "MZ"
                }, {
                    name: "Palestinian Territory, Occupied",
                    dial_code: "+970",
                    code: "PS"
                }, {
                    name: "Pitcairn",
                    dial_code: "+872",
                    code: "PN"
                }, {
                    name: "Réunion",
                    dial_code: "+262",
                    code: "RE"
                }, {
                    name: "Russia",
                    dial_code: "+7",
                    code: "RU"
                }, {
                    name: "Saint Barthélemy",
                    dial_code: "+590",
                    code: "BL"
                }, {
                    name: "Saint Helena, Ascension and Tristan Da Cunha",
                    dial_code: "+290",
                    code: "SH"
                }, {
                    name: "Saint Kitts and Nevis",
                    dial_code: "+1 869",
                    code: "KN"
                }, {
                    name: "Saint Lucia",
                    dial_code: "+1 758",
                    code: "LC"
                }, {
                    name: "Saint Martin",
                    dial_code: "+590",
                    code: "MF"
                }, {
                    name: "Saint Pierre and Miquelon",
                    dial_code: "+508",
                    code: "PM"
                }, {
                    name: "Saint Vincent and the Grenadines",
                    dial_code: "+1 784",
                    code: "VC"
                }, {
                    name: "Sao Tome and Principe",
                    dial_code: "+239",
                    code: "ST"
                }, {
                    name: "Somalia",
                    dial_code: "+252",
                    code: "SO"
                }, {
                    name: "Svalbard and Jan Mayen",
                    dial_code: "+47",
                    code: "SJ"
                }, {
                    name: "Syrian Arab Republic",
                    dial_code: "+963",
                    code: "SY"
                }, {
                    name: "Taiwan, Province of China",
                    dial_code: "+886",
                    code: "TW"
                }, {
                    name: "Tanzania, United Republic of",
                    dial_code: "+255",
                    code: "TZ"
                }, {
                    name: "Timor-Leste",
                    dial_code: "+670",
                    code: "TL"
                }, {
                    name: "Venezuela, Bolivarian Republic of",
                    dial_code: "+58",
                    code: "VE"
                }, {
                    name: "Viet Nam",
                    dial_code: "+84",
                    code: "VN"
                }, {
                    name: "Virgin Islands, British",
                    dial_code: "+1 284",
                    code: "VG"
                }, {
                    name: "Virgin Islands, U.S.",
                    dial_code: "+1 340",
                    code: "VI"
                }
            ];
    }
    SignUpPage.prototype.openModal = function (arg) {
        var _this = this;
        this.confirmModal = this.modalCtrl.create('ModalPage');
        this.confirmModal.onDidDismiss(function (data) {
            console.log(data.code);
            var validatedCode;
            if (_this.confirmationCode && _this.validateCode(_this.confirmationCode) || data.code && _this.validateCode(data.code)) {
                // logged in!
                if (_this.confirmationCode && _this.validateCode(_this.confirmationCode)) {
                    validatedCode = _this.confirmationCode;
                    _this.checkSmsCodeApi(validatedCode, arg);
                }
                else if (data.code && _this.validateCode(data.code)) {
                    validatedCode = data.code;
                    _this.checkSmsCodeApi(validatedCode, arg);
                }
                else {
                    _this.showAlertMessage('Wrong confirmation code');
                }
            }
            else {
                // invalid login
                _this.showAlertMessage('Incorrect code. Try again');
                return false;
            }
        });
        this.confirmModal.present();
        /* setTimeout(() => {
            this.closeModal();
            console.log('Timeout working');
        }, 2000); */
    };
    SignUpPage.prototype.closeModal = function () {
        this.confirmModal.dismiss();
    };
    SignUpPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) { return console.log('Permission granted'); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS); });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
    };
    SignUpPage.prototype.setupEventLogo = function () {
        var _this = this;
        // set default image
        this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["e" /* STORAGE_APP_EVENT_LOGO */]).then(function (val) {
            _this.eventLogo = val;
        });
    };
    SignUpPage.prototype.setupExtraFields = function () {
        var _this = this;
        this.registerService.getExtraFields().then(function (data) {
            if (data.success) {
                _this.extraFields = data.content;
            }
        });
    };
    SignUpPage.prototype.setupOldEventId = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["m" /* STORAGE_OLD_EVENT_ID */]).then(function (val) {
            _this.oldEventId = val;
            _this.form.old_event_id = val;
        });
    };
    SignUpPage.prototype.getRecentUser = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["k" /* STORAGE_APP_USER */]).then(function (user) {
            _this.recentUser = user;
            if (user != undefined && user != null) {
                _this.loadParticipantScore();
            }
        });
    };
    SignUpPage.prototype.loadParticipantScore = function () {
        var _this = this;
        this.eventService.getParticipantScore(this.recentUser.api_token)
            .then(function (data) {
            if (data.success) {
                _this.recentUser.score = data.content.score;
            }
        });
    };
    SignUpPage.prototype.saveLoginUser = function (user) {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__config_app__["k" /* STORAGE_APP_USER */], user);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__config_app__["g" /* STORAGE_APP_HAS_LOGIN */], true);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__config_app__["h" /* STORAGE_APP_HAS_REDEEM */], false); // reset
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__config_app__["m" /* STORAGE_OLD_EVENT_ID */], user.event_id);
        this.apiServiceProvider.apiToken = user.api_token;
        // go dashboard
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    SignUpPage.prototype.registerUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Registering. Please wait...'
        });
        loading.present();
        this.form.mobile_number = this.countrycode + this.form.phone_number;
        this.registerService.register(this.form).then(function (data) {
            loading.dismiss();
            if (data.success) {
                _this.openModal(data.content);
                _this.smsStartWatch(data.content);
                //this.saveLoginUser(data.content);
            }
            else {
                _this.showAlertMessage(data.message);
            }
        });
    };
    /* codeConfirmation(arg) {
            this.conf = this.alertCtrl.create({
                title: 'Code confirm',
                enableBackdropDismiss: false,
                inputs: [
                    {
                        name: 'code',
                        placeholder: 'Your code',
                        id: 'js-code-confirm-input'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Send',
                        cssClass: 'js-code-confirm',
                        handler: data => {
                            if (this.validateCode(data.code)) {
                                // logged in!
                                this.checkSmsCodeApi(data.code, arg);
                                
                            } else {
                                // invalid login
                                this.showAlertMessage('Incorrect code. Try again');
                                return false;
                            }
                        }
                    }
                ]
            });
            this.conf.present();
    
    } */
    SignUpPage.prototype.validateCode = function (code) {
        return code.length == this.smsCodeLength ? true : false;
    };
    SignUpPage.prototype.preRegisterUser = function (mobileNumber) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Registering. Please wait...'
        });
        loading.present();
        this.registerService.preRegister(mobileNumber).then(function (data) {
            loading.dismiss();
            if (data.success) {
                _this.saveLoginUser(data.content);
            }
            else {
                _this.showAlertMessage(data.message);
            }
        }).catch(function (error) { loading.dismiss(); });
    };
    SignUpPage.prototype.canSubmit = function () {
        if (this.form.event_id == undefined || this.form.event_id == '') {
            this.showAlertMessage('Event Id is required');
        }
        if (this.form.name == undefined || this.form.name == '') {
            this.showAlertMessage('Name is required');
            return false;
        }
        else if (this.form.email == undefined || this.form.email == '') {
            this.showAlertMessage('Email is required');
            return false;
        }
        else if (!this.validateEmail(this.form.email)) {
            this.showAlertMessage('Email is not valid');
            return false;
        }
        else if (this.form.phone_number == undefined || this.form.phone_number == '') {
            this.showAlertMessage('Mobile number is required');
            return false;
        }
        else if (!this.validatePhoneNumber(this.form.phone_number)) {
            this.showAlertMessage('Mobile number should be of 9 or 11 digits');
            return false;
        }
        else if (this.extraFields.length > 0) {
            for (var _i = 0, _a = this.extraFields; _i < _a.length; _i++) {
                var field = _a[_i];
                if (this.form[field.id] == undefined || this.form[field.id] == '') {
                    this.showAlertMessage('Other field is required');
                    return false;
                }
            }
        }
        if (this.isAcceptPrivacy == false) {
            var alert_1 = this.alertCtrl.create({
                title: 'Pre-Registration',
                message: 'You must accept privacy and policy',
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel'
                    }
                ]
            });
            alert_1.present();
            return false;
        }
        this.form.identity_passport = "aa";
        return true;
    };
    SignUpPage.prototype.selectGender = function (gender) {
        this.selectedGender = gender;
        this.form.gender = gender;
    };
    SignUpPage.prototype.onPreRegistration = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Pre-Registration',
            message: 'We will verify if you are valid as pre-registered user',
            inputs: [
                {
                    name: 'mobile_number',
                    placeholder: 'Mobile Number',
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        _this.preRegisterUser(data.mobile_number);
                    }
                }
            ]
        });
        alert.present();
    };
    SignUpPage.prototype.onReLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    SignUpPage.prototype.onSubmitForm = function () {
        // Check if all compulsory selection is selected
        if (this.canSubmit()) {
            this.registerUser();
        }
    };
    SignUpPage.prototype.extraFieldInputChange = function (value, fieldId) {
        this.form[fieldId] = value;
    };
    SignUpPage.prototype.showGenderSelection = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Choose Gender',
            message: '',
            buttons: [
                {
                    text: 'Male',
                    handler: function () {
                        _this.selectGender('male');
                    }
                },
                {
                    text: 'Female',
                    handler: function () {
                        _this.selectGender('female');
                    }
                }
            ]
        });
        alert.present();
    };
    SignUpPage.prototype.showAlertMessage = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Notice',
            message: message,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    SignUpPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    SignUpPage.prototype.validatePhoneNumber = function (phone_number) {
        var len = phone_number.length;
        if (len == 9 || len == 10 || len == 11) {
            return true;
        }
        return false;
    };
    SignUpPage.prototype.updateAcceptPrivacy = function () {
        this.isAcceptPrivacy = !this.isAcceptPrivacy;
        console.log("isAccept", this.isAcceptPrivacy);
    };
    SignUpPage.prototype.onPrivacy = function () {
        var alert = this.alertCtrl.create({
            title: 'Privacy & Policy',
            message: this.txtPrivacyPolicy,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
        console.log("press Accept privacy", "yes");
    };
    SignUpPage.prototype.setupPrivacyPolicy = function () {
        var _this = this;
        // set default image
        this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["j" /* STORAGE_APP_PRIVACY_POLICY */]).then(function (val) {
            if (val != undefined && val != '' && val != 'null') {
                _this.txtPrivacyPolicy = val;
            }
            else {
                _this.txtPrivacyPolicy = 'No data';
            }
        });
    };
    SignUpPage.prototype.selectcode = function () {
        console.log(this.countrycode + " countrycode");
        var myElement = document.getElementById("postal");
        myElement.click();
    };
    /* confClose() {
        this.conf.dismiss();
    }  */
    SignUpPage.prototype.toastShow = function () {
        var toast = this.toastCtrl.create({
            message: 'Successfully registered',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SignUpPage.prototype.smsStartWatch = function (userData) {
        var _this = this;
        if (SMS)
            SMS.startWatch(function () {
                document.addEventListener('onSMSArrive', function (e) {
                    var sms = e.data.body;
                    var a;
                    if (sms && sms.length >= _this.smsCodeLength) {
                        a = sms.search(/\d{5}/);
                        if (a != -1) {
                            _this.confirmationCode = sms.substr(a, 5);
                            _this.closeModal();
                            _this.checkSmsCodeApi(_this.confirmationCode, userData);
                        }
                        else {
                            _this.showAlertMessage('Incorrect code. Try again');
                        }
                    }
                    else {
                        _this.showAlertMessage('Incorrect SMS');
                    }
                });
            }, function () {
                alert('failed to start watching');
            });
    };
    SignUpPage.prototype.checkSmsCodeApi = function (code, userData) {
        var _this = this;
        //send code to back for validation
        var loading = this.loadingCtrl.create({
            content: 'Checking code. Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.toastShow();
            _this.saveLoginUser(userData);
        }, 2000);
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sign-up',template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\pages\sign-up\sign-up.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<div class="header">\n\n    <ion-label>{{"welcome"|translate}}</ion-label>\n\n    <img class="event-logo" img-cache src="{{eventLogo}}" alt="Event\'s Logo">\n\n</div>\n\n<app-content>\n\n\n\n<div style="height: 100%">\n\n\n\n<ion-scroll class="sign-up-form" scrollY=\'true\'>\n\n    <ion-list>\n\n        <ion-item class="form-input">\n\n            <ion-select id="postal" style="margin-left:-1000px; " (ionchange)="coderesult()"  [(ngModel)]="form.countrycode" [ngModelOptions]="{standalone: true}">\n\n                <ion-option  *ngFor="let key of countries" [value]="key.dial_code">{{key.dial_code}}: {{key.name}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <!-- <ion-item text-wrap *ngIf="recentUser != undefiend && recentUser != null">\n\n            <ion-label> {{"login_recent"|translate}}: {{recentUser.email}} | {{"score"|translate}}: {{recentUser.score}}</ion-label>\n\n        </ion-item> -->\n\n        <!-- <ion-item class="form-input">\n\n            <button id="submit-button" (click)="onRegisterNow()" ion-button outline>{{"register now"|translate}}</button>\n\n        </ion-item>\n\n        <ion-item class="form-input">\n\n            <button id="submit-button" (click)="onPreRegistration()" ion-button outline>{{"pre_registration"|translate}}</button>\n\n        </ion-item>\n\n        <ion-item class="form-input" *ngIf="recentUser != undefiend && recentUser != null">\n\n            <button id="submit-button" (click)="onReLogin()" ion-button outline>{{"login"|translate}}</button>\n\n        </ion-item> -->\n\n        <ion-item class="form-input">\n\n            <ion-label>{{"event_id"|translate}}*</ion-label>\n\n            <ion-input [(ngModel)]="form.event_id"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="form-input">\n\n            <ion-label>{{"name"|translate}}*</ion-label>\n\n            <ion-input [(ngModel)]="form.name"></ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item class="form-input">\n\n            <ion-label>{{"passport"|translate}}</ion-label>\n\n            <ion-input [(ngModel)]="form.identity_passport"></ion-input>\n\n        </ion-item> -->\n\n        <ion-item class="form-input">\n\n            <ion-label>{{"email"|translate}}*</ion-label>\n\n            <ion-input type="email" [(ngModel)]="form.email"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="form-input">\n\n            <ion-label>{{"phone"|translate}}*</ion-label>\n\n            <ion-input type="text" (click)="selectcode()" value="{{countrycode}}" class="tm-countrycode"></ion-input>\n\n            <ion-input type="tel" [(ngModel)]="form.phone_number" class="tm-phone"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="form-input">\n\n            <ion-label>{{"gender"|translate}}</ion-label>\n\n            <ion-input [(ngModel)]="form.gender" readonly (click)="showGenderSelection()"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="extraFields != undefined && extraFields.length > 0">\n\n            <ion-label class="subtitle">{{"others"|translate}}</ion-label>\n\n        </ion-item>\n\n        <ion-item class="form-input" *ngFor="let field of extraFields">\n\n            <ion-label>{{field.name}}*</ion-label>\n\n            <ion-input (input)="extraFieldInputChange($event.target.value, field.id)"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="check-checkbox">\n\n            <ion-checkbox class="checkbox" ng-checked="checked" (ionChange)="updateAcceptPrivacy()"></ion-checkbox>\n\n            <ion-label (click)="onPrivacy()"><u>I Accept Privacy Policy</u></ion-label>\n\n        </ion-item>\n\n\n\n        <!-- <ion-item>\n\n            <button id="submit-button" (click)="onSubmitForm()" ion-button outline>{{"check_in"|translate}}</button>\n\n        </ion-item> -->\n\n    </ion-list>\n\n</ion-scroll>\n\n</div>\n\n\n\n<div class="footer">\n\n    \n\n       <!-- <button id="test-button" class="MyApp.Style" (click)="openModal()"  ion-button outline>Modal open</button>  -->\n\n     <!-- <button id="test-close" class="MyApp.Style" (click)="closeModal()"  ion-button outline>Modal close</button>   --> \n\n    <button id="submit-button" class="MyApp.Style" (click)="onSubmitForm()"  ion-button outline>\n\n        <!-- <ion-item>\n\n            <ion-label> -->\n\n                    {{"check_in"|translate}}\n\n            <!-- </ion-label>\n\n               \n\n        </ion-item> -->\n\n        \n\n    </button>\n\n                    \n\n           \n\n    <!-- </div> -->\n\n    \n\n    <!-- </ion-item> -->\n\n    <!-- <img class="logo" src="assets/images/logo.png" alt="App\'s Logo"> -->\n\n    \n\n</div>\n\n</app-content>'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\pages\sign-up\sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_register_service_register_service__["a" /* RegisterServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_event_service_event_service__["a" /* EventServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STORAGE_APP_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return STORAGE_APP_FONT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return STORAGE_APP_EVENT_LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return STORAGE_APP_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return STORAGE_APP_HAS_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return STORAGE_APP_HAS_REDEEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return STORAGE_OLD_EVENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return STORAGE_APP_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STORAGE_ANDROID_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return STORAGE_WINDOWS_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return STORAGE_IOS_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STORAGE_APP_DYNAMIC_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return STORAGE_APP_PRIVACY_POLICY; });
//export const API_ENDPOINT = "http://35.224.236.132/event/public/api/v1";
//export const API_ENDPOINT = "http://35.224.236.132/event/public/api/v1";
var API_ENDPOINT = "http://www.mymobile.asia/app/public/api/v1";
//export const API_ENDPOINT = "http://192.168.88.122/system/qrsystem/public/index.php/api/v1";
// Storage Key
var STORAGE_APP_BACKGROUND = "storage_app_background";
var STORAGE_APP_FONT_COLOR = "storage_app_font_color";
var STORAGE_APP_EVENT_LOGO = "storage_app_event_logo";
var STORAGE_APP_LANGUAGE = "storage_app_language";
var STORAGE_APP_HAS_LOGIN = "storage_app_has_login";
var STORAGE_APP_HAS_REDEEM = "storage_app_has_redeem";
var STORAGE_OLD_EVENT_ID = "storage_old_event_id";
var STORAGE_APP_USER = "storage_app_user";
var STORAGE_ANDROID_APP_ID = 'io.ionic.event';
var STORAGE_WINDOWS_APP_ID = 'io.ionic.event';
var STORAGE_IOS_APP_ID = '12345678';
var STORAGE_APP_DYNAMIC_TEXT = "storage_app_dynamic_text";
var STORAGE_APP_PRIVACY_POLICY = "storage_app_privacy_policy";
//# sourceMappingURL=app.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal/modal.module": [
		358,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_service_config_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__no_event_no_event__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__language_selection_language_selection__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the LoadingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
var LoadingPage = (function () {
    function LoadingPage(navCtrl, navParams, configService, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configService = configService;
        this.storage = storage;
        this.events = events;
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        // Setup app config
        console.log("ionViewDidLoad");
        this.setupConfig();
    };
    LoadingPage.prototype.setupConfig = function () {
        var _this = this;
        this.configService.loadConfig()
            .then(function (data) {
            var hasEvent = data['has_event'];
            if (hasEvent) {
                _this.saveAppConfig(data).then(function () {
                    _this.showNextPage();
                });
            }
            else {
                // Exit app
                _this.showNoEventPage();
            }
        });
    };
    LoadingPage.prototype.saveAppConfig = function (data) {
        var config = {};
        config[__WEBPACK_IMPORTED_MODULE_4__config_app__["c" /* STORAGE_APP_BACKGROUND */]] = data['background_url'];
        config[__WEBPACK_IMPORTED_MODULE_4__config_app__["f" /* STORAGE_APP_FONT_COLOR */]] = data['font_color'];
        config[__WEBPACK_IMPORTED_MODULE_4__config_app__["e" /* STORAGE_APP_EVENT_LOGO */]] = data['event_logo'];
        config[__WEBPACK_IMPORTED_MODULE_4__config_app__["d" /* STORAGE_APP_DYNAMIC_TEXT */]] = data['dynamic_text'];
        config[__WEBPACK_IMPORTED_MODULE_4__config_app__["j" /* STORAGE_APP_PRIVACY_POLICY */]] = data['privacy_policy'];
        console.log("dynamic_txt:" + data['dynamic_text']);
        var promise = [];
        for (var key in config) {
            if (config.hasOwnProperty(key)) {
                var storePromise = this.storage.set(key, config[key]);
                promise.push(storePromise);
            }
        }
        this.events.publish('fontcolor:change');
        return Promise.all(promise);
    };
    LoadingPage.prototype.showNextPage = function () {
        var _this = this;
        this.getNeededConfig().then(function (data) {
            // Language not selected
            if (data[__WEBPACK_IMPORTED_MODULE_4__config_app__["i" /* STORAGE_APP_LANGUAGE */]] == null) {
                data[__WEBPACK_IMPORTED_MODULE_4__config_app__["i" /* STORAGE_APP_LANGUAGE */]] = 'en';
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_4__config_app__["i" /* STORAGE_APP_LANGUAGE */], 'en');
            }
            if (data[__WEBPACK_IMPORTED_MODULE_4__config_app__["i" /* STORAGE_APP_LANGUAGE */]] == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__language_selection_language_selection__["a" /* LanguageSelectionPage */]);
            }
            else if (data[__WEBPACK_IMPORTED_MODULE_4__config_app__["g" /* STORAGE_APP_HAS_LOGIN */]] == null || data[__WEBPACK_IMPORTED_MODULE_4__config_app__["g" /* STORAGE_APP_HAS_LOGIN */]] == false) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
            }
        });
    };
    LoadingPage.prototype.showNoEventPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__no_event_no_event__["a" /* NoEventPage */]);
    };
    LoadingPage.prototype.getNeededConfig = function () {
        var _this = this;
        var config = [
            __WEBPACK_IMPORTED_MODULE_4__config_app__["i" /* STORAGE_APP_LANGUAGE */],
            __WEBPACK_IMPORTED_MODULE_4__config_app__["g" /* STORAGE_APP_HAS_LOGIN */]
        ];
        var promise = [];
        config.forEach(function (val) {
            promise.push(_this.storage.get(val));
        });
        return Promise.all(promise).then(function (values) {
            var result = [];
            values.map(function (value, index) {
                result[config[index]] = value;
            });
            return result;
        });
    };
    return LoadingPage;
}());
LoadingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-loading',template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\pages\loading\loading.html"*/'<!--\n  Generated template for the LoadingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content class="vertical-align-content">\n\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <img class="logo" src="assets/images/logo.png" alt="Logo">\n\n                <ion-spinner name="crescent"></ion-spinner>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\pages\loading\loading.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_config_service_config_service__["a" /* ConfigServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], LoadingPage);

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ConfigServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ConfigServiceProvider = (function () {
    function ConfigServiceProvider(http) {
        this.http = http;
    }
    ConfigServiceProvider.prototype.loadConfig = function () {
        var _this = this;
        console.log("loading config");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* API_ENDPOINT */] + '/config')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    return ConfigServiceProvider;
}());
ConfigServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ConfigServiceProvider);

//# sourceMappingURL=config-service.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NoEventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NoEventPage = (function () {
    function NoEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NoEventPage.prototype.ionViewDidLoad = function () {
    };
    return NoEventPage;
}());
NoEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-no-event',template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\pages\no-event\no-event.html"*/'<!--\n  Generated template for the NoEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="vertical-align-content">\n\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <img class="logo" src="assets/images/logo.png" alt="Logo">\n\n                <p>{{"no_event"|translate}} </p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\pages\no-event\no-event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], NoEventPage);

//# sourceMappingURL=no-event.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_service_register_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_service_profile_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, registerService, alertCtrl, profileService, loadingCtrl, storage, transfer, camera, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registerService = registerService;
        this.alertCtrl = alertCtrl;
        this.profileService = profileService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.transfer = transfer;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.qrData = null;
        this.createdCode = null;
        this.form = {};
        this.setupExtraFields();
    }
    ProfilePage.prototype.toastShow = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ProfilePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.PNG,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myPhoto = imageData;
            // this.uploadPhoto(imageData);
        }, function (error) {
            _this.toastShow(error);
            // this.error = JSON.stringify(error);
        });
    };
    ProfilePage.prototype.selectPhoto = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            encodingType: this.camera.EncodingType.PNG,
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            //this.uploadPhoto(imageData);
        }, function (error) {
            // this.error = JSON.stringify(error);
            _this.toastShow(error);
        });
    };
    /*     getImage() {
            const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            }
    
            this.camera.getPicture(options).then((imageData) => {
                this.imageURI = imageData;
            }, (err) => {
                console.log(err);
                this.toastShow(err);
            });
        }
    
        uploadFile() {
            let loader = this.loadingCtrl.create({
                content: "Uploading..."
            });
            loader.present();
            const fileTransfer: FileTransferObject = this.transfer.create();
    
            let options: FileUploadOptions = {
                fileKey: 'ionicfile',
                fileName: 'ionicfile',
                chunkedMode: false,
                mimeType: "image/jpeg",
                headers: {}
            }
    
            fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
                .then((data) => {
                console.log(data+" Uploaded Successfully");
                this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
                loader.dismiss();
                this.toastShow("Image uploaded successfully");
            }, (err) => {
                console.log(err);
                loader.dismiss();
                this.toastShow(err);
            });
        } */
    ProfilePage.prototype.createCode = function () {
        if (this.form.age !== undefined
            && this.form.age !== ''
            && this.form.key_in_company_name !== undefined
            && this.form.key_in_company_name !== ''
            && this.form.designation !== undefined
            && this.form.designation !== ''
            && this.form.website !== undefined
            && this.form.website !== '') {
            this.createdCode = JSON.stringify(this.form);
        }
    };
    ProfilePage.prototype.setupExtraFields = function () {
        var _this = this;
        this.registerService.getExtraFields().then(function (data) {
            if (data.success) {
                _this.extraFields = data.content;
            }
            _this.loadParticipantProfile();
        });
    };
    ProfilePage.prototype.loadParticipantProfile = function () {
        var _this = this;
        this.profileService.getProfile().then(function (data) {
            if (data.success) {
                _this.processParticipantProfileToForm(data.content);
            }
        });
    };
    ProfilePage.prototype.processParticipantProfileToForm = function (data) {
        var _this = this;
        this.profile = data.profile;
        var profile = data.profile;
        console.log(this.profile);
        this.form = {
            name: profile.name,
            identity_passport: profile.identity_passport,
            email: profile.email,
            mobile_number: profile.mobile_number,
            gender: profile.gender,
            age: profile.age,
            key_in_company_name: profile.key_in_company_name,
            designation: profile.designation,
            website: profile.website
        };
        this.selectedGender = profile.gender;
        this.createCode();
        // extra fields
        var fields = data.extra_fields;
        fields.forEach(function (field) {
            _this.extraFields.forEach(function (extraField) {
                if (field.id == extraField.id) {
                    extraField.value = field.value;
                }
                // update form model as well
                _this.extraFieldInputChange(field.value, field.id);
            });
        });
    };
    ProfilePage.prototype.saveUserProfile = function (user) {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_2__config_app__["k" /* STORAGE_APP_USER */], user);
    };
    ProfilePage.prototype.updateProfile = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Updating. Please wait...'
        });
        loading.present();
        this.profileService.updateProfile(this.form).then(function (data) {
            loading.dismiss();
            _this.saveUserProfile(data.content);
        });
    };
    ProfilePage.prototype.onSubmitForm = function () {
        // Check if all compulsory selection is selected
        if (this.canSubmit()) {
            this.updateProfile();
            this.createCode();
        }
    };
    ProfilePage.prototype.canSubmit = function () {
        if (this.form.name == undefined || this.form.name == '') {
            this.showAlertMessage('Name is required');
            return false;
        }
        else if (this.form.email == undefined || this.form.email == '') {
            this.showAlertMessage('Email is required');
            return false;
        }
        else if (!this.validateEmail(this.form.email)) {
            this.showAlertMessage('Email is not valid');
            return false;
        }
        else if (this.form.mobile_number == undefined || this.form.mobile_number == '') {
            this.showAlertMessage('Mobile number is required');
            return false;
        }
        else if (this.form.gender == undefined || this.form.gender == '') {
            this.showAlertMessage('Gender is required');
            return false;
        }
        else if (this.form.age == undefined || this.form.age == '') {
            this.showAlertMessage('Age is required');
            return false;
        }
        else if (this.form.key_in_company_name == undefined || this.form.key_in_company_name == '') {
            this.showAlertMessage('Company name is required');
            return false;
        }
        else if (this.form.designation == undefined || this.form.designation == '') {
            this.showAlertMessage('Designation is required');
            return false;
        }
        else if (this.form.website == undefined || this.form.website == '') {
            this.showAlertMessage('Website is required');
            return false;
        }
        return true;
    };
    ProfilePage.prototype.selectGender = function (gender) {
        this.selectedGender = gender;
        this.form.gender = gender;
    };
    ProfilePage.prototype.extraFieldInputChange = function (value, fieldId) {
        this.form[fieldId] = value;
    };
    ProfilePage.prototype.showGenderSelection = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Choose Gender',
            message: '',
            buttons: [
                {
                    text: 'Male',
                    handler: function () {
                        _this.selectGender('male');
                    }
                },
                {
                    text: 'Female',
                    handler: function () {
                        _this.selectGender('female');
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.showAlertMessage = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Notice',
            message: message,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ProfilePage.prototype.validatePhoneNumber = function (phone_number) {
        var len = phone_number.length;
        if (len != 10) {
            return false;
        }
        return true;
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\pages\profile\profile.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header class="header">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{"profile"|translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<app-content margin-top>\n    <ion-scroll class="register-form" scrollY="true">\n        <!-- <ion-content padding>\n           \n        </ion-content> -->\n        <ion-list>\n            <!-- <ion-item style="text-align: center;" *ngIf="profile != undefined">\n                <ion-label >{{"profile_id"|translate}}: {{profile.draw_id}}</ion-label>\n            </ion-item>\n\n             <ion-item>\n                <p>{{imageURI}}</p>\n                <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n            </ion-item>\n            <ion-item>\n                <h4>Image Preview</h4>\n                <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n            </ion-item>\n            <ion-item>\n                <button ion-button (click)="uploadFile()">Upload</button>\n            </ion-item> -->\n            <ion-item>\n            <ion-row>\n                <ion-col col-6>\n                <button ion-button color="danger" type="button" full round large (click)="takePhoto()">\n                    <ion-icon name="camera"></ion-icon>\n                </button>\n                </ion-col>\n                <ion-col col-6>\n                <button ion-button color="secondary" type="button" full round large (click)="selectPhoto()">\n                    <ion-icon name="image"></ion-icon>\n                </button>\n                </ion-col>\n            </ion-row>\n            </ion-item>\n            <ion-item *ngIf="error">\n                <strong>{{error}}</strong>\n            </ion-item>\n            <ion-item>\n                <div class="img-wrap">\n                    <img  *ngIf="myPhoto" class="img-responsive tm-user-photo" src="assets/images/sarah.jpeg" [src]="myPhoto"/> <!--*ngIf="myPhoto" [src]="myPhoto" -->\n                    <img  *ngIf="!myPhoto" class="img-responsive tm-user-photo" src="assets/images/noimg.png"/> <!--*ngIf="myPhoto" [src]="myPhoto" -->\n                </div>\n            </ion-item>\n\n            <ion-item class="form-input">\n                <ion-label>{{"name"|translate}}</ion-label>\n                <ion-input [(ngModel)]="form.name" readonly></ion-input>\n            </ion-item>\n            <!-- <ion-item class="form-input">\n                <ion-label>{{"passport"|translate}}</ion-label>\n                <ion-input [(ngModel)]="form.identity_passport"></ion-input>\n            </ion-item> -->\n            <ion-item class="form-input">\n                <ion-label>{{"email"|translate}}</ion-label>\n                <ion-input readonly="true" type="email" [(ngModel)]="form.email" readonly></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>{{"phone"|translate}}</ion-label>\n                <ion-input type="tel" [(ngModel)]="form.mobile_number" readonly></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>{{"gender"|translate}}</ion-label>\n                <ion-input [(ngModel)]="form.gender" readonly></ion-input> <!-- (click)="showGenderSelection()" -->\n            </ion-item>\n            <ion-item *ngIf="extraFields != undefined && extraFields.length > 0">\n                <ion-label class="subtitle">{{"others"|translate}}</ion-label>\n            </ion-item>\n            <ion-item class="form-input" *ngFor="let field of extraFields">\n                <ion-label>{{field.name}}</ion-label>\n                <ion-input (input)="extraFieldInputChange($event.target.value, field.id)" value="{{ field.value ? field.value : \'\' }}"></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>Age</ion-label>\n                <ion-input type="tel" [(ngModel)]="form.age"></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>Company</ion-label>\n                <ion-input [(ngModel)]="form.key_in_company_name"></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>Designation</ion-label>\n                <ion-input [(ngModel)]="form.designation"></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>Website</ion-label>\n                <ion-input [(ngModel)]="form.website"></ion-input>\n            </ion-item>\n            <ion-item>\n                <button id="submit-button" (click)="onSubmitForm()" ion-button outline>{{"update"|translate}}</button>\n            </ion-item>\n            <!-- <ion-item>\n                <button (click)="createCode()" ion-button outline>{{"create"|translate}}</button>\n            </ion-item> -->\n        </ion-list>\n        <!-- <div id="qr_code"></div> -->\n        <ion-card *ngIf="createdCode">\n            <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n            <!-- <ion-card-content>\n                <p>Value: {{ createdCode }}</p>\n            </ion-card-content> -->\n        </ion-card>\n    </ion-scroll>\n\n</app-content>\n'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_register_service_register_service__["a" /* RegisterServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_register_service_register_service__["a" /* RegisterServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_profile_service_profile_service__["a" /* ProfileServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_profile_service_profile_service__["a" /* ProfileServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _k || Object])
], ProfilePage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ProfileServiceProvider = (function () {
    function ProfileServiceProvider(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    ProfileServiceProvider.prototype.getProfile = function () {
        return this.apiService.get('/profile/get');
    };
    ProfileServiceProvider.prototype.updateProfile = function (form) {
        return this.apiService.post('/profile/update', form);
    };
    return ProfileServiceProvider;
}());
ProfileServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* ApiServiceProvider */]])
], ProfileServiceProvider);

//# sourceMappingURL=profile-service.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignOutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
var SignOutPage = (function () {
    function SignOutPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    SignOutPage.prototype.performSignOut = function () {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__config_app__["g" /* STORAGE_APP_HAS_LOGIN */], false);
        // go dashboard
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    return SignOutPage;
}());
SignOutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sign-out',template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\pages\sign-out\sign-out.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header class="header">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<app-content margin-top>\n\n    <div class="container">\n        <ion-title>{{"signout_title"|translate}} ?</ion-title>\n        <ion-label>{{"signout_label"|translate}}.</ion-label>\n\n        <button id="sign-out-button" (click)="performSignOut()" ion-button outline>{{"signout_confirm"|translate}}</button>\n    </div>\n\n</app-content>\n'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\pages\sign-out\sign-out.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], SignOutPage);

//# sourceMappingURL=sign-out.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_service_event_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_zbar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(35);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GAME_TYPE_INPUT = "game_type_text_input";
var GAME_TYPE_RULE = "game_type_image_rule";
//@IonicPage()
var ScorePage = ScorePage_1 = (function () {
    function ScorePage(navCtrl, navParams, eventService, zbar, loadingCtrl, alertCtrl, storage, events, apiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventService = eventService;
        this.zbar = zbar;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.events = events;
        this.apiProvider = apiProvider;
        this.hideScanScore = true;
        this.participantScore = 0;
        this.showCompleted = false;
        this.current_type = '';
        this.hasUserRedeem = false;
        this.hideViewScore = true;
        this.loadLiveEventDetail();
        this.loadParticipantScore();
        storage.get(__WEBPACK_IMPORTED_MODULE_6__config_app__["h" /* STORAGE_APP_HAS_REDEEM */])
            .then(function (val) {
            _this.hasUserRedeem = val;
        });
    }
    // ngOnInit() {
    //     this.storage.get("nav")
    //         .then((val) => {
    //             if(val=="slide2") {
    //                 this.storage.remove('nav');
    //                 this.showActivitesList();
    //             }
    //             if (val == "view_score"){
    //                 this.storage.remove('nav');
    //                 this.showActivityViewScore();
    //                 this.hideViewScore = false;
    //             }
    //         });
    // }
    ScorePage.prototype.scanQRCode = function () {
        var _this = this;
        // Check is Game Type Input fill up all the input
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        var canScan = true;
        if (activity.type == GAME_TYPE_INPUT) {
            var fields = activity.game.fields;
            fields.forEach(function (field) {
                if (field.value == undefined || field.value == null || field.value.length <= 0) {
                    canScan = false;
                }
            });
        }
        if (canScan) {
            var options = {
                flash: 'off',
                drawSight: false
            };
            this.zbar.scan(options)
                .then(function (result) {
                _this.markGameComplete(result);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        else {
            this.showAlertMessage("Please fill up all the blank field.");
        }
    };
    ScorePage.prototype.markGameComplete = function (scoreCode) {
        var _this = this;
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        if (activity != undefined) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Processing. Please wait...'
            });
            loading_1.present();
            this.eventService.markGameComplete(scoreCode, activity.stage.id, activity.game.id, activity.game_type, activity.game.fields)
                .then(function (data) {
                loading_1.dismiss();
                if (data.success) {
                    _this.showAlertMessage("Successfully collected " + data.content.added_score + " points");
                    _this.participantScore = data.content.new_score;
                }
                else {
                    _this.showAlertMessage(data.message);
                }
                if (data.completed)
                    activity.completed = true;
                _this.invalidateShowScanScore();
                _this.invalidateShowCompleted();
            })
                .catch(function (error) {
                loading_1.dismiss();
                console.log(error);
            });
        }
    };
    ScorePage.prototype.loadParticipantScore = function () {
        var _this = this;
        this.eventService.getParticipantScore()
            .then(function (data) {
            if (data.success) {
                _this.userId = data.content.userId;
                _this.userDrawId = data.content.drawId;
                _this.participantScore = data.content.score;
                _this.events.publish('profile:updated', {
                    id: _this.userId,
                    drawId: _this.userDrawId
                });
            }
        });
    };
    ScorePage.prototype.processDataIntoActivities = function (data) {
        var _this = this;
        // clear
        this.activities = [];
        this.activityListIndex = 0;
        this.activityViewScore = 0;
        // banners
        var banners = data.banners;
        banners.forEach(function (banner) {
            _this.activities.push(__assign({}, banner, { type: 'banner' }));
            _this.activityListIndex++;
            _this.activityViewScore++;
        });
        // activities
        var activityList = data.activities;
        this.activities.push({
            title: data.title,
            type: 'activity_list',
            activities: activityList
        });
        this.activityViewScore++;
        // games
        var games = data.games;
        games.forEach(function (game) {
            _this.activities.push(__assign({}, game, { title: game.stage.title, type: game.game_type }));
            _this.activityViewScore++;
        });
        // Score
        this.activities.push({
            title: 'Score',
            type: 'score'
        });
        // Redeem
        this.activities.push({
            title: '',
            type: 'redeem'
        });
        console.log(this.activities);
        this.activityTitle = this.activities[0].title;
    };
    ScorePage.prototype.showGameActivity = function (gameType, gameId) {
        var activityIndex = -1;
        var count = 0;
        this.activities.forEach(function (activity) {
            if (activity.type == GAME_TYPE_INPUT || activity.type == GAME_TYPE_RULE) {
                if (gameId == activity.game.id) {
                    activityIndex = count;
                }
            }
            count++;
        });
        if (activityIndex >= 0) {
            this.slides.slideTo(activityIndex, 200);
        }
    };
    ScorePage.prototype.showScoreActivity = function () {
        var scoreActivityIndex = -1;
        var count = 0;
        this.activities.forEach(function (activity) {
            if (activity.type == 'score') {
                scoreActivityIndex = count;
            }
            count++;
        });
        if (scoreActivityIndex >= 0) {
            this.slides.slideTo(scoreActivityIndex, 200);
        }
    };
    ScorePage.prototype.showPreviousActivity = function () {
        this.slides.slidePrev(200);
    };
    ScorePage.prototype.showNextActivity = function () {
        this.slides.slideNext(200);
    };
    ScorePage.prototype.showActivitesList = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.activityListIndex < 0)
                _this.activityListIndex = 0;
            _this.slides.slideTo(_this.activityListIndex, 200);
        }, 2000);
        // this.slides.slideTo(2, 200);
    };
    ScorePage.prototype.showActivityViewScore = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.activityViewScore < 0)
                _this.activityViewScore = 0;
            _this.slides.slideTo(_this.activityViewScore, 200);
        }, 2000);
    };
    ScorePage.prototype.invalidateShowScanScore = function () {
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        this.current_type = activity.type;
        this.hideScanScore = (activity.type != GAME_TYPE_INPUT && activity.type != GAME_TYPE_RULE) || activity.completed;
    };
    ScorePage.prototype.invalidateShowCompleted = function () {
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        console.log(this.activities[currentIndex]);
        console.log(this.activityTitle);
        this.showCompleted = activity.completed;
    };
    ScorePage.prototype.loadLiveEventDetail = function () {
        var _this = this;
        this.eventService.getLiveEventDetail().then(function (data) {
            if (data.success) {
                _this.processDataIntoActivities(data.content);
            }
        }).catch(function (error) {
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__config_app__["g" /* STORAGE_APP_HAS_LOGIN */], false);
            // go register page
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
        });
    };
    ScorePage.prototype.onGameTextInput = function (value, gameId, fieldId) {
        // Record the value
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        var fields = activity.game.fields;
        fields.forEach(function (field) {
            if (field.id == fieldId) {
                field.value = value;
            }
        });
    };
    ScorePage.prototype.acitivityChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        if (activity != undefined) {
            this.activityTitle = activity.title;
            // check need show scan score
            this.invalidateShowScanScore();
            this.invalidateShowCompleted();
        }
    };
    ScorePage.prototype.showAlertMessage = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Notice',
            message: message,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    ScorePage.prototype.backToHome = function () {
        this.slides.slideTo(0, 200);
    };
    ScorePage.prototype.redeem = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "You'll not able to participated in any game.",
            message: '',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Redeem!',
                    handler: function () {
                        console.log("App Path", __WEBPACK_IMPORTED_MODULE_6__config_app__["a" /* API_ENDPOINT */]);
                        console.log("redeem user id", _this.userId);
                        _this.eventService.setRedeem(_this.userId)
                            .then(function (data) {
                            if (data.success) {
                                _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__config_app__["h" /* STORAGE_APP_HAS_REDEEM */], true);
                                _this.navCtrl.setRoot(ScorePage_1);
                            }
                            else {
                                _this.showAlertMessage(data.message);
                            }
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    return ScorePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], ScorePage.prototype, "slides", void 0);
ScorePage = ScorePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-score',template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\pages\score\score.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header class="header">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n\n<app-content margin-top>\n\n    <div class="container">\n        <div class="slider">\n            <ion-scroll>\n            <!-- Score -->\n            <div class="score-container">\n                <ion-label class="profileid">{{"profile_id"|translate}}: {{userDrawId}}</ion-label>\n                <ion-label text-wrap class="title">{{"total_score"|translate}}</ion-label>\n                <ion-label class="score">{{participantScore}}</ion-label>\n            </div>\n        </ion-scroll>\n        </div>\n        <div class="footer">\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-3>\n                        <!-- <button (click)="showPreviousActivity()" class="navigation-icon" ion-button clear>\n                            <img src="assets/icon/icon_left_arrow.png" alt="Left Arrow">\n                        </button> -->\n                    </ion-col>\n\n                    <ion-col col-6>\n                        <!-- <button *ngIf="!hasUserRedeem && !hideScanScore" (click)="scanQRCode()" ion-button outline>{{"scan"|translate}} </button> -->\n                        <ion-label *ngIf="hasUserRedeem">\n                            <b>Redeemed</b>\n                        </ion-label>\n                        <ion-label *ngIf="!hasUserRedeem && showCompleted">\n                            <b>{{"completed"|translate}}!</b>\n                        </ion-label>\n                        <button *ngIf="!hasUserRedeem" (click)="redeem()" ion-button outline>{{"redeem"|translate}} </button>\n                        <button *ngIf="!hasUserRedeem && current_type==\'score\'" (click)="redeem()" ion-button outline>{{"redeem"|translate}} </button>\n                    </ion-col>\n\n                    <ion-col col-3>\n                        <!-- <button (click)="showNextActivity()" class="navigation-icon" ion-button clear>\n                            <img src="assets/icon/icon_right_arrow.png" alt="Left Arrow">\n                        </button> -->\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n\n</app-content>'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\pages\score\score.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_event_service_event_service__["a" /* EventServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_zbar__["a" /* ZBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
], ScorePage);

var ScorePage_1;
//# sourceMappingURL=score.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(263);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ApiServiceProvider = (function () {
    function ApiServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ApiServiceProvider.prototype.get = function (urlPath, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (this.locale == undefined || this.locale == null ||
            this.apiToken == undefined || this.apiToken == null) {
            return new Promise(function (resolve, reject) {
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["i" /* STORAGE_APP_LANGUAGE */]).then(function (val) {
                    _this.locale = val;
                    // Check has api token
                    _this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["k" /* STORAGE_APP_USER */]).then(function (data) {
                        var apiToken = data != undefined && data != null ? data.api_token : '';
                        if (apiToken != undefined && apiToken != null && apiToken != '') {
                            _this.apiToken = apiToken;
                        }
                        _this.requestGet(urlPath, params).then(function (data) {
                            resolve(data);
                        }).catch(function (error) { return reject(error); });
                    });
                });
            });
        }
        else {
            return this.requestGet(urlPath, params);
        }
    };
    ApiServiceProvider.prototype.post = function (urlPath, params) {
        var _this = this;
        if (this.apiToken == undefined || this.apiToken == null) {
            return new Promise(function (resolve, reject) {
                // Check has api token
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["k" /* STORAGE_APP_USER */]).then(function (data) {
                    var apiToken = data != undefined && data != null ? data.api_token : '';
                    if (apiToken != undefined && apiToken != null && apiToken != '') {
                        _this.apiToken = apiToken;
                    }
                    _this.requestPost(urlPath, params).then(function (data) {
                        resolve(data);
                    }).catch(function (error) { return reject(error); });
                });
            });
        }
        else {
            return this.requestPost(urlPath, params);
        }
    };
    ApiServiceProvider.prototype.requestGet = function (urlPath, params) {
        var _this = this;
        // Construct query string
        var queryString = 'locale=' + this.locale + '&api_token=' + this.apiToken;
        for (var key in params) {
            queryString += key + '=' + encodeURIComponent(params[key]) + '&';
        }
        console.log(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* API_ENDPOINT */] + urlPath + '?' + queryString);
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* API_ENDPOINT */] + urlPath + '?' + queryString)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log("SUccess");
                resolve(data);
            }, function (error) {
                console.log("Fail");
                reject({ error: "error" });
                // resolve(error._body);                
            });
        });
    };
    ApiServiceProvider.prototype.requestPost = function (urlPath, params) {
        var _this = this;
        params['api_token'] = this.apiToken;
        //console.log(App.API_ENDPOINT)
        console.log("api_token", this.apiToken);
        console.log(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* API_ENDPOINT */] + urlPath);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* API_ENDPOINT */] + urlPath, params)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject({ error: "error" });
            });
        });
    };
    return ApiServiceProvider;
}());
ApiServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], ApiServiceProvider);

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_image_loader__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_loading_loading__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_no_event_no_event__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_language_selection_language_selection__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sign_out_sign_out__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_score_score__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_config_service_config_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_register_service_register_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_event_service_event_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_zbar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_profile_service_profile_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_app_rate__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngx_translate_http_loader__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng_imgcache__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng_imgcache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_ng_imgcache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_keyboard__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_device__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_android_permissions__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ngx_qrcode2__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_camera__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_transfer__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_file__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_27__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_loading_loading__["a" /* LoadingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_no_event_no_event__["a" /* NoEventPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_language_selection_language_selection__["a" /* LanguageSelectionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_sign_out_sign_out__["a" /* SignOutPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_score_score__["a" /* ScorePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_28_ng_imgcache__["ImgCacheModule"],
            __WEBPACK_IMPORTED_MODULE_32_ngx_qrcode2__["a" /* NgxQRCodeModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                mode: 'ios',
            }, {
                links: [
                    { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]]
                }
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_loading_loading__["a" /* LoadingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_no_event_no_event__["a" /* NoEventPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_language_selection_language_selection__["a" /* LanguageSelectionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_sign_out_sign_out__["a" /* SignOutPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_score_score__["a" /* ScorePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_register_service_register_service__["a" /* RegisterServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_event_service_event_service__["a" /* EventServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_zbar__["a" /* ZBar */],
            __WEBPACK_IMPORTED_MODULE_24__providers_profile_service_profile_service__["a" /* ProfileServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_app_rate__["a" /* AppRate */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_file__["a" /* File */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_content_app_content__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_image_loader__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_imgcache__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_imgcache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_imgcache__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__app_content_app_content__["a" /* AppContentComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_image_loader__["a" /* IonicImageLoader */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4_ng_imgcache__["ImgCacheModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__app_content_app_content__["a" /* AppContentComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AppContentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var AppContentComponent = (function () {
    function AppContentComponent(storage) {
        this.storage = storage;
        // Setup app background image
        this.setupAppBackgroundImage();
    }
    AppContentComponent.prototype.setupAppBackgroundImage = function () {
        var _this = this;
        // set default image
        this.appBackgroundImage = '../../assets/images/splash.png';
        this.storage.get(__WEBPACK_IMPORTED_MODULE_2__config_app__["c" /* STORAGE_APP_BACKGROUND */]).then(function (val) {
            if (val != undefined && val != '' && val != 'null') {
                _this.appBackgroundImage = val;
            }
            else {
                _this.appBackgroundImage = '../../assets/images/default_app_background.jpg';
            }
        });
    };
    return AppContentComponent;
}());
AppContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-content',template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\components\app-content\app-content.html"*/'<!-- Generated template for the AppContentComponent component -->\n<div  >\n    <div class="background-container">\n      <img class="app-background-image " img-cache img-cache-src="{{appBackgroundImage}}" alt="Background image">\n      {{appFontColor}}\n    </div>\n\n    <ng-content></ng-content>\n</div>\n'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\components\app-content\app-content.html"*/,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], AppContentComponent);

//# sourceMappingURL=app-content.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_loading_loading__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_out_sign_out__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sign_up_sign_up__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_score_score__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_rate__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_language_selection_language_selection__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_imgcache__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_imgcache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng_imgcache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// Menu Page











var MyApp = (function () {
    function MyApp(keyboard, platform, statusBar, splashScreen, appRate, translate, storage, imgCache, events, menuCtrl, toast) {
        var _this = this;
        this.keyboard = keyboard;
        this.appRate = appRate;
        this.translate = translate;
        this.storage = storage;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.toast = toast;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_loading_loading__["a" /* LoadingPage */];
        this.backPressed = false;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__config_app__["i" /* STORAGE_APP_LANGUAGE */]).then(function (code) {
            if (code)
                translate.setDefaultLang(code);
            else
                translate.setDefaultLang('en');
        });
        this.pages = [
            { title: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'view_score', component: __WEBPACK_IMPORTED_MODULE_12__pages_score_score__["a" /* ScorePage */] },
            { title: 'activities', component: 'Activities' },
            { title: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'rate_us', component: 'AppRatePage' },
            { title: 'change_language', component: __WEBPACK_IMPORTED_MODULE_15__pages_language_selection_language_selection__["a" /* LanguageSelectionPage */] },
            { title: 'logout', component: __WEBPACK_IMPORTED_MODULE_9__pages_sign_out_sign_out__["a" /* SignOutPage */] }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            // splashScreen.hide();
            _this.appRate.preferences = {
                usesUntilPrompt: 1,
                customLocale: {
                    title: "Would you mind rating %@?",
                    message: "It won’t take more than a minute and helps to promote our app. Thanks for your support!",
                    cancelButtonLabel: "No, Thanks",
                    laterButtonLabel: "Remind Me Later",
                    rateButtonLabel: "Rate It Now",
                    yesButtonLabel: "Yes!",
                    noButtonLabel: "Not really",
                    appRatePromptTitle: 'Do you like using %@',
                    feedbackPromptTitle: 'Mind giving us some feedback?',
                },
                storeAppURL: {
                    ios: __WEBPACK_IMPORTED_MODULE_5__config_app__["l" /* STORAGE_IOS_APP_ID */],
                    android: 'market://details?id=' + __WEBPACK_IMPORTED_MODULE_5__config_app__["b" /* STORAGE_ANDROID_APP_ID */],
                    windows: 'ms-windows-store://review/?ProductId=' + __WEBPACK_IMPORTED_MODULE_5__config_app__["n" /* STORAGE_WINDOWS_APP_ID */]
                },
                callbacks: {
                    handleNegativeFeedback: function () {
                        // window.open('mailto:feedback@example.com','_system');
                    },
                    onRateDialogShow: function (callback) {
                        //callback(1) // cause immediate click on 'Rate Now' button
                    },
                    onButtonClicked: function (buttonIndex) {
                        //console.log("onButtonClicked -> " + buttonIndex);
                    }
                }
            };
            _this.setupAppFontColor();
            imgCache.init({});
            _this.events.subscribe('fontcolor:change', function () {
                _this.setupAppFontColor();
            });
            _this.events.subscribe('profile:updated', function (user) {
                _this.userId = user.id;
                _this.userDrawId = user.drawId;
                _this.translate.get('profile_id').subscribe(function (value) {
                    _this.profileTabName = value + ' ' + _this.userDrawId;
                    _this.pages[3]['title'] = _this.profileTabName;
                });
            });
            _this.keyboard.onKeyboardShow().subscribe(function () {
                document.body.classList.add('keyboard-is-open');
            });
            _this.keyboard.onKeyboardHide().subscribe(function () {
                document.body.classList.remove('keyboard-is-open');
            });
            platform.backButton.subscribe(function () {
                if (menuCtrl.isOpen()) {
                    menuCtrl.close();
                    return;
                }
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                    return;
                }
                var activePage = _this.nav.getActive().instance;
                var whitelistPages = [__WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */], __WEBPACK_IMPORTED_MODULE_15__pages_language_selection_language_selection__["a" /* LanguageSelectionPage */], __WEBPACK_IMPORTED_MODULE_9__pages_sign_out_sign_out__["a" /* SignOutPage */], __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_11__pages_sign_up_sign_up__["a" /* SignUpPage */], __WEBPACK_IMPORTED_MODULE_12__pages_score_score__["a" /* ScorePage */]];
                // SignUpPage - > RegisterPage
                if (whitelistPages.indexOf(activePage.constructor) == 5) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */]);
                    return;
                }
                // if current page is not in whitelistPage
                // then back to DashboardPage first
                if (whitelistPages.indexOf(activePage.constructor) < 0) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */]);
                    return;
                }
                if (!_this.backPressed) {
                    _this.backPressed = true;
                    _this.showToast('Press again to exit', 2000);
                    setTimeout(function () { return _this.backPressed = false; }, 2000);
                    return;
                }
                if (_this.backPressed) {
                    platform.exitApp();
                }
                return;
            }, function (error) { });
            platform.registerBackButtonAction(function (event) {
            }, 100);
        });
    }
    MyApp.prototype.showToast = function (title, duration) {
        var toast = this.toast.create({
            message: title,
            duration: duration,
            position: 'bottom'
        });
        toast.present();
    };
    MyApp.prototype.openPage = function (page) {
        this.storage.remove('nav');
        if (page.component == 'AppRatePage') {
            this.appRate.promptForRating(true);
        }
        else if (page.component == 'Activities') {
            this.storage.set('nav', 'slide2');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */]);
            // let dashboard = this.nav.getActive().instance;
            // console.log(dashboard);
            // dashboard.showActivitesList();
        }
        else if (page.component == 'score_view') {
            this.storage.set('nav', 'score_view');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */]);
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.setupAppDynamicText = function () {
        var _this = this;
        // set default image
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__config_app__["d" /* STORAGE_APP_DYNAMIC_TEXT */]).then(function (val) {
            if (val != undefined && val != '' && val != 'null') {
                _this.appDynamicText = val;
            }
            else {
                _this.appDynamicText = '';
            }
        });
    };
    MyApp.prototype.setupAppFontColor = function () {
        var _this = this;
        // set default image
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__config_app__["f" /* STORAGE_APP_FONT_COLOR */]).then(function (val) {
            if (val != undefined && val != '' && val != 'null') {
                _this.appFontColor = val;
            }
            else {
                _this.appFontColor = 'white';
            }
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\app\app.html"*/'<ion-menu type="overlay" [content]="content">\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                <ion-icon *ngIf="p.title == \'home\'" name="home"></ion-icon>\n                <ion-icon *ngIf="p.title == \'view_score\'" name="ios-thumbs-up"></ion-icon>\n                <ion-icon *ngIf="p.title == \'activities\'" name="game-controller-b"></ion-icon>\n                <ion-icon *ngIf="p.title == profileTabName" name="contact"></ion-icon>\n                <ion-icon *ngIf="p.title == \'rate_us\'" name="star"></ion-icon>\n                <ion-icon *ngIf="p.title == \'change_language\'" name="information-circle"></ion-icon>\n                <ion-icon *ngIf="p.title == \'logout\'" name="log-out"></ion-icon>\n                {{p.title| translate}}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" [ngStyle]="{\'color\':appFontColor} " class="dinamic-class"></ion-nav>\n'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_16_ng_imgcache__["ImgCacheService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_register_service_register_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_event_service_event_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
var RegisterPage = (function () {
    function RegisterPage(device, navCtrl, navParams, storage, registerService, alertCtrl, loadingCtrl, eventService, events, apiServiceProvider, platform) {
        this.device = device;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.registerService = registerService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.eventService = eventService;
        this.events = events;
        this.apiServiceProvider = apiServiceProvider;
        this.platform = platform;
        this.form = {};
        this.setupEventLogo();
        this.setupExtraFields();
        this.getRecentUser();
        this.setupOldEventId();
        this.form.device_id = this.device.uuid;
    }
    RegisterPage.prototype.setupEventLogo = function () {
        var _this = this;
        // set default image
        this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["e" /* STORAGE_APP_EVENT_LOGO */]).then(function (val) {
            _this.eventLogo = val;
        });
    };
    RegisterPage.prototype.setupExtraFields = function () {
        var _this = this;
        this.registerService.getExtraFields().then(function (data) {
            if (data.success) {
                _this.extraFields = data.content;
            }
        });
    };
    RegisterPage.prototype.setupOldEventId = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["m" /* STORAGE_OLD_EVENT_ID */]).then(function (val) {
            _this.oldEventId = val;
            _this.form.old_event_id = val;
        });
    };
    RegisterPage.prototype.getRecentUser = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["k" /* STORAGE_APP_USER */]).then(function (user) {
            _this.recentUser = user;
            if (user != undefined && user != null) {
                _this.loadParticipantScore();
            }
        });
    };
    RegisterPage.prototype.loadParticipantScore = function () {
        var _this = this;
        this.eventService.getParticipantScore(this.recentUser.api_token)
            .then(function (data) {
            if (data.success) {
                _this.recentUser.score = data.content.score;
            }
        });
    };
    RegisterPage.prototype.saveLoginUser = function (user) {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__config_app__["k" /* STORAGE_APP_USER */], user);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__config_app__["g" /* STORAGE_APP_HAS_LOGIN */], true);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__config_app__["h" /* STORAGE_APP_HAS_REDEEM */], false); // reset
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__config_app__["m" /* STORAGE_OLD_EVENT_ID */], user.event_id);
        this.apiServiceProvider.apiToken = user.api_token;
        // go dashboard
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Registering. Please wait...'
        });
        loading.present();
        console.log("registering");
        this.registerService.register(this.form).then(function (data) {
            loading.dismiss();
            if (data.success) {
                _this.saveLoginUser(data.content);
            }
            else {
                _this.showAlertMessage(data.message);
            }
        });
    };
    RegisterPage.prototype.preRegisterUser = function (mobileNumber) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Registering. Please wait...'
        });
        loading.present();
        this.registerService.preRegister(mobileNumber).then(function (data) {
            loading.dismiss();
            if (data.success) {
                _this.saveLoginUser(data.content);
            }
            else {
                _this.showAlertMessage(data.message);
            }
        }).catch(function (error) { loading.dismiss(); });
    };
    RegisterPage.prototype.canSubmit = function () {
        if (this.form.event_id == undefined || this.form.event_id == '') {
            this.showAlertMessage('Event Id is required');
        }
        if (this.form.name == undefined || this.form.name == '') {
            this.showAlertMessage('Name is required');
            return false;
        }
        else if (this.form.email == undefined || this.form.email == '') {
            this.showAlertMessage('Email is required');
            return false;
        }
        else if (!this.validateEmail(this.form.email)) {
            this.showAlertMessage('Email is not valid');
            return false;
        }
        else if (this.form.mobile_number == undefined || this.form.mobile_number == '') {
            this.showAlertMessage('Mobile number is required');
            return false;
        }
        else if (this.form.gender == undefined || this.form.gender == '') {
            this.showAlertMessage('Gender is required');
            return false;
        }
        else {
            return true;
        }
    };
    RegisterPage.prototype.selectGender = function (gender) {
        this.selectedGender = gender;
        this.form.gender = gender;
    };
    RegisterPage.prototype.onPreRegistration = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Pre-Registration',
            message: 'We will verify if you are valid as pre-registered user',
            inputs: [
                {
                    name: 'mobile_number',
                    placeholder: 'Mobile Number',
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        _this.preRegisterUser(data.mobile_number);
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.onReLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    RegisterPage.prototype.onSubmitForm = function () {
        // Check if all compulsory selection is selected
        if (this.canSubmit()) {
            this.registerUser();
        }
    };
    RegisterPage.prototype.extraFieldInputChange = function (value, fieldId) {
        this.form[fieldId] = value;
    };
    RegisterPage.prototype.showGenderSelection = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Choose Gender',
            message: '',
            buttons: [
                {
                    text: 'Male',
                    handler: function () {
                        _this.selectGender('male');
                    }
                },
                {
                    text: 'Female',
                    handler: function () {
                        _this.selectGender('female');
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.showAlertMessage = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Notice',
            message: message,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    RegisterPage.prototype.onRegisterNow = function () {
        // go signup
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    // viewDidEnter(){
    //     this.initializeBackButtonCustomHandler();        
    // }
    // viewWillLeave(){
    //     this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    // }
    RegisterPage.prototype.initializeBackButtonCustomHandler = function () {
        // this.platform.ready().then(()=>{
        //     this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
        //         this.customHandleBackButton();
        //     }, 10);
        // });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n  <div class="header">\n        <ion-label>{{"welcome"|translate}}</ion-label>\n        <img class="event-logo" img-cache src="{{eventLogo}}" alt="Event\'s Logo">\n    </div>\n<app-content>\n\n  <div style="height: 100%">\n\n    <ion-scroll class="register-form" scrollY=\'true\'>\n        <ion-list>\n            <ion-item text-wrap *ngIf="recentUser != undefiend && recentUser != null">\n                <ion-label> {{"login_recent"|translate}}: {{recentUser.email}} | {{"score"|translate}}: {{recentUser.score}}</ion-label>\n            </ion-item>\n            <ion-item class="form-input">\n                <button id="submit-button" (click)="onRegisterNow()" ion-button outline>{{"register_now"|translate}}</button>\n            </ion-item>\n            <ion-item class="form-input">\n                <button id="submit-button" (click)="onPreRegistration()" ion-button outline>{{"pre_registration"|translate}}</button>\n            </ion-item>\n            <ion-item class="form-input" *ngIf="recentUser != undefiend && recentUser != null">\n                <button id="submit-button" (click)="onReLogin()" ion-button outline>{{"login"|translate}}</button>\n            </ion-item>\n            <!-- <ion-item class="form-input">\n                <ion-label>{{"event_id"|translate}}</ion-label>\n                <ion-input [(ngModel)]="form.event_id"></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>{{"name"|translate}}</ion-label>\n                <ion-input [(ngModel)]="form.name"></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>{{"passport"|translate}}</ion-label>\n                <ion-input [(ngModel)]="form.identity_passport"></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>{{"email"|translate}}</ion-label>\n                <ion-input type="email" [(ngModel)]="form.email"></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>{{"phone"|translate}}</ion-label>\n                <ion-input type="tel" [(ngModel)]="form.mobile_number"></ion-input>\n            </ion-item>\n            <ion-item class="form-input">\n                <ion-label>{{"gender"|translate}}</ion-label>\n                <ion-input [(ngModel)]="form.gender" readonly (click)="showGenderSelection()"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="extraFields != undefined && extraFields.length > 0">\n                <ion-label class="subtitle">{{"others"|translate}}</ion-label>\n            </ion-item>\n            <ion-item class="form-input" *ngFor="let field of extraFields">\n                <ion-label>{{field.name}}</ion-label>\n                <ion-input (input)="extraFieldInputChange($event.target.value, field.id)"></ion-input>\n            </ion-item>\n            <ion-item>\n                <button id="submit-button" (click)="onSubmitForm()" ion-button outline>{{"check_in"|translate}}</button>\n            </ion-item> -->\n        </ion-list>\n    </ion-scroll>\n    </div>\n</app-content>\n<div class="footer">\n        <img class="logo" src="assets/images/logo.png" alt="App\'s Logo">\n    </div>\n'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_register_service_register_service__["a" /* RegisterServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_event_service_event_service__["a" /* EventServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_8__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_service_event_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_zbar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(35);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GAME_TYPE_INPUT = "game_type_text_input";
var GAME_TYPE_RULE = "game_type_image_rule";
//@IonicPage()
var DashboardPage = DashboardPage_1 = (function () {
    function DashboardPage(navCtrl, navParams, eventService, zbar, loadingCtrl, alertCtrl, storage, events, apiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventService = eventService;
        this.zbar = zbar;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.events = events;
        this.apiProvider = apiProvider;
        this.hideScanScore = true;
        this.participantScore = 0;
        this.showCompleted = false;
        this.current_type = '';
        this.hasUserRedeem = false;
        this.hideViewScore = true;
        this.loadLiveEventDetail();
        this.loadParticipantScore();
        this.current_number_of_scan = 0;
        this.current_scannedCount = 0;
        storage.get(__WEBPACK_IMPORTED_MODULE_6__config_app__["h" /* STORAGE_APP_HAS_REDEEM */])
            .then(function (val) {
            _this.hasUserRedeem = val;
        });
        this.setupAppDynamicText();
    }
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("nav")
            .then(function (val) {
            if (val == "slide2") {
                _this.storage.remove('nav');
                _this.showActivitesList();
            }
            if (val == "score_view") {
                _this.storage.remove('nav');
                _this.showActivityViewScore();
                _this.hideViewScore = false;
            }
        });
    };
    DashboardPage.prototype.scanQRCode = function () {
        var _this = this;
        // Check is Game Type Input fill up all the input
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        var canScan = true;
        if (activity.type == GAME_TYPE_INPUT) {
            var fields = activity.game.fields;
            fields.forEach(function (field) {
                if (field.value == undefined || field.value == null || field.value.length <= 0) {
                    canScan = false;
                }
            });
        }
        if (this.current_scannedCount >= this.current_number_of_scan) {
            canScan = false;
        }
        if (canScan) {
            var options = {
                flash: 'off',
                drawSight: false,
                camera: 'back'
            };
            console.log("start scan");
            this.zbar.scan(options)
                .then(function (result) {
                _this.markGameComplete(result);
            })
                .catch(function (error) {
                console.log(error);
            });
            console.log("end scan");
        }
        else {
            this.showAlertMessage("Please fill up all the blank field.");
        }
    };
    DashboardPage.prototype.markGameComplete = function (scoreCode) {
        var _this = this;
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        if (activity != undefined) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Processing. Please wait...'
            });
            loading_1.present();
            this.current_scannedCount++;
            this.eventService.markGameComplete(scoreCode, activity.stage.id, activity.game.id, activity.game_type, activity.game.fields, this.current_scannedCount)
                .then(function (data) {
                loading_1.dismiss();
                if (data.success) {
                    _this.showAlertMessage("Successfully collected " + data.content.added_score + " points");
                    _this.participantScore = data.content.new_score;
                    activity.game.already_scanned = activity.game.already_scanned + 1;
                }
                else {
                    _this.showAlertMessage(data.message);
                }
                if (data.completed)
                    activity.completed = true;
                _this.invalidateShowScanScore();
                _this.invalidateShowCompleted();
            })
                .catch(function (error) {
                loading_1.dismiss();
                console.log(error);
            });
        }
    };
    DashboardPage.prototype.loadParticipantScore = function () {
        var _this = this;
        this.eventService.getParticipantScore()
            .then(function (data) {
            if (data.success) {
                _this.userId = data.content.userId;
                _this.userDrawId = data.content.drawId;
                _this.participantScore = data.content.score;
                _this.events.publish('profile:updated', {
                    id: _this.userId,
                    drawId: _this.userDrawId
                });
            }
        });
    };
    DashboardPage.prototype.processDataIntoActivities = function (data) {
        var _this = this;
        console.log(data);
        // clear
        this.activities = [];
        this.activityListIndex = 0;
        this.activityViewScore = 0;
        // banners
        var banners = data.banners;
        banners.forEach(function (banner) {
            _this.activities.push(__assign({}, banner, { type: 'banner' }));
            _this.activityListIndex++;
            _this.activityViewScore++;
        });
        // activities
        var activityList = data.activities;
        this.activities.push({
            title: data.title,
            type: 'activity_list',
            activities: activityList
        });
        this.activityViewScore++;
        // games
        var games = data.games;
        games.forEach(function (game) {
            _this.activities.push(__assign({}, game, { title: game.stage.title, type: game.game_type }));
            console.log("game:" + game.stage);
            _this.activityViewScore++;
        });
        // // Score
        // this.activities.push({
        //     title: 'Score',//Score
        //     type: 'score'
        // });
        // Redeem
        console.log("start push activity");
        this.activities.push({
            title: '',
            type: 'redeem'
        });
        console.log(this.activities);
        this.activityTitle = this.activities[0].title;
    };
    DashboardPage.prototype.showGameActivity = function (gameType, gameId) {
        var activityIndex = -1;
        var count = 0;
        this.activities.forEach(function (activity) {
            if (activity.type == GAME_TYPE_INPUT || activity.type == GAME_TYPE_RULE) {
                if (gameId == activity.game.id) {
                    activityIndex = count;
                }
            }
            count++;
        });
        if (activityIndex >= 0) {
            this.slides.slideTo(activityIndex, 200);
        }
    };
    DashboardPage.prototype.showScoreActivity = function () {
        var scoreActivityIndex = -1;
        var count = 0;
        this.activities.forEach(function (activity) {
            if (activity.type == 'score') {
                scoreActivityIndex = count;
            }
            count++;
        });
        if (scoreActivityIndex >= 0) {
            this.slides.slideTo(scoreActivityIndex, 200);
        }
    };
    DashboardPage.prototype.showPreviousActivity = function () {
        this.slides.slidePrev(200);
    };
    DashboardPage.prototype.showNextActivity = function () {
        this.slides.slideNext(200);
    };
    DashboardPage.prototype.showActivitesList = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.activityListIndex < 0)
                _this.activityListIndex = 0;
            _this.slides.slideTo(_this.activityListIndex, 200);
        }, 2000);
        // this.slides.slideTo(2, 200);
    };
    DashboardPage.prototype.showActivityViewScore = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.activityViewScore < 0)
                _this.activityViewScore = 0;
            _this.slides.slideTo(_this.activityViewScore, 200);
        }, 2000);
    };
    DashboardPage.prototype.invalidateShowScanScore = function () {
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        this.current_type = activity.type;
        this.hideScanScore = (activity.type != GAME_TYPE_INPUT && activity.type != GAME_TYPE_RULE) || activity.completed;
        this.current_scannedCount = 0;
        console.log("=================");
        console.log(JSON.stringify(activity));
        if (activity.type == GAME_TYPE_RULE) {
            console.log("In game type rule......");
            console.log("Already scanned....", activity.game.already_scanned);
            this.current_number_of_scan = activity.game.number_of_scan;
            if (activity.game.already_scanned == undefined) {
                activity.game.already_scanned = 0;
            }
            this.current_scannedCount = activity.game.already_scanned;
        }
        console.log("=================");
        console.log(JSON.stringify(activity));
    };
    DashboardPage.prototype.invalidateShowCompleted = function () {
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        console.log(this.activities[currentIndex]);
        console.log(this.activityTitle);
        this.showCompleted = activity.completed;
    };
    DashboardPage.prototype.loadLiveEventDetail = function () {
        var _this = this;
        console.log("mytest");
        this.eventService.getLiveEventDetail().then(function (data) {
            if (data.success) {
                _this.processDataIntoActivities(data.content);
            }
        }).catch(function (error) {
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__config_app__["g" /* STORAGE_APP_HAS_LOGIN */], false);
            // go register page
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
        });
    };
    DashboardPage.prototype.onGameTextInput = function (value, gameId, fieldId) {
        // Record the value
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        var fields = activity.game.fields;
        fields.forEach(function (field) {
            if (field.id == fieldId) {
                field.value = value;
            }
        });
    };
    DashboardPage.prototype.acitivityChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        var activity = this.activities[currentIndex];
        if (activity != undefined) {
            this.activityTitle = activity.title;
            this.invalidateShowScanScore();
            this.invalidateShowCompleted();
        }
    };
    DashboardPage.prototype.showAlertMessage = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Notice',
            message: message,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    DashboardPage.prototype.backToHome = function () {
        this.slides.slideTo(0, 200);
    };
    DashboardPage.prototype.redeem = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "You'll not able to participated in any game.",
            message: '',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Redeem!',
                    handler: function () {
                        console.log("App Path", __WEBPACK_IMPORTED_MODULE_6__config_app__["a" /* API_ENDPOINT */]);
                        console.log("redeem user id", _this.userId);
                        _this.eventService.setRedeem(_this.userId)
                            .then(function (data) {
                            if (data.success) {
                                _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__config_app__["h" /* STORAGE_APP_HAS_REDEEM */], true);
                                _this.navCtrl.setRoot(DashboardPage_1);
                            }
                            else {
                                _this.showAlertMessage(data.message);
                            }
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DashboardPage.prototype.setupAppDynamicText = function () {
        var _this = this;
        // set default image
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__config_app__["d" /* STORAGE_APP_DYNAMIC_TEXT */]).then(function (val) {
            if (val != undefined && val != '' && val != 'null') {
                _this.dynamicText = val;
            }
            else {
                _this.dynamicText = '';
            }
        });
    };
    DashboardPage.prototype.hasScan = function (gameIndex) {
        var indexOfActivity = this.activityListIndex + gameIndex + 1;
        var activity = this.activities[indexOfActivity];
        //console.log("index", indexOfActivity);
        //let activity = this.activities[index];
        return activity.completed;
    };
    DashboardPage.prototype.getNumberOfScan = function () {
        return this.current_number_of_scan;
    };
    DashboardPage.prototype.getScanNumber = function () {
        return this.current_scannedCount;
    };
    return DashboardPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], DashboardPage.prototype, "slides", void 0);
DashboardPage = DashboardPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dashboard',template:/*ion-inline-start:"C:\OpenServer\domains\MyEvent\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header class="header">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{activityTitle}}</ion-title>\n        <!-- <ion-buttons end>\n            <button (click)="backToHome()" ion-button outline class=\'home-btn\'>\n                {{"home"|translate}}\n            </button>\n        </ion-buttons> -->\n    </ion-navbar>\n</ion-header>\n\n<app-content margin-top>\n\n    <div class="container">\n        <ion-slides class="slider" (ionSlideDidChange)="acitivityChanged()">\n            <ion-slide *ngFor="let activity of activities; let slide_index = index ">\n                <ion-scroll scrollY="true">\n                    <!-- Banner -->\n                    <div *ngIf="activity.type == \'banner\'">\n                        <img src="{{activity.image_url}}" alt="{{activity.title}}\'s Banner">\n                    </div>\n                    <!-- Banner End -->\n\n                    <!-- Activity -->\n                    <div class="acitivity-container" *ngIf="activity.type == \'activity_list\'">\n                        <div *ngFor="let stage of activity.activities; let j = index">\n                            <ion-label class="title-label">{{stage.title}}</ion-label>\n                            <ion-grid>\n                                <ion-row class="row-game" *ngFor="let game of stage.games; let i = index; let completed of stage.completed">\n                                    <ion-col col-1>\n                                        <!-- <ion-label>{{i + 1}}.</ion-label> -->\n                                        <ion-label>•</ion-label>\n                                    </ion-col>\n                                    <ion-col col-10>\n                                        <button (click)="showGameActivity(game.game_type, game.id)" ion-button clear>{{game.title}}</button>\n                                    </ion-col>\n                                    <ion-col col-1>\n                                        <!-- <ion-label *ngIf="game.type == null">no</ion-label> -->\n                                        <ion-label *ngIf="hasScan(j * 2 + i)">\n                                            <ion-icon name="checkmark-circle-outline"></ion-icon>\n                                            <!-- <div title="Code: 0xe800" class="the-icons"><i class="demo-icon">&#xe800;</i>\n                                            </div> -->\n                                        </ion-label>\n                                        <ion-label *ngIf="!hasScan(j * 2 + i)">\n                                            <ion-icon name="square-outline"></ion-icon>\n                                            <!-- <i class="fa fa-circle-o" aria-hidden="true"></i> -->\n                                        </ion-label>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </div>\n                        <!-- <div>\n                            <ion-label class="title-label">{{"enjoy_rewards"|translate}}</ion-label>\n                            <ion-grid>\n                                <ion-row class="row-game">\n                                    <ion-col col-1>\n                                        <ion-label>1.</ion-label>\n                                    </ion-col>\n                                    <ion-col col-11>\n                                        <button (click)="showScoreActivity()" ion-button clear>{{"your_score"|translate}}</button>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </div> -->\n                    </div>\n                    <!-- Activity End -->\n\n                    <!-- Game Input -->\n                    <div class="game-input-container" *ngIf="activity.type == \'game_type_text_input\'">\n                        <ion-grid text-wrap>\n                            <ion-row *ngFor="let field of activity.game.fields; let i = index">\n                                <ion-col col-1>\n                                    <ion-label class="no-label">{{i + 1}}</ion-label>\n                                </ion-col>\n                                <ion-col col-3>\n                                    <ion-label>{{field.name}}</ion-label>\n                                </ion-col>\n                                <ion-col col-8>\n                                    <ion-input (input)="onGameTextInput($event.target.value, activity.game.id, field.id)"></ion-input>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                    <!-- Game Input End -->\n\n                    <!-- Game Rule -->\n                    <div class="game-rule-container" *ngIf="activity.type == \'game_type_image_rule\'">\n                        <ion-label>{{activity.game.title}}</ion-label>\n                        <img src="{{activity.game.image_url}}" alt="{{activity.game.name}}\'s Image\'">\n                        <!-- <ion-label class="title">{{"game_rule"|translate}}</ion-label> -->\n                        <p>{{activity.game.rule}}</p>\n                    </div>\n                    <!-- Game Rule End -->\n\n                    \n\n                    <div class="score-container" *ngIf="activity.type == \'redeem\'">\n                        <ion-label>{{"profile_id"|translate}}: {{userDrawId}}</ion-label>\n                        <ion-label text-wrap class="title">{{dynamicText}}</ion-label>\n                        <!-- <ion-label class="score">{{dynamicText}}</ion-label> -->\n                    </div>\n                    <!-- Score End -->\n                </ion-scroll>\n            </ion-slide>\n        </ion-slides>\n\n        <div class="footer">\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-3>\n                        <button (click)="showPreviousActivity()" class="navigation-icon" ion-button clear>\n                            <img src="assets/icon/icon_left_arrow.png" alt="Left Arrow">\n                        </button>\n                    </ion-col>\n\n                    <ion-col col-6>\n                        <button *ngIf="!hasUserRedeem && !hideScanScore" (click)="scanQRCode()" ion-button outline>{{"scan"|translate}} {{getScanNumber()}}/{{getNumberOfScan()}} </button>\n                        <ion-label *ngIf="hasUserRedeem">\n                            <b>Redeemed</b>\n                        </ion-label>\n                        <ion-label *ngIf="!hasUserRedeem && showCompleted">\n                            <b>{{"completed"|translate}}!</b>\n                        </ion-label>\n                        <button *ngIf="!hasUserRedeem && current_type==\'redeem\'" (click)="redeem()" ion-button outline>{{"redeem"|translate}} </button>\n                        <button *ngIf="!hasUserRedeem && current_type==\'score\'" (click)="redeem()" ion-button outline>{{"redeem"|translate}} </button>\n                    </ion-col>\n\n                    <ion-col col-3>\n                        <button (click)="showNextActivity()" class="navigation-icon" ion-button clear>\n                            <img src="assets/icon/icon_right_arrow.png" alt="Left Arrow">\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n\n</app-content>'/*ion-inline-end:"C:\OpenServer\domains\MyEvent\src\pages\dashboard\dashboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_event_service_event_service__["a" /* EventServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_zbar__["a" /* ZBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
], DashboardPage);

var DashboardPage_1;
//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_app__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the EventServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var EventServiceProvider = (function () {
    function EventServiceProvider(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    EventServiceProvider.prototype.getLiveEventDetail = function () {
        return this.apiService.get('/live-event-detail');
    };
    EventServiceProvider.prototype.markGameComplete = function (scoreCode, stageId, gameId, gameType, fields, scanCount) {
        if (scanCount === void 0) { scanCount = []; }
        return this.apiService.post('/complete-game', {
            score_code: scoreCode,
            stage_id: stageId,
            game_id: gameId,
            game_type: gameType,
            fields: fields,
            scanCount: scanCount
        });
    };
    EventServiceProvider.prototype.getParticipantScore = function (userToken) {
        var _this = this;
        if (userToken === void 0) { userToken = undefined; }
        if (userToken != undefined) {
            return new Promise(function (resolve) {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_4__config_app__["a" /* API_ENDPOINT */] + '/get-participant-score' + '?' + 'api_token=' + userToken)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                });
            });
        }
        else {
            return this.apiService.get('/get-participant-score');
        }
    };
    EventServiceProvider.prototype.setRedeem = function (userID) {
        //if (userToken != undefined){
        return this.apiService.post('/set-rewards', {
            draw_id: userID
        });
        //}
    };
    return EventServiceProvider;
}());
EventServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* ApiServiceProvider */]])
], EventServiceProvider);

//# sourceMappingURL=event-service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var RegisterServiceProvider = (function () {
    function RegisterServiceProvider(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    RegisterServiceProvider.prototype.getExtraFields = function () {
        return this.apiService.get('/extra-register-form');
    };
    RegisterServiceProvider.prototype.register = function (form) {
        return this.apiService.post('/participant-registration', form);
    };
    RegisterServiceProvider.prototype.preRegister = function (mobileNumber) {
        return this.apiService.post('/participant-preregistration', { mobile_number: mobileNumber });
    };
    return RegisterServiceProvider;
}());
RegisterServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* ApiServiceProvider */]])
], RegisterServiceProvider);

//# sourceMappingURL=register-service.js.map

/***/ })

},[248]);
//# sourceMappingURL=main.js.map