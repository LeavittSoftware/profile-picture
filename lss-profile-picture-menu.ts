@behavior(LssRequesterBehavior)
@component("lss-profile-picture-menu")
class LssProfilePictureMenu extends polymer.Base {
    requestInstance: (key: string) => LssUserManager;

    @property({
        type: LssUserManager,
        notify: true
    })
    userManager: LssUserManager;

    @property({
        value: 0,
        type: Number,
        notify: true
    })
    personId: Number;

     @property({
        value: 0,
        type: Number,
        notify: true
    })
    fullname: Number;

    attached() {
        this.userManager = this.requestInstance("UserManager");
    }

    @listen("profilePicture.tap")
    clickHandler(e) {
        const dialog: any = this.$.dialog;
        dialog.positionTarget = this.$.profilePicture;
        dialog.toggle();
    }

    @listen("my-account-button.tap")
    myAccountClickHandler(e) {
        window.open("https://accounts.leavitt.com/", "_blank");
    }

    @listen("signout.tap")
    signoutClickHandler(e) {
        this.userManager.logoutAsync()
            .then(o => location.reload());
    }

    @listen("iron-overlay-canceled")
    canceled(event) {
        if (this.hovered)
            event.preventDefault();
    }

    hovered = false;
    onHovered() {
        this.hovered = true;
    }

    onUnhovered() {
        this.hovered = false;
    }
}
LssProfilePictureMenu.register();
