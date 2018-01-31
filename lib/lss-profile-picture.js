"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let LSSProfilePicture = class LSSProfilePicture extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.personId = 44;
        this.shape = 'circle';
        this.size = 60;
    }
    _sizeChanged() {
        this.style.width = this.size + 'px';
        this.style.height = this.size + 'px';
    }
    refresh() {
        const personId = this.personId;
        this.set('personId', 0);
        this.set('personId', personId);
    }
    isDev() {
        if (document == null || document.location == null || document.location.host == null)
            return true;
        const host = document.location.host;
        if (host.indexOf('dev') !== -1)
            return true;
        if (host.indexOf('localhost') !== -1)
            return true;
        return false;
    }
    getSrc(personId, size) {
        const largerSize = size * 1.2; // Grabs a larger picture than needed to reduce pixelation
        const baseUrl = this.isDev() ? 'https://devapi2.leavitt.com/' : 'https://api2.leavitt.com/';
        this.src = `${baseUrl}People(${personId})/Default.Picture(size=${largerSize})`;
    }
};
__decorate([
    Polymer.decorators.property({ type: Number, notify: true })
], LSSProfilePicture.prototype, "personId", void 0);
__decorate([
    Polymer.decorators.property({ type: String, reflectToAttribute: true })
], LSSProfilePicture.prototype, "shape", void 0);
__decorate([
    Polymer.decorators.property({ type: Number })
], LSSProfilePicture.prototype, "size", void 0);
__decorate([
    Polymer.decorators.property({ type: String })
], LSSProfilePicture.prototype, "src", void 0);
__decorate([
    Polymer.decorators.observe('size')
], LSSProfilePicture.prototype, "_sizeChanged", null);
__decorate([
    Polymer.decorators.observe('personId,size')
], LSSProfilePicture.prototype, "getSrc", null);
LSSProfilePicture = __decorate([
    Polymer.decorators.customElement('lss-profile-picture')
], LSSProfilePicture);
//# sourceMappingURL=lss-profile-picture.js.map