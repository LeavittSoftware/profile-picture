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
        computed: "buildUrl(personId, size)",
        notify: true
    })
    src: String;

    private buildUrl(personId: number, size: number) {
        const largerSize = size * 1.2;  //Grabs a larger picture than needed to reduce pixelation 
        return `https://api2.leavitt.com/People(${personId})/Default.Picture(size=${largerSize})`;
    }

    private randomId(shape) {
        return shape + "-" + Math.random().toString(36).substr(2, 4);
    }
}

// after the element is defined, we register it in Polymer
LSSProfilePicture.register();