var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LSSProfilePicture = (function (_super) {
    __extends(LSSProfilePicture, _super);
    function LSSProfilePicture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LSSProfilePicture.prototype.isDev = function () {
        if (document == null || document.location == null || document.location.host == null)
            return true;
        var host = document.location.host;
        if (host.indexOf("dev") !== -1)
            return true;
        if (host.indexOf("localhost") !== -1)
            return true;
        return false;
    };
    LSSProfilePicture.prototype.setUrl = function (personId) {
        var baseUrl = this.isDev() ? "https://devapi2.leavitt.com/" : "https://api2.leavitt.com/";
        this.src = baseUrl + "People(" + personId + ")/Default.Picture(size=256)";
    };
    LSSProfilePicture.prototype.randomId = function (shape) {
        return shape + "-" + Math.random().toString(36).substr(2, 4);
    };
    return LSSProfilePicture;
}(polymer.Base));
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
        value: 200,
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
        notify: true
    })
], LSSProfilePicture.prototype, "src", void 0);
__decorate([
    observe("personId")
], LSSProfilePicture.prototype, "setUrl", null);
LSSProfilePicture = __decorate([
    component("lss-profile-picture")
], LSSProfilePicture);
// after the element is defined, we register it in Polymer
LSSProfilePicture.register();
