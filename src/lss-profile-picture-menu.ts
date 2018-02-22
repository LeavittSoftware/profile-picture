@Polymer.decorators.customElement('lss-profile-picture-menu')
class LssProfilePictureMenu extends Polymer.GestureEventListeners
(Polymer.LazyImportsMixin(Polymer.Element)) {
  @Polymer.decorators.property({type: Number})
  personId: number;

  @Polymer.decorators.property({type: String})
  fullname: string;

  @Polymer.decorators.query('paper-dialog')
  dialog: any;

  refresh() {
    const profilePicture = this.$.profilePicture as LSSProfilePicture;
    const innerProfilePicture = this.$.innerProfilePicture as LSSProfilePicture;
    innerProfilePicture.refresh();
    profilePicture.refresh();
  }

  protected async _onProfilePictureTapped() {
    await this.importLazyGroup('menu');
    this.dialog.positionTarget = this.$.profilePicture;
    this.dialog.removeAttribute('unresolved');
    this.dialog.toggle();
  }

  protected _onMyAccountTapped() {
    window.open('https://accounts.leavitt.com/', '_blank');
  }

  protected _onLogoutTapped() {
    this.dispatchEvent(new CustomEvent('logout', {bubbles: true, composed: true} as any));
    this.dialog.toggle();
  }
}