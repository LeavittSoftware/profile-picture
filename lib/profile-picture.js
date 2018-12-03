var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, observe, property } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
let ProfilePictureElement = class ProfilePictureElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.personId = 44;
        this.shape = 'circle';
        this.size = 120;
    }
    src(personId, size) {
        const baseUrl = this.isDev() ? 'https://devmapi.leavitt.com/' : 'https://mapi.leavitt.com/';
        return `${baseUrl}People(${personId})/Default.Picture(size=${size})`;
    }
    _sizeChanged() {
        this.style.width = this.size + 'px';
        this.style.height = this.size + 'px';
    }
    refresh() {
        const personId = this.personId;
        this.personId = 0;
        this.personId = personId;
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
    static get template() {
        return html `<style>
    :host {
        display: inline-block;
        white-space: normal;
        /* IE11 fix if flex is applied to element */
        flex-shrink: 0;
    }

    img {
        display: block;
        width: 100%;
        @apply --lss-profile-picture-img;
    }

    :host([shape="circle"]) img {
        border-radius: 50%;
    }
</style>
<img draggable="false" src$="[[src(personId,size)]]">`;
    }
};
__decorate([
    property({ reflectToAttribute: true, type: Number })
], ProfilePictureElement.prototype, "personId", void 0);
__decorate([
    property({ reflectToAttribute: true, type: String })
], ProfilePictureElement.prototype, "shape", void 0);
__decorate([
    property({ reflectToAttribute: true, type: Number })
], ProfilePictureElement.prototype, "size", void 0);
__decorate([
    observe('size')
], ProfilePictureElement.prototype, "_sizeChanged", null);
ProfilePictureElement = __decorate([
    customElement('profile-picture')
], ProfilePictureElement);
export { ProfilePictureElement };
//# sourceMappingURL=profile-picture.js.map