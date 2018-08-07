declare const LssProfilePictureMenu_base: AuthenticatedPersonBehaviorConstructor & Polymer.LazyImportsMixinConstructor & typeof Polymer.Element & Polymer.GestureEventListenersConstructor;
declare class LssProfilePictureMenu extends LssProfilePictureMenu_base {
    size: number;
    dialog: PaperDialogElement;
    profilePicture: LSSProfilePicture;
    innerProfilePicture: LSSProfilePicture;
    refresh(): void;
    protected _onProfilePictureTapped(): Promise<void>;
    protected _onMyAccountTapped(): void;
    protected _calcUpArrowStyle(size: number): string;
    protected _onLogoutTapped(): void;
}
