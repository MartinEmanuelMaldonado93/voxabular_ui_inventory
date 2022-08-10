import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import backbeige from "../assets/img/beige-paper.png";

@customElement("model-sheet")
export class ModelSheet extends LitElement {
    static override styles = [
        css`
            :host { 
                display: flex;
                place-content: center;
                border-top: none;
                border-radius: 4px;
                border-top-left-radius: 0;
                border-top-right-radius: 4px;
                background: url(${unsafeCSS(backbeige)}), beige;
                width: 100%;
            }
        `,
    ];

    @property({ type: String })
    nameid?: string;

    override render() {
        return html`<slot></slot>`;
    }
}
