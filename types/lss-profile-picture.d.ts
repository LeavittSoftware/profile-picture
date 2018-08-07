declare class LSSProfilePicture extends Polymer.Element {
    personId: number;
    shape: string;
    size: number;
    src: string;
    _sizeChanged(): void;
    refresh(): void;
    private isDev;
    getSrc(personId: number, size: number): void;
}
