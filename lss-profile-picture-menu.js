var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let LssProfilePictureMenu = class LssProfilePictureMenu extends LssRequesterBehavior(Polymer.mixinBehaviors([Polymer.GestureEventListeners], Polymer.Element)) {
    constructor() {
        super(...arguments);
        this.hovered = false;
    }
    ready() {
        super.ready();
        this.addEventListener('iron-overlay-canceled', (e) => this.canceled(e));
        Polymer.Gestures.addListener(this.$.profilePicture, 'tap', e => this.clickHandler(e));
        Polymer.Gestures.addListener(this.$.signout, 'tap', e => this.signoutClickHandler(e));
        Polymer.Gestures.addListener(this.$.myAccountButton, 'tap', e => this.myAccountClickHandler(e));
    }
    refresh() {
        this.$.profilePicture.refresh();
        this.$.innerProfilePicture.refresh();
    }
    // @gestureListen("tap", "profilePicture")
    clickHandler(e) {
        console.log("clicked");
        const dialog = this.$.dialog;
        dialog.positionTarget = this.$.profilePicture;
        dialog.toggle();
    }
    // @gestureListen("tap", "my-account-button")
    myAccountClickHandler(e) {
        window.open("https://accounts.leavitt.com/", "_blank");
    }
    // @gestureListen("tap", "signout")
    signoutClickHandler(e) {
        this.userManager = this.requestInstance("UserManager");
        this.userManager.logoutAsync();
    }
    // @listen("iron-overlay-canceled")
    canceled(event) {
        console.log("iron-overlay-canceled listener called.");
        if (this.hovered)
            event.preventDefault();
    }
    onHovered() {
        this.hovered = true;
    }
    onUnhovered() {
        this.hovered = false;
    }
};
__decorate([
    property({ notify: true }),
    __metadata("design:type", Object)
], LssProfilePictureMenu.prototype, "userManager", void 0);
__decorate([
    property({ notify: true }),
    __metadata("design:type", Number)
], LssProfilePictureMenu.prototype, "personId", void 0);
__decorate([
    property({ notify: true }),
    __metadata("design:type", String)
], LssProfilePictureMenu.prototype, "fullname", void 0);
LssProfilePictureMenu = __decorate([
    customElement("lss-profile-picture-menu")
], LssProfilePictureMenu);
