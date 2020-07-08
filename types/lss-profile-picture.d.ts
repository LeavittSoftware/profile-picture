declare const LSSProfilePicture_base: any;
declare class LSSProfilePicture extends LSSProfilePicture_base {
    personId: number;
    shape: string;
    size: number;
    src: string;
    _sizeChanged(): void;
    refresh(): void;
    private isDev();
    getSrc(personId: number, size: number): void;
    onProfilePictureError(size: number): void;
}
