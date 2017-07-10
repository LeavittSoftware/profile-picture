var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let LssProfilePictureMenu = class LssProfilePictureMenu extends LssRequesterBehavior(Polymer.mixinBehaviors([Polymer.GestureEventListeners], Polymer.Element)) {
    constructor() {
        super(...arguments);
        this.hovered = false;
    }
    ready() {
        super.ready();
    }
    refresh() {
        this.$.profilePicture.refresh();
        this.$.innerProfilePicture.refresh();
    }
    clickHandler(e) {
        const dialog = this.$.dialog;
        dialog.positionTarget = this.$.profilePicture;
        dialog.toggle();
    }
    myAccountClickHandler(e) {
        window.open('https://accounts.leavitt.com/', '_blank');
    }
    signoutClickHandler(e) {
        this.userManager = this.requestInstance('UserManager');
        this.userManager.logoutAsync();
    }
    canceled(event) {
        if (this.hovered)
            event.preventDefault();
    }
    onHovered() {
        this.hovered = true;
    }
    onUnhovered() {
        this.hovered = false;
    }
};
__decorate([
    property({ notify: true }),
    __metadata("design:type", Object)
], LssProfilePictureMenu.prototype, "userManager", void 0);
__decorate([
    property({ notify: true }),
    __metadata("design:type", Number)
], LssProfilePictureMenu.prototype, "personId", void 0);
__decorate([
    property({ notify: true }),
    __metadata("design:type", String)
], LssProfilePictureMenu.prototype, "fullname", void 0);
__decorate([
    gestureListen('tap', 'profilePicture'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "clickHandler", null);
__decorate([
    gestureListen('tap', 'myAccountButton'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "myAccountClickHandler", null);
__decorate([
    gestureListen('tap', 'signout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "signoutClickHandler", null);
__decorate([
    listen('iron-overlay-canceled'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "canceled", null);
__decorate([
    listen('mouseover', 'profilePicture'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "onHovered", null);
__decorate([
    listen('mouseout', 'profilePicture'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "onUnhovered", null);
LssProfilePictureMenu = __decorate([
    customElement('lss-profile-picture-menu')
], LssProfilePictureMenu);
