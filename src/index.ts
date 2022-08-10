import { LitElement, html, css, CSSResultGroup, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import backbeige from "./assets/img/beige-paper.png";
import "../scss/main.scss";
import "./tabs/model-sheet";
import "./tabs/tabs-group"; 

//https://coolors.co/palette/220901-621708-941b0c-bc3908-f6aa1c
//https://coolors.co/palette/335c67-fff3b0-e09f3e-9e2a2b-540b0e
//https://coolors.co/palette/f2c57c-ddae7e-7fb685-426a5a-ef6f6c
@customElement("lit-notebook")
export class LitNotebook extends LitElement {
    static styles?: CSSResultGroup | undefined = [
         
        css`
            :root {
                --dark: #282b28;
                --dark-green: #3e5641;
                --dark-brown: #a24936;
                --dark-orange: #d36135;
                --dark-lightblue: #83bca9;
            }
            :host {
                font-family: voxabular-font;
            }
            button {
                font-family: voxabular-font;
                font-size: 1.5rem;
                padding: 0 10px;
                background: url(${unsafeCSS(backbeige)});
                background-color: beige;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                border: 1px solid lightgray;
                border-left: none;
                border-bottom: none;
            }
            .button-tabs {
                display: flex;
                /* margin-left: px;  */
            }
            .button-tabs :not(:first-child) {
                /* margin-left: -2px; */
                /* background: red; */
            }
            .content-tabs {
                /* min-height: 400px; */
            }
            .tabs {
                background: url(${unsafeCSS(backbeige)}),#d3d3bb;
                /* background-color: hsl(80, 5%, 30%); */
                /* background-color: #d3d3bb03; */
            }
            .active-tabs {
                box-shadow: 0px -2px 5px 3px white; /** shine */
                border: none;
                transform: scale(1.02);
                /* border-left: 1px solid gray;
                border-right: 1px solid gray; */
            }
            .container {
                background-color: #282b28;
                min-height: 500px;
                width: 90vw;
                margin: 1rem auto;
                padding: 5px;
                border-radius: 8px;
            }
        `,
    ];

    @state()
    toggleState: string = "vocabulary";

    setToggleState(str: string) {
        this.toggleState = str;
    }

    override render() {
        return html`
            <div class="container">
                <div class="button-tabs">
                    <button
                        class=${this.toggleState === "suscribe"
                            ? "active-tabs"
                            : "tabs"}
                        @click=${() => this.setToggleState("suscribe")}
                    >
                        Suscribe
                    </button>
                    <button
                        class=${this.toggleState === "case"
                            ? " active-tabs"
                            : "tabs"}
                        @click=${() => (this.toggleState = "case")}
                    >
                        Case
                    </button>
                    <button
                        class=${this.toggleState === "leads"
                            ? " active-tabs"
                            : "tabs"}
                        @click=${() => this.setToggleState("leads")}
                    >
                        Leads
                    </button>
                    <button
                        class=${this.toggleState === "vocabulary"
                            ? "active-tabs"
                            : "tabs"}
                        @click=${() => this.setToggleState("vocabulary")}
                    >
                        Vocabulary
                    </button>
                    <button
                        class=${this.toggleState === "settings"
                            ? "active-tabs"
                            : "tabs"}
                        @click=${() => this.setToggleState("settings")}
                    >
                        Settings
                    </button>
                </div>
                <div class="content-tabs">
                    ${this.toggleState === "leads"
                        ? html`<model-sheet>
                              <leads-tab></leads-tab>
                          </model-sheet>`
                        : ""}
                    ${this.toggleState === "case"
                        ? html`<model-sheet><case-tab></case-tab></model-sheet>`
                        : ""}
                    ${this.toggleState === "suscribe"
                        ? html`<model-sheet
                              ><suscribe-tab></suscribe-tab
                          ></model-sheet>`
                        : ""}
                    ${this.toggleState === "vocabulary"
                        ? html`<model-sheet
                              ><vocabulary-tab></vocabulary-tab
                          ></model-sheet>`
                        : ""}
                    ${this.toggleState === "settings"
                        ? html`<model-sheet
                              ><settings-tab></settings-tab
                          ></model-sheet>`
                        : ""}
                </div>
            </div>
        `;
    }
}
