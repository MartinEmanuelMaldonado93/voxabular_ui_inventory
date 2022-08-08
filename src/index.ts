import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./modal.ts"; 
import "./adjacentHtml"; // el wth hotpink text 

@customElement("lit-app")
export class LitApp extends LitElement {
    static styles?: CSSResultGroup | undefined = css``;

    @property()
    title: string = "Muerte";

    @state()
    show: boolean = false;
    //class=${sass.sass}
    render() {
        return html`
            <div>Artist: Canserbero</div>
            <div>Album: ${this.title} 🐍</div>
            <div>LIT 2022</div>

            ${this.show ? html`<lit-modal></lit-modal>` : ""}

            <button @click=${() => (this.show = !this.show)}>Click me!</button>
        `;
    }
}
