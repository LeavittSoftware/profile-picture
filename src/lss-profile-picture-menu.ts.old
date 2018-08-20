@Polymer.decorators.customElement('lss-profile-picture-menu')
class LssProfilePictureMenu extends AuthenticatedPersonBehavior
(Polymer.GestureEventListeners(Polymer.LazyImportsMixin(Polymer.Element))) {
  @Polymer.decorators.property({type: Number})
  size: number = 40;

  @Polymer.decorators.query('paper-dialog')
  dialog: PaperDialogElement;

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
    window.dispatchEvent(new CustomEvent('um-logout'));
  }
}