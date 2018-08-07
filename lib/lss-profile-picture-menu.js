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
let LssProfilePictureMenu = class LssProfilePictureMenu extends AuthenticatedPersonBehavior(Polymer.GestureEventListeners(Polymer.LazyImportsMixin(Polymer.Element))) {
    constructor() {
        super(...arguments);
        this.size = 40;
    }
    refresh() {
        this.innerProfilePicture.refresh();
        this.profilePicture.refresh();
    }
    _onProfilePictureTapped() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.importLazyGroup('menu');
            this.dialog.positionTarget = this.profilePicture;
            this.dialog.removeAttribute('unresolved');
            this.dialog.toggle();
        });
    }
    _onMyAccountTapped() {
        window.open('https://accounts.leavitt.com/', '_blank');
    }
    _calcUpArrowStyle(size) {
        const _size = Number(size) || 40;
        return `right:${_size / 2}px`;
    }
    _onLogoutTapped() {
        window.dispatchEvent(new CustomEvent('um-logout'));
    }
};
__decorate([
    Polymer.decorators.property({ type: Number })
], LssProfilePictureMenu.prototype, "size", void 0);
__decorate([
    Polymer.decorators.query('paper-dialog')
], LssProfilePictureMenu.prototype, "dialog", void 0);
__decorate([
    Polymer.decorators.query('#profilePicture')
], LssProfilePictureMenu.prototype, "profilePicture", void 0);
__decorate([
    Polymer.decorators.query('#innerProfilePicture')
], LssProfilePictureMenu.prototype, "innerProfilePicture", void 0);
LssProfilePictureMenu = __decorate([
    Polymer.decorators.customElement('lss-profile-picture-menu')
], LssProfilePictureMenu);
//# sourceMappingURL=lss-profile-picture-menu.js.map