@Polymer.decorators.customElement('lss-profile-picture')
class LSSProfilePicture extends Polymer.Element {
  @Polymer.decorators.property({type: Number, notify: true})
  personId: number = 44;

  @Polymer.decorators.property({type: String, reflectToAttribute: true})
  shape: string = 'circle';

  @Polymer.decorators.property({type: Number})
  size: number = 60;

  @Polymer.decorators.property({type: String})
  src: string;

  @Polymer.decorators.observe('size')
  _sizeChanged() {
    this.style.width = this.size + 'px';
    this.style.height = this.size + 'px';
  }

  public refresh() {
    const personId = this.personId;
    this.set('personId', 0);
    this.set('personId', personId);
  }

  private isDev(): boolean {
    if (document == null || document.location == null || document.location.host == null)
      return true;

    const host = document.location.host;
    if (host.indexOf('dev') !== -1)
      return true;

    if (host.indexOf('localhost') !== -1)
      return true;

    return false;
  }

  @Polymer.decorators.observe('personId,size')
  getSrc(personId: number, size: number) {
    this.src = `https://cdn.leavitt.com/user-${personId}-${size}.jpeg`;
  }

  @Polymer.decorators.listen('error', 'profileImage')
  onProfilePictureError(size: number) {
    const availableSizes = [32,64,128,256,512]
    size = availableSizes.filter(s => Number(s) >= size)[0] || 512;

    const newSrc = `https://cdn.leavitt.com/user-0-${size}.jpeg`;
    if (this.src === newSrc)
      return;
    this.src = newSrc;
  }
}
