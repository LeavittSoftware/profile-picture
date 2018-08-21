import '@polymer/paper-dialog/paper-dialog.js';
import { PolymerElement } from '@polymer/polymer';
import { ProfilePictureElement } from './profile-picture';
export declare class ProfilePictureMenuElement extends PolymerElement {
    personId: number;
    fullname: string;
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