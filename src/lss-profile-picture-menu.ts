@Polymer.decorators.customElement('lss-profile-picture-menu')
class LssProfilePictureMenu extends Polymer.GestureEventListeners
(Polymer.LazyImportsMixin(Polymer.DeclarativeEventListeners(Polymer.Element))) {
  @Polymer.decorators.property({type: Number, notify: true})
  personId: number;

  @Polymer.decorators.property({type: Number})
  lazyPersonId: number = 0;

  @Polymer.decorators.property({type: String, notify: true})
  fullname: string;

  refresh() {
    const profilePicture = this.$.profilePicture as any;
    const innerProfilePicture = this.$.innerProfilePicture as any;
    innerProfilePicture.refresh();
    profilePicture.refresh();
  }

  private _toggleDialog() {
    const dialog = this.$.dialog as any;
    dialog.toggle();
  }

  @Polymer.decorators.listen('tap', 'profilePicture')
  async onProfilePictureTapped() {
    await this.importLazyGroup('menu');
    const dialog = this.$.dialog as any;
    dialog.positionTarget = this.$.profilePicture;
    this.lazyPersonId = this.personId;
    this.$.dialog.removeAttribute('unresolved');
    this._toggleDialog();
  }

  @Polymer.decorators.listen('tap', 'myAccountButton')
  onMyAccountTapped() {
    window.open('https://accounts.leavitt.com/', '_blank');
  }

  @Polymer.decorators.listen('tap', 'logout')
  onLogoutTapped() {
    const options = {bubbles: true, composed: true};
    this.dispatchEvent(new CustomEvent('logout', options));
    this._toggleDialog();
  }
}