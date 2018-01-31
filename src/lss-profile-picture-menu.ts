@customElement('lss-profile-picture-menu')
class LssProfilePictureMenu extends Polymer.GestureEventListeners
(Polymer.LazyImportsMixin(Polymer.DeclarativeEventListeners(Polymer.Element))) {
  @property({type: Number, notify: true})
  personId: number;

  @property({type: Number})
  lazyPersonId: number = 0;

  @property({type: String, notify: true})
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

  @listen('tap', 'profilePicture')
  async onProfilePictureTapped() {
    await this.importLazyGroup('menu');
    const dialog = this.$.dialog as any;
    dialog.positionTarget = this.$.profilePicture;
    this.lazyPersonId = this.personId;
    this.$.dialog.removeAttribute('unresolved');
    this._toggleDialog();
  }

  @listen('tap', 'myAccountButton')
  onMyAccountTapped() {
    window.open('https://accounts.leavitt.com/', '_blank');
  }

  @listen('tap', 'logout')
  onLogoutTapped() {
    const options = {bubbles: true, composed: true};
    this.dispatchEvent(new CustomEvent('logout', options));
    this._toggleDialog();
  }
}