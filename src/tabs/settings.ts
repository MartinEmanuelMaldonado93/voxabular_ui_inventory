import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import hints from "../assets/img/hints.png";
//src\assets\img\hints.png
@customElement("settings-tab")
export class Settings extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .settings-container {
                display: flex;
                flex-direction: column;
                max-width: 600px;
                place-items: center;
                gap: 0.5rem;
            }
            button {
                display: block;
                font-family: voxabular-font;
                width: 100%;
                margin: 1rem 0;
                padding: 5px;
                transition: 0.2s;
                /* border-radius: 5px; */
            }
            button:hover {
                box-shadow: 0 2px 6px 1px gray;
            }
            button:active {
                box-shadow: 0 0px 4px 4px white;
                transform: translateY(1px);
            }
            .erase-footer button:hover {
                background-color: tomato;
            }
            .hints {
                position: relative;
                z-index: 2;
                width: 15rem;
                left: -290px;
                transform: rotateZ(-40deg);
                margin-top: -80px;
            }
            input[type="range"],
            input[type="range"]::-webkit-slider-runnable-track,
            input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
            }
            input[type="range"]::-webkit-slider-thumb {
                background-color: #777;
                width: 30px;
                height: 30px;
                border: 3px solid #333;
                border-radius: 50%;
                margin-top: -9px;
            }
            input[type="range"]::-webkit-slider-runnable-track {
                height: 5px;
                background-color: black;
            }
        `,
    ];
    @property()
    userid: number = +new Date();

    render() {
        return html`
            <div class="settings-container">
                <h2>Change language</h2>
                <div class="buttons-container">
                    <button>Hablo español y quiero hablar inglés</button>
                    <button>I speak English and want to learn Spanish</button>
                    <button>Sólo quiero jugar en Español</button>
                    <button>I just want to play in English</button>
                </div>
                <img class="hints" src=${hints} />
                <div class="volume">
                    <div>Music Volume</div>
                    <input
                        class="range"
                        id="range"
                        type="range"
                        min="1"
                        max="100"
                    />
                </div>
                <div class="user-id">User:${this.userid}</div>
                <div class="erase-footer">
                    <button class="erase">Erase and Restart</button>
                </div>
            </div>
        `;
    }
}
