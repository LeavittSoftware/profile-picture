var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { determineIsDevelopment } from '@leavittsoftware/titanium-elements/lib/titanium-dev-detection-mixin';
import { css, customElement, html, LitElement, property } from 'lit-element';
let ProfilePictureElement = class ProfilePictureElement extends LitElement {
    constructor() {
        super(...arguments);
        this.personId = 44;
        this.shape = 'circle';
        this.size = 120;
    }
    _computeSrc(personId, size) {
        const baseUrl = determineIsDevelopment(window.location.origin) ? 'https://devmapi.leavitt.com/' : 'https://mapi.leavitt.com/';
        return `${baseUrl}People(${personId})/Default.Picture(size=${size})`;
    }
    updated(changedProps) {
        if (changedProps.has('size') && changedProps.get('size') !== this.size) {
            this.style.width = this.size + 'px';
            this.style.height = this.size + 'px';
        }
    }
    refresh() {
        const personId = this.personId;
        this.personId = 0;
        this.personId = personId;
    }
    render() {
        return html `<img draggable="false" alt="Profile Picture" src="${this._computeSrc(this.personId, this.size)}">`;
    }
};
ProfilePictureElement.styles = css `
    :host {
        display: inline-block;
        white-space: normal;
        flex-shrink: 0;
    }

    img {
        display: block;
        width: 100%;
    }

    :host([shape=circle]) img {
        border-radius: 50%;
        cursor: pointer;
    }
`;
__decorate([
    property({ type: Number })
], ProfilePictureElement.prototype, "personId", void 0);
__decorate([
    property({ reflect: true, type: String })
], ProfilePictureElement.prototype, "shape", void 0);
__decorate([
    property({ type: Number })
], ProfilePictureElement.prototype, "size", void 0);
ProfilePictureElement = __decorate([
    customElement('profile-picture')
], ProfilePictureElement);
export { ProfilePictureElement };
//# sourceMappingURL=profile-picture.js.map