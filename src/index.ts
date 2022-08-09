import { LitElement, html, css, CSSResultGroup, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "../scss/main.scss";
import "./tabs/model-sheet";
import backbeige from "./assets/img/beige-paper.png";

@customElement("lit-notebook")
export class LitNotebook extends LitElement {
    static styles?: CSSResultGroup | undefined = [
        css`
            :host {
                font-family: voxabular-font;
            }
            button {
                font-size: 2rem;
                padding: 0 10px;
                font-family: voxabular-font;
                background: url(${unsafeCSS(backbeige)});
            }
            .bloc-tabs {
                display: flex;
                gap: 1px;
            }
            .active-tabs {
                background-color: lightblue;
                box-shadow: 1px 0 4px 2px white;
                border: none;
            }
            .container {
                background-color: white;
                height: 70vh;
                width: 90vw;
                margin: 0 auto;
            }
        `,
    ];

    @state()
    toggleState: string = "leads";

    setToggleState(str: string) {
        this.toggleState = str;
    }
    override render() {
        return html`
            <div class="container">
                <div class="bloc-tabs">
                    <button
                        class=${this.toggleState === "suscribe"
                            ? "tabs active-tabs"
                            : "tabs"}
                        @click=${() => this.setToggleState("suscribe")}
                    >
                        Suscribe
                    </button>
                    <button
                        class=${this.toggleState === "case"
                            ? "tabs active-tabs"
                            : "tabs"}
                        @click=${() => (this.toggleState = "case")}
                    >
                        Case
                    </button>
                    <button
                        class=${this.toggleState === "leads"
                            ? "tabs active-tabs"
                            : "tabs"}
                        @click=${() => this.setToggleState("leads")}
                    >
                        Leads
                    </button>
                    <button
                        class=${this.toggleState === "vocabulary"
                            ? "tabs active-tabs"
                            : "tabs"}
                        @click=${() => this.setToggleState("vocabulary")}
                    >
                        Vocabulary
                    </button>
                    <button
                        class=${this.toggleState === "settings"
                            ? "tabs active-tabs"
                            : "tabs"}
                        @click=${() => this.setToggleState("settings")}
                    >
                        Settings
                    </button>
                </div>
                <div class="content-tabs">
                    ${this.toggleState === "leads"
                        ? html`<model-sheet>Leads</model-sheet>`
                        : ""}
                    ${this.toggleState === "case"
                        ? html`<model-sheet>Case</model-sheet>`
                        : ""}
                    ${this.toggleState === "suscribe"
                        ? html`<model-sheet>Suscribe</model-sheet>`
                        : ""}
                    ${this.toggleState === "vocabulary"
                        ? html`<model-sheet>Vocabulary</model-sheet>`
                        : ""}
                    ${this.toggleState === "settings"
                        ? html`<model-sheet>Settings</model-sheet>`
                        : ""}
                </div>
            </div>
        `;
    }
}
