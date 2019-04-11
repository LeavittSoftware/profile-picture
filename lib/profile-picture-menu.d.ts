import '../lib/profile-picture';
import '@vaadin/vaadin-button/theme/material/vaadin-button.js';
import { LitElement } from 'lit-element';
export declare class ProfilePictureMenuElement extends LitElement {
    size: number;
    personId: number;
    email: string;
    name: string;
    opened: boolean;
    protected opening: boolean;
    protected closing: boolean;
    private _animationTimer;
    private _animationFrame;
    firstUpdated(): void;
    setUserProps(): void;
    updated(changedProps: any): void;
    _toggleOverlay(): void;
    open(): void;
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    private runNextAnimationFrame_;
    close(): void;
    private handleAnimationTimerEnd_;
    protected _calcOverlayPosition(size: number): {
        top: string;
    };
    static styles: import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
