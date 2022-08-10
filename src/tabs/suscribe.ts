import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("suscribe-tab")
export class Suscribe extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                font-size: 1.2rem;
            }
            .suscribe-container {
                min-height: 300px;
                text-align: center;
            }
            .lbl {
                display: block;
            }
            .input {
                font-family: voxabular-font;
                border-radius: 3px;
                border: none;
                padding: 5px;
                animation-name: lighting;
                animation-duration: 4s;
                animation-iteration-count: infinite;
                animation-fill-mode: both;
            } 
            @keyframes lighting{
                50%{
                    box-shadow: 0px 0px 8px 6px orange;
                }
                100%{

                }
            }
            .input:focus,
            .input:active {
                box-shadow: none;
                border: none;
                text-decoration: none;
                box-shadow: 0px 0px 8px 6px orange; 
            }

            .anchors {
                margin-top: 4rem;
            }
        `,
    ];

    render() {
        return html`
            <div class="suscribe-container">
                <h1>Thank you for suscribe!🖤</h1>
                <div class="contact">
                    <label class="lbl">Keep updated:</label>
                    <input
                        class="input"
                        type="email"
                        placeholder="Your email here :)"
                    />
                </div>

                <div class="anchors">
                    <div>To make sure you get our messages</div>
                    <a>Please add us to your address book</a>
                    <a>Manage my subscription</a>
                </div>
            </div>
        `;
    }
}
