@component("lss-profile-picture")
class LSSProfilePicture extends polymer.Base {

    @property({
        value: 0,
        type: Number,
        notify: true
    })
    personId: number;

    @property({
        value: "circle",
        notify: true,
        reflectToAttribute: true
    })
    shape: String;

    @property({
        value: 320,
        notify: true,
        reflectToAttribute: true
    })
    size: number;

    @property({
        notify: true
    })
    href: String;

    @property({
        value: "",
        notify: true
    })
    desc: String;

    @property({
        computed: "randomId(shape)",
        notify: true
    })
    maskId: String;

    @property({
        notify: true
    })
    src: String;

    refresh() {
        var personId = this.personId;
        this.setUrl(this.personId, this.size, true);
    }

    private isDev(): boolean {

        if (document == null || document.location == null || document.location.host == null)
            return true;

        const host = document.location.host;
        if (host.indexOf("dev") !== -1)
            return true;

        if (host.indexOf("localhost") !== -1)
            return true;

        return false;
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    @observe("personId,size")
    private setUrl(personId: number, size: number, forceReload = false) {
        const largerSize = size * 1.2;  //Grabs a larger picture than needed to reduce pixelation
        var baseUrl = this.isDev() ? "https://devapi2.leavitt.com/" : "https://api2.leavitt.com/";
        var version = forceReload ? `?v=${this.getRandomInt(1, 1000)}` : "";
        this.src = `${baseUrl}People(${personId})/Default.Picture(size=${largerSize})${version}`;
    }

    private randomId(shape) {
        return shape + "-" + Math.random().toString(36).substr(2, 4);
    }
}

// after the element is defined, we register it in Polymer
LSSProfilePicture.register();