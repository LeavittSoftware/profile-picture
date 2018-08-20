import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button/paper-button.js';

import {customElement, property, query} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer';

import {ProfilePictureElement} from './profile-picture';

@customElement('profile-picture-menu')
export class ProfilePictureMenuElement extends PolymerElement {
  @property({type: Number}) personId: number = 44;
  @property({type: String}) fullname: string;
  @property({type: Number}) size: number = 40;

  @query('paper-dialog') dialog: any;
  @query('#profilePicture') profilePicture: ProfilePictureElement;
  @query('#innerProfilePicture') innerProfilePicture: ProfilePictureElement;

  refresh() {
    this.innerProfilePicture.refresh();
    this.profilePicture.refresh();
  }

  protected async _onProfilePictureTapped() {
    // await this.importLazyGroup('menu');
    this.dialog.positionTarget = this.profilePicture;
    this.dialog.removeAttribute('unresolved');
    this.dialog.toggle();
  }

  protected _onMyAccountTapped() {
    window.open('https://accounts.leavitt.com/', '_blank');
  }

  protected _calcUpArrowStyle(size: number) {
    const _size = Number(size) || 40;
    return `right:${_size / 2}px`;
  }

  protected _onLogoutTapped() {
    window.dispatchEvent(new CustomEvent('um-logout'));
  }

  static get template() {
    return html`<style>
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
            <profile-picture person-id="[[personId]]" on-tap="_onProfilePictureTapped" id="profilePicture" shape="circle" size="[[size]]"></profile-picture>
          </section>`;
  }
}
