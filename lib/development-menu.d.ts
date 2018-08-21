import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/paper-input/paper-input.js';
import { PolymerElement } from '@polymer/polymer';
declare const DevelopmentMenuElement_base: typeof PolymerElement & import("@leavittsoftware/user-manager/lib/authenticated-roles-mixin").AuthenticatedRolesMixinConstructor;
export declare class DevelopmentMenuElement extends DevelopmentMenuElement_base {
    recentPermissions: Array<string>;
    recentPermissionItems: Array<any>;
    value: string;
    selected: number;
    addInput: any;
    protected _recentPermissionsChanged(): void;
    protected _recentPermissionsCheckedChanged(e: any): void;
    ready(): void;
    private _addToRecent;
    private _addPermission;
    private _removePermission;
    protected _inputKeyDown(e: any): void;
    protected _removePermissionTap(e: any): void;
    protected _refreshRolesFromApi(): Promise<void>;
    static readonly template: HTMLTemplateElement;
}
export {};
