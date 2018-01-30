var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let LssProfilePictureMenu = class LssProfilePictureMenu extends Polymer.LazyImportsMixin(Polymer.DeclarativeEventListeners(Polymer.Element)) {
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
    clickHandler(e) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.importLazyGroup('menu');
            const dialog = this.$.dialog;
            dialog.positionTarget = this.$.profilePicture;
            this.lazyPersonId = this.personId;
            this.$.dialog.removeAttribute('unresolved');
            dialog.toggle();
        });
    }
    myAccountClickHandler(e) {
        window.open('https://accounts.leavitt.com/', '_blank');
    }
    signoutClickHandler(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = { bubbles: true, composed: true };
            this.dispatchEvent(new CustomEvent('logout', options));
        });
    }
};
__decorate([
    property({ type: Number, notify: true }),
    __metadata("design:type", Number)
], LssProfilePictureMenu.prototype, "personId", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], LssProfilePictureMenu.prototype, "lazyPersonId", void 0);
__decorate([
    property({ type: String, notify: true }),
    __metadata("design:type", String)
], LssProfilePictureMenu.prototype, "fullname", void 0);
__decorate([
    listen('click', 'profilePicture'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LssProfilePictureMenu.prototype, "clickHandler", null);
__decorate([
    listen('click', 'myAccountButton'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "myAccountClickHandler", null);
__decorate([
    listen('click', 'signout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LssProfilePictureMenu.prototype, "signoutClickHandler", null);
LssProfilePictureMenu = __decorate([
    customElement('lss-profile-picture-menu')
], LssProfilePictureMenu);
