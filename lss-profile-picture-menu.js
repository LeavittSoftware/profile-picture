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
var LssProfilePictureMenu = (function (_super) {
    __extends(LssProfilePictureMenu, _super);
    function LssProfilePictureMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hovered = false;
        return _this;
    }
    LssProfilePictureMenu.prototype.attached = function () {
        this.userManager = this.requestInstance("UserManager");
    };
    LssProfilePictureMenu.prototype.clickHandler = function (e) {
        var dialog = this.$.dialog;
        dialog.positionTarget = this.$.profilePicture;
        dialog.toggle();
    };
    LssProfilePictureMenu.prototype.myAccountClickHandler = function (e) {
        window.open("https://accounts.leavitt.com/", "_blank");
    };
    LssProfilePictureMenu.prototype.signoutClickHandler = function (e) {
        this.userManager.logoutAsync();
    };
    LssProfilePictureMenu.prototype.canceled = function (event) {
        if (this.hovered)
            event.preventDefault();
    };
    LssProfilePictureMenu.prototype.onHovered = function () {
        this.hovered = true;
    };
    LssProfilePictureMenu.prototype.onUnhovered = function () {
        this.hovered = false;
    };
    return LssProfilePictureMenu;
}(polymer.Base));
__decorate([
    property({
        type: LssUserManager,
        notify: true
    })
], LssProfilePictureMenu.prototype, "userManager", void 0);
__decorate([
    property({
        value: 0,
        type: Number,
        notify: true
    })
], LssProfilePictureMenu.prototype, "personId", void 0);
__decorate([
    property({
        value: 0,
        type: Number,
        notify: true
    })
], LssProfilePictureMenu.prototype, "fullname", void 0);
__decorate([
    property({
        notify: true
    })
], LssProfilePictureMenu.prototype, "src", void 0);
__decorate([
    listen("profilePicture.tap")
], LssProfilePictureMenu.prototype, "clickHandler", null);
__decorate([
    listen("my-account-button.tap")
], LssProfilePictureMenu.prototype, "myAccountClickHandler", null);
__decorate([
    listen("signout.tap")
], LssProfilePictureMenu.prototype, "signoutClickHandler", null);
__decorate([
    listen("iron-overlay-canceled")
], LssProfilePictureMenu.prototype, "canceled", null);
LssProfilePictureMenu = __decorate([
    behavior(LssRequesterBehavior),
    component("lss-profile-picture-menu")
], LssProfilePictureMenu);
LssProfilePictureMenu.register();
