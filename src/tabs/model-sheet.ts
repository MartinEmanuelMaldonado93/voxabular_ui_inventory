import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import backbeige from "../assets/img/beige-paper.png";

@customElement("model-sheet")
export class ModelSheet extends LitElement {
    static override styles = [
        css`
            :host {
                display: block;
                background: url(${unsafeCSS(backbeige)});
                border: 1px solid gray;
                border-radius: 4px;
            }
        `,
    ];
    @property({type:String})
    nameid?:string;

    override render() {
        return html` <slot></slot> `;
    }
}
