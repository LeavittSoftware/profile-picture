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
var LeavittProfilePictureMenu = (function (_super) {
    __extends(LeavittProfilePictureMenu, _super);
    function LeavittProfilePictureMenu() {
        _super.apply(this, arguments);
        this.hovered = false;
    }
    LeavittProfilePictureMenu.prototype.attached = function () {
        this.userManager = this.requestInstance("UserManager");
    };
    LeavittProfilePictureMenu.prototype.clickHandler = function (e) {
        var dialog = this.$.dialog;
        dialog.positionTarget = this.$.profilePicture;
        dialog.toggle();
    };
    LeavittProfilePictureMenu.prototype.myAccountClickHandler = function (e) {
        window.open("https://accounts.leavitt.com/", "_blank");
    };
    LeavittProfilePictureMenu.prototype.signoutClickHandler = function (e) {
        this.userManager.logoutAsync()
            .then(function (o) { return location.reload(); });
    };
    LeavittProfilePictureMenu.prototype.canceled = function (event) {
        if (this.hovered)
            event.preventDefault();
    };
    LeavittProfilePictureMenu.prototype.onHovered = function () {
        this.hovered = true;
    };
    LeavittProfilePictureMenu.prototype.onUnhovered = function () {
        this.hovered = false;
    };
    __decorate([
        property({
            type: LssUserManager,
            notify: true
        })
    ], LeavittProfilePictureMenu.prototype, "userManager", void 0);
    __decorate([
        property({
            value: 0,
            type: Number,
            notify: true
        })
    ], LeavittProfilePictureMenu.prototype, "personId", void 0);
    __decorate([
        property({
            value: 0,
            type: Number,
            notify: true
        })
    ], LeavittProfilePictureMenu.prototype, "fullname", void 0);
    __decorate([
        listen("profilePicture.tap")
    ], LeavittProfilePictureMenu.prototype, "clickHandler", null);
    __decorate([
        listen("my-account-button.tap")
    ], LeavittProfilePictureMenu.prototype, "myAccountClickHandler", null);
    __decorate([
        listen("signout.tap")
    ], LeavittProfilePictureMenu.prototype, "signoutClickHandler", null);
    __decorate([
        listen("iron-overlay-canceled")
    ], LeavittProfilePictureMenu.prototype, "canceled", null);
    LeavittProfilePictureMenu = __decorate([
        behavior(LssRequesterBehavior),
        component("lss-profile-picture-menu")
    ], LeavittProfilePictureMenu);
    return LeavittProfilePictureMenu;
}(polymer.Base));
LeavittProfilePictureMenu.register();
