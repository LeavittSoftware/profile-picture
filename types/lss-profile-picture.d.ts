declare const customElement: typeof Polymer.decorators.customElement, property: typeof Polymer.decorators.property, observe: typeof Polymer.decorators.observe, listen: (eventName: string, target: string | EventTarget) => (proto: any, methodName: string) => void;
declare class LSSProfilePicture extends Polymer.Element {
    personId: number;
    shape: string;
    size: number;
    src: string;
    _sizeChanged(): void;
    refresh(): void;
    private isDev();
    getSrc(personId: number, size: number): void;
}
