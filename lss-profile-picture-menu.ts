
@customElement('lss-profile-picture-menu')
class LssProfilePictureMenu extends Polymer.LazyImportsMixin
(Polymer.DeclarativeEventListeners(Polymer.Element)) {
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

  @listen('click', 'profilePicture')
  async clickHandler(e: any) {
    await this.importLazyGroup('menu');
    const dialog = this.$.dialog as any;
    dialog.positionTarget = this.$.profilePicture;
    this.lazyPersonId = this.personId;
    this.$.dialog.removeAttribute('unresolved');
    dialog.toggle();
  }

  @listen('click', 'myAccountButton')
  myAccountClickHandler(e: any) {
    window.open('https://accounts.leavitt.com/', '_blank');
  }

  @listen('click', 'signout')
  async signoutClickHandler(e: any) {
    const options = {bubbles: true, composed: true};
    this.dispatchEvent(new CustomEvent('logout', options));
  }
}