"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let LssProfilePictureMenu = class LssProfilePictureMenu extends Polymer.GestureEventListeners(Polymer.LazyImportsMixin(Polymer.DeclarativeEventListeners(Polymer.Element))) {
    constructor() {
        super(...arguments);
        this.lazyPersonId = 0;
    }
    refresh() {
        const profilePicture = this.$.profilePicture;
        const innerProfilePicture = this.$.innerProfilePicture;
        innerProfilePicture.refresh();
        profilePicture.refresh();
    }
    _toggleDialog() {
        const dialog = this.$.dialog;
        dialog.toggle();
    }
    onProfilePictureTapped() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.importLazyGroup('menu');
            const dialog = this.$.dialog;
            dialog.positionTarget = this.$.profilePicture;
            this.lazyPersonId = this.personId;
            this.$.dialog.removeAttribute('unresolved');
            this._toggleDialog();
        });
    }
    onMyAccountTapped() {
        window.open('https://accounts.leavitt.com/', '_blank');
    }
    onLogoutTapped() {
        const options = { bubbles: true, composed: true };
        this.dispatchEvent(new CustomEvent('logout', options));
        this._toggleDialog();
    }
};
__decorate([
    property({ type: Number, notify: true })
], LssProfilePictureMenu.prototype, "personId", void 0);
__decorate([
    property({ type: Number })
], LssProfilePictureMenu.prototype, "lazyPersonId", void 0);
__decorate([
    property({ type: String, notify: true })
], LssProfilePictureMenu.prototype, "fullname", void 0);
__decorate([
    listen('tap', 'profilePicture')
], LssProfilePictureMenu.prototype, "onProfilePictureTapped", null);
__decorate([
    listen('tap', 'myAccountButton')
], LssProfilePictureMenu.prototype, "onMyAccountTapped", null);
__decorate([
    listen('tap', 'logout')
], LssProfilePictureMenu.prototype, "onLogoutTapped", null);
LssProfilePictureMenu = __decorate([
    customElement('lss-profile-picture-menu')
], LssProfilePictureMenu);
//# sourceMappingURL=lss-profile-picture-menu.js.map