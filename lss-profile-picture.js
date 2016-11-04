/// <reference path="./bower_components/polymer-ts/polymer-ts.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LSSProfilePicture = (function (_super) {
    __extends(LSSProfilePicture, _super);
    function LSSProfilePicture() {
        _super.apply(this, arguments);
    }
    LSSProfilePicture.prototype.buildUrl = function (personId, size) {
        var largerSize = size * 1.2; //Grabs a larger picture than needed to reduce pixelation 
        return "https://api2.leavitt.com/People(" + personId + ")/Default.Picture(size=" + largerSize + ")";
    };
    LSSProfilePicture.prototype.randomId = function (shape) {
        return shape + "-" + Math.random().toString(36).substr(2, 4);
    };
    __decorate([
        property({
            value: 0,
            type: Number,
            notify: true
        })
    ], LSSProfilePicture.prototype, "personId", void 0);
    __decorate([
        property({
            value: "circle",
            notify: true,
            reflectToAttribute: true
        })
    ], LSSProfilePicture.prototype, "shape", void 0);
    __decorate([
        property({
            value: 320,
            notify: true,
            reflectToAttribute: true
        })
    ], LSSProfilePicture.prototype, "size", void 0);
    __decorate([
        property({
            notify: true
        })
    ], LSSProfilePicture.prototype, "href", void 0);
    __decorate([
        property({
            value: "",
            notify: true
        })
    ], LSSProfilePicture.prototype, "desc", void 0);
    __decorate([
        property({
            computed: "randomId(shape)",
            notify: true
        })
    ], LSSProfilePicture.prototype, "maskId", void 0);
    __decorate([
        property({
            computed: "buildUrl(personId, size)",
            notify: true
        })
    ], LSSProfilePicture.prototype, "src", void 0);
    LSSProfilePicture = __decorate([
        /// <reference path="./bower_components/polymer-ts/polymer-ts.ts" />
        component("lss-profile-picture")
    ], LSSProfilePicture);
    return LSSProfilePicture;
}(polymer.Base));
// after the element is defined, we register it in Polymer
LSSProfilePicture.register();
