declare const LssProfilePictureMenu_base: Polymer.LazyImportsMixinConstructor & typeof Polymer.Element & Polymer.GestureEventListenersConstructor;
declare class LssProfilePictureMenu extends LssProfilePictureMenu_base {
    personId: number;
    fullname: string;
    dialog: any;
    refresh(): void;
    protected _onProfilePictureTapped(): Promise<void>;
    protected _onMyAccountTapped(): void;
    protected _onLogoutTapped(): void;
}
