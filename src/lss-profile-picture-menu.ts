@Polymer.decorators.customElement('lss-profile-picture-menu')
class LssProfilePictureMenu extends Polymer.GestureEventListeners
(Polymer.LazyImportsMixin(Polymer.Element)) {
  @Polymer.decorators.property({type: Number, notify: true})
  personId: number;

  @Polymer.decorators.property({type: Array, notify: true})
  roles: Array<string>;

  @Polymer.decorators.property({type: String, notify: true})
  fullname: string;

  @Polymer.decorators.property({type: Boolean})
  disableAutoload: boolean;

  @Polymer.decorators.property({type: Number})
  size: number = 40;

  @Polymer.decorators.query('paper-dialog')
  dialog: PaperDialogElement;

  @Polymer.decorators.query('lss-user-manager')
  userManager: LssUserManager;

  @Polymer.decorators.query('#profilePicture')
  profilePicture: LSSProfilePicture;

  @Polymer.decorators.query('#innerProfilePicture')
  innerProfilePicture: LSSProfilePicture;

  refresh() {
    this.innerProfilePicture.refresh();
    this.profilePicture.refresh();
  }

  protected async _onProfilePictureTapped() {
    await this.importLazyGroup('menu');
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
    this.userManager.logoutAsync();
  }
}