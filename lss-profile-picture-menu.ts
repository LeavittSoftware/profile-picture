@customElement("lss-profile-picture-menu")
class LssProfilePictureMenu extends LssRequesterBehavior(Polymer.Element) {

    @property({ notify: true })
    userManager: any;

    @property({ notify: true })
    personId: number;

    @property({ notify: true })
    fullname: string;

    private hovered = false;

    refresh() {
        this.$.profilePicture.refresh();
        this.$.innerProfilePicture.refresh();
    }

    @listen("tap", "profilePicture")
    clickHandler(e: any) {
        console.log("clicked")

        const dialog: any = this.$.dialog;
        dialog.positionTarget = this.$.profilePicture;
        dialog.toggle();
    }

    @listen("tap", "my-account-button")
    myAccountClickHandler(e: any) {
        window.open("https://accounts.leavitt.com/", "_blank");
    }

    @listen("tap", "signout")
    signoutClickHandler(e: any) {
        this.userManager = this.requestInstance("UserManager");
        this.userManager.logoutAsync();
    }

    @listen("iron-overlay-canceled")
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