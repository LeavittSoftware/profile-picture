import {customElement, observe, property} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer';

@customElement('profile-picture')
export class ProfilePictureElement extends PolymerElement {
  @property({reflectToAttribute: true, type: Number}) personId: number = 44;
  @property({reflectToAttribute: true, type: String}) shape: string = 'circle';
  @property({reflectToAttribute: true, type: Number}) size: number = 120;

  src(personId: number, size: number): string {
    const baseUrl = this.isDev() ? 'https://devmapi.leavitt.com/' : 'https://mapi.leavitt.com/';
    return `${baseUrl}People(${personId})/Default.Picture(size=${size})`;
  }

  @observe('size')
  _sizeChanged() {
    this.style.width = this.size + 'px';
    this.style.height = this.size + 'px';
  }

  public refresh() {
    const personId = this.personId;
    this.personId = 0;
    this.personId = personId;
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

  static get template() {
    return html`<style>
    :host {
        display: inline-block;
        white-space: normal;
        /* IE11 fix if flex is applied to element */
        flex-shrink: 0;
    }

    img {
        display: block;
        width: 100%;
        @apply --lss-profile-picture-img;
    }

    :host([shape="circle"]) img {
        border-radius: 50%;
    }
</style>
<img draggable="false" src$="[[src(personId,size)]]">`;
  }
}
