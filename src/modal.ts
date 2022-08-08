import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-modal")
export class Modal extends LitElement {
    
    static styles = css`
        :host {
            display: block;
        }
    `;

    override render() {
        return html` <h3>Im modal !</h3>`;
    }
}
