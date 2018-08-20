import { PolymerElement } from '@polymer/polymer';
export declare class ProfilePictureElement extends PolymerElement {
    personId: number;
    shape: string;
    size: number;
    src(personId: number, size: number): string;
    _sizeChanged(): void;
    refresh(): void;
    private isDev;
    static readonly template: HTMLTemplateElement;
}
