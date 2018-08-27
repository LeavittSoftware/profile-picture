import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/paper-input/paper-input.js';

import {authenticatedRolesMixin} from '@leavittsoftware/user-manager/lib/authenticated-roles-mixin';
import {customElement, observe, property, query} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer';

@customElement('development-menu') export class DevelopmentMenuElement extends authenticatedRolesMixin
(PolymerElement) {
  @property() recentPermissions: Array<string> = [];
  @property() recentPermissionItems: Array<any>;
  @property() value: string;
  @property() selected: number = 0;
  @query('paper-input') addInput: any;

  @observe('recentPermissions.length', 'roles.length')
  protected _recentPermissionsChanged() {
    this.recentPermissionItems = [];
    this.recentPermissions.forEach(permission => {
      const hasRole = this.roles.indexOf(permission) > -1;
      this.push('recentPermissionItems', {permission: permission, isChecked: hasRole});
    });
  }

  @observe('recentPermissionItems.*')
  protected _recentPermissionsCheckedChanged(e: any) {
    if (e.path.indexOf('isChecked') > -1) {
      const path = e.path = e.path.replace('.isChecked', '');
      const permission = this.get(path).permission;

      if (e.value) {
        this._addPermission(permission);
      } else {
        this._removePermission(permission);
      }
    }
    //"recentPermissionItems.1.isChecked"
  }

  ready() {
    super.ready();
    this.recentPermissions = JSON.parse(window.localStorage.getItem('lss-dev-recent-permissions') || '[]');
  }

  private _addToRecent(permission: string) {
    if (this.recentPermissions.indexOf(permission) === -1) {
      if (this.recentPermissions.length > 4) {
        this.pop('recentPermissions');
      }

      this.unshift('recentPermissions', permission);
      window.localStorage.setItem('lss-dev-recent-permissions', JSON.stringify(this.recentPermissions));
    }
  }

  private _addPermission(permission: string) {
    if (this.roles.indexOf(permission) !== -1) {
      return;
    }

    window.dispatchEvent(new CustomEvent('um-role-added', {detail: {role: permission}}));
    this._addToRecent(permission);
  }

  private _removePermission(permission: string) {
    if (this.roles.indexOf(permission) === -1) {
      return;
    }

    window.dispatchEvent(new CustomEvent('um-role-removed', {detail: {role: permission}}));
    this._addToRecent(permission);
  }

  protected _inputKeyDown(e: any) {
    if (e.keyCode === 13 && this.value) {
      this._addPermission(this.value);
      (this.$.permissionList as any).scrollToItem(this.value);
      this.value = '';
      this.addInput.focus();
    }
  }

  protected _removePermissionTap(e: any) {
    const permission = e.model.item;
    this._removePermission(permission);
  }

  protected async _refreshRolesFromApi() {
    localStorage.removeItem('LG-AUTH-AT');
    try {
      this.roles = await this._getRolesAsync();
    } catch (error) {
      console.warn(error);
    }
  }

  static get template() {
    return html`<style>
            :host {
                @apply --layout-vertical;
                border: 1px solid var(--app-border-color, #CFD6E0);
                height: 280px;
            }

            header {
                font-weight: 500;
                margin-top: 8px;
                margin-bottom: 4px;
                border-bottom: 1px solid var(--app-border-color, #CFD6E0);
            }

            all-roles {
                @apply --layout-vertical;
            }

            all-page {
                @apply --layout-vertical;
            }

            recent-page {
                @apply --layout-vertical;
                @apply --layout-flex-2;
                margin: 8px;
            }

            iron-list {
                height: 187px;
                padding: 4px;
                border-bottom: 1px solid var(--app-border-color, #CFD6E0);
            }

            iron-pages,
            recent-roles {
                @apply --layout-vertical;
                @apply --layout-flex-2;
            }

            role-item {
                display: block;
                @apply --layout-horizontal;
                @apply --layout-center;
                @apply --app-font-caption;
            }

            svg {
                width: 14px;
                height: 14px;
                fill: #E57373;
                margin-right: 4px;
                cursor: pointer;
            }

            recent-item {
                @apply --layout-horizontal;
                font-size: 16px;
            }

            paper-tabs {
                --paper-tab-ink: #2196F3;
                --paper-tabs: {
                    height: 30px;
                    color: #2196F3;
                    background-color: #FAFAFA;
                }
                ;
                --paper-tabs-selection-bar-color:#2196F3;
                --paper-tab-content-unselected: {
                    color: #7D7D7D;

                }
                ;
            }

            paper-tab {
                --paper-tab: {
                    padding: 0 6px;
                }
                ;
            }

            all-roles-footer {
                @apply --layout-horizontal;
            }

            total-count {
                @apply --layout-flex-2;
                color: var(--app-light-text-color, #464D59);
                line-height: 38px;
                font-size: 12px;
                padding: 8px;
                text-align: right;
            }

            paper-button {
                color: #2196F3;
            }
        </style>

        <paper-tabs selected="{{selected}}">
            <paper-tab>RECENT</paper-tab>
            <paper-tab>ALL</paper-tab>
        </paper-tabs>

        <iron-pages selected="{{selected}}">
            <recent-page>
                <recent-roles>
                    <template is="dom-repeat" items="{{recentPermissionItems}}">
                        <recent-item>
                            <paper-toggle-button checked="{{item.isChecked}}"></paper-toggle-button> [[item.permission]]</recent-item>
                    </template>
                </recent-roles>

                <paper-input value="{{value}}" label="Add Permission" on-keydown="_inputKeyDown"></paper-input>
            </recent-page>
            <all-page>
                <all-roles>
                    <iron-list id="permissionList" items="[[roles]]">
                        <template>
                            <div>
                                <role-item>
                                    <svg on-tap="_removePermissionTap" viewBox="0 0 24 24">
                                        <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                                        />
                                    </svg>[[item]]
                                </role-item>
                            </div>
                        </template>
                    </iron-list>
                </all-roles>
                <all-roles-footer>
                    <paper-button on-tap="_refreshRolesFromApi" flat> Refresh from API</paper-button>
                    <total-count> [[roles.length]] Total</total-count>
                </all-roles-footer>
            </all-page>
        </iron-pages>`;
  }
}