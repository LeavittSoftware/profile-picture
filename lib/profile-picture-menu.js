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
import '../lib/profile-picture.js';
import { authenticatedPersonMixin } from '@leavittsoftware/user-manager/lib/authenticated-person-mixin';
import { customElement, property, query } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
let ProfilePictureMenuElement = class ProfilePictureMenuElement extends authenticatedPersonMixin(PolymerElement) {
    constructor() {
        super(...arguments);
        this.size = 40;
        this._loadComplete = false;
    }
    refresh() {
        this.innerProfilePicture.refresh();
        this.profilePicture.refresh();
    }
    _onProfilePictureTapped() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('tapped');
            if (!this._loadComplete) {
                try {
                    yield import('../../../@polymer/paper-dialog/paper-dialog.js');
                    yield import('../../../@polymer/paper-button/paper-button.js');
                }
                catch (error) {
                    console.warn('paper-button failed to load', error);
                }
                this._loadComplete = true;
            }
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
    static get template() {
        return html `<style>
            paper-dialog {
              min-width: 305px;
              margin: 2px 0 0 0;
            }

            dialog-content {
              @apply --layout-flex;
              @apply --layout-vertical;
              padding: 8px !important;
              margin: 0 !important;
            }

            up-arrow {
              width: 0;
              height: 0;
              position: absolute;
              top: -10px;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid white;
            }

            conent-container {
              @apply --layout-vertical;
            }

            content-head {
              @apply --layout-horizontal;
            }

            user-info {
              @apply --layout-vertical;
              @apply --layout-flex;
              padding: 8px;
            }

            user-info user-name {
              @apply --paper-font-subhead;
              font-weight: bold;
            }

            user-info user-company {
              color: #666;
            }

            user-info paper-button {
              margin-top: 32px;
              margin-bottom: 32px;
              width: 125px;
            }

            profile-picture {
              @apply --layout-vertical;
            }

            action-buttons {
              margin-top: 8px;
              @apply --layout-horizontal;
              @apply --layout-end-justified;
            }

            paper-button {
              background-color: var(--profile-picture-logout-button-background-color, #fff);
              color: var(--profile-picture-logout-button-color, #424242);
            }

            paper-button[main-action] {
              background-color: var(--profile-picture-menu-button-background-color, #2196f3);
              color: var(--profile-picture-menu-button-color, #fff);
              --paper-button-raised-keyboard-focus: {
                background-color: var(--paper-pink-a200) !important;
                color: white !important;
              }
              ;
            }

            [unresolved] {
              display: none;
            }
          </style>
          <section>
            <paper-dialog id="dialog" scroll-action="lock" unresolved no-overlap horizontal-align="right" vertical-align="top" vertical-offset="8"
              horizontal-offset="-8">
              <dialog-content>
                <up-arrow style$="[[_calcUpArrowStyle(size)]]"></up-arrow>
                <conent-container>
                  <content-head>
                    <profile-picture id="innerProfilePicture" person-id="[[personId]]" shape="circle" size="55"></profile-picture>
                    <user-info>
                      <user-name>[[fullname]]</user-name>
                      <user-company>Leavitt Group Account</user-company>
                    </user-info>
                  </content-head>
                  <slot name="content"></slot>
                </conent-container>
                <action-buttons>
                  <paper-button on-tap="_onLogoutTapped">Logout</paper-button>
                  <slot name="accountButtonSlot">
                    <paper-button main-action on-tap="_onMyAccountTapped" flat>My Account</paper-button>
                  </slot>
                </action-buttons>
              </dialog-content>
            </paper-dialog>
            <profile-picture person-id="[[personId]]" on-click="_onProfilePictureTapped" id="profilePicture" shape="circle" size="[[size]]"></profile-picture>
          </section>`;
    }
};
__decorate([
    property({ type: Number })
], ProfilePictureMenuElement.prototype, "size", void 0);
__decorate([
    query('paper-dialog')
], ProfilePictureMenuElement.prototype, "dialog", void 0);
__decorate([
    query('#profilePicture')
], ProfilePictureMenuElement.prototype, "profilePicture", void 0);
__decorate([
    query('#innerProfilePicture')
], ProfilePictureMenuElement.prototype, "innerProfilePicture", void 0);
ProfilePictureMenuElement = __decorate([
    customElement('profile-picture-menu')
], ProfilePictureMenuElement);
export { ProfilePictureMenuElement };
//# sourceMappingURL=profile-picture-menu.js.map