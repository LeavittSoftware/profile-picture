@customElement('lss-profile-picture-menu')
class LssProfilePictureMenu extends Polymer.LazyImportsMixin(LssRequesterBehavior(Polymer.mixinBehaviors([Polymer.GestureEventListeners], Polymer.Element))) {

    @property({ notify: true })
    userManager: any;

    @property({ notify: true })
    personId: number;

    @property()
    lazyPersonId: number = 0;

    @property({ notify: true })
    fullname: string;

    private hovered = false;

    ready() {
        super.ready();
    }

    refresh() {
        this.$.profilePicture.refresh();
        this.$.innerProfilePicture.refresh();
    }

    @gestureListen('tap', 'profilePicture')
    async clickHandler(e: any) {
        let results = await this.importLazyGroup('menu');
        const dialog: any = this.$.dialog;
        this.lazyPersonId = this.personId;
        dialog.removeAttribute('unresolved');
        dialog.positionTarget = this.$.profilePicture;
        dialog.toggle();
    }

    @gestureListen('tap', 'myAccountButton')
    myAccountClickHandler(e: any) {
        window.open('https://accounts.leavitt.com/', '_blank');
    }

    @gestureListen('tap', 'signout')
    signoutClickHandler(e: any) {
        this.userManager = this.requestInstance('UserManager');
        this.userManager.logoutAsync();
    }

    @listen('iron-overlay-canceled')
    canceled(event: any) {
        if (this.hovered)
            event.preventDefault();
    }

    @listen('mouseover', 'profilePicture')
    onHovered() {
        this.hovered = true;
    }

    @listen('mouseout', 'profilePicture')
    onUnhovered() {
        this.hovered = false;
    }
}