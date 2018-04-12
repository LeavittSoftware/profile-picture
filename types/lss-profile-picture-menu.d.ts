declare const LssProfilePictureMenu_base: Polymer.LazyImportsMixinConstructor & typeof Polymer.Element & Polymer.GestureEventListenersConstructor;
declare class LssProfilePictureMenu extends LssProfilePictureMenu_base {
    personId: number;
    roles: Array<string>;
    fullname: string;
    disableAutoload: boolean;
    size: number;
    dialog: PaperDialogElement;
    userManager: LssUserManager;
    profilePicture: LSSProfilePicture;
    innerProfilePicture: LSSProfilePicture;
    refresh(): void;
    protected _onProfilePictureTapped(): Promise<void>;
    protected _onMyAccountTapped(): void;
    protected _calcUpArrowStyle(size: number): string;
    protected _onLogoutTapped(): void;
}
