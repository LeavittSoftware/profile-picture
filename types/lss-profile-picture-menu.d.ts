declare const LssProfilePictureMenu_base: Polymer.LazyImportsMixinConstructor & typeof Polymer.Element & Polymer.DeclarativeEventListenersConstructor & Polymer.GestureEventListenersConstructor;
declare class LssProfilePictureMenu extends LssProfilePictureMenu_base {
    personId: number;
    lazyPersonId: number;
    fullname: string;
    refresh(): void;
    private _toggleDialog();
    onProfilePictureTapped(): Promise<void>;
    onMyAccountTapped(): void;
    onLogoutTapped(): void;
}
