import '@polymer/paper-dialog/paper-dialog.js';
import '../lib/profile-picture.js';
import { PolymerElement } from '@polymer/polymer';
import { ProfilePictureElement } from './profile-picture';
declare const ProfilePictureMenuElement_base: typeof PolymerElement & import("@leavittsoftware/user-manager/lib/authenticated-person-mixin").AuthenticatedPersonMixinConstructor;
export declare class ProfilePictureMenuElement extends ProfilePictureMenuElement_base {
    size: number;
    dialog: any;
    profilePicture: ProfilePictureElement;
    innerProfilePicture: ProfilePictureElement;
    private _loadComplete;
    refresh(): void;
    protected _onProfilePictureTapped(): Promise<void>;
    protected _onMyAccountTapped(): void;
    protected _calcUpArrowStyle(size: number): string;
    protected _onLogoutTapped(): void;
    static readonly template: HTMLTemplateElement;
}
export {};
