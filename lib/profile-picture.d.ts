import { LitElement } from 'lit-element';
export declare class ProfilePictureElement extends LitElement {
    personId: number;
    shape: string;
    size: number;
    _computeSrc(personId: number, size: number): string;
    updated(changedProps: any): void;
    refresh(): void;
    static styles: import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
