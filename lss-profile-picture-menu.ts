@customElement("lss-profile-picture-menu")
class LssProfilePictureMenu extends LssRequesterBehavior(Polymer.mixinBehaviors([Polymer.GestureEventListeners], Polymer.Element)) {

    @property({ notify: true })
    userManager: any;

    @property({ notify: true })
    personId: number;

    @property({ notify: true })
    fullname: string;

    private hovered = false;

    ready() {
        super.ready();
        this.addEventListener('iron-overlay-canceled', (e: any) => this.canceled(e));
        Polymer.Gestures.addListener(this.$.profilePicture, 'tap', e => this.clickHandler(e));
        Polymer.Gestures.addListener(this.$.signout, 'tap', e => this.signoutClickHandler(e));
        Polymer.Gestures.addListener(this.$.myAccountButton, 'tap', e => this.myAccountClickHandler(e));
    }

    refresh() {
        this.$.profilePicture.refresh();
        this.$.innerProfilePicture.refresh();
    }

    // @gestureListen("tap", "profilePicture")
    clickHandler(e: any) {
        console.log("clicked")

        const dialog: any = this.$.dialog;
        dialog.positionTarget = this.$.profilePicture;
        dialog.toggle();
    }

    // @gestureListen("tap", "my-account-button")
    myAccountClickHandler(e: any) {
        window.open("https://accounts.leavitt.com/", "_blank");
    }

    // @gestureListen("tap", "signout")
    signoutClickHandler(e: any) {
        this.userManager = this.requestInstance("UserManager");
        this.userManager.logoutAsync();
    }

    // @listen("iron-overlay-canceled")
    canceled(event: any) {
        console.log("iron-overlay-canceled listener called.")
        if (this.hovered)
            event.preventDefault();
    }

    onHovered() {
        this.hovered = true;
    }

    onUnhovered() {
        this.hovered = false;
    }
}