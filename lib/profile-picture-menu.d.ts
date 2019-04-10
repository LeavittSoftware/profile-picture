import '../lib/profile-picture.js';
import { ProfilePictureElement } from './profile-picture';
declare const ProfilePictureMenuElement_base: any;
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
