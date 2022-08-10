import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import vox from "../assets/img/vox.png";

@customElement("vocabulary-tab")
export class Vocabulary extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            h1 {
                color: rgb(230, 20, 20);
                text-shadow: 2px 2px 1px black;
                margin: 0;
                margin-top: 1rem;
            }
            li {
                list-style: none;
            }
            .vocabulary-container {
                text-align: center;
            }
            .card-container {
                margin: 2rem 0;
                display: flex;
            }
            .card {
                font-family: monospace;
                font-weight: 600;
                background-color: white;
                border: 1px solid black;
                border-radius: 3px;
                max-width: 160px;
                padding: 1rem 5px;
                filter: brightness(130%);
                transition: 500ms;
                box-shadow: 0 3px 4px 2px gray;
                transform: rotateZ(-10deg);
            }
            .card:hover {
                transform: scale(1.1);
                z-index: 3;
            }
            .c-1 {
                transform: rotateZ(-20deg) translateY(-20px);
            }
            .c-2 {
                transform: rotateZ(-10deg);
                filter: sepia(120%);
            }
            .c-3 {
                transform: rotateZ(10deg) translateX(40px);
            }
            .rotation {
            }

            .card__p {
                border-bottom: 2px solid gray;
            }
            .card__img {
                width: 95%;
            }
        `,
    ];

    _todos: string[] = [
        "Excellent",
        "Good",
        "Miss",
        "Hints",
        "Study words used",
    ];
    @state()
    rotation = false;

    render() {
        const li_template = (el: string) =>
            html`<li class="li-template">${el}</li>`;

        return html`
            <div class="vocabulary-container">
                <h1>A Countryside Drive</h1>
                <div class="list-items">${map(this._todos, li_template)}</div>
                <div class="card-container">
                    <div
                        @click=${() => (this.rotation = !this.rotation)}
                        class="card c-1 ${this.rotation ? "rotation" : ""}"
                    >
                        <img class="card__img" src=${vox} />
                        <p class="card__p">Exit the car</p>
                        <span class="card__footer">
                            <!-- icon -->
                            <p>Expression</p>
                        </span>
                    </div>
                    <div
                        @click=${() => (this.rotation = !this.rotation)}
                        class="card c-2 ${this.rotation ? "rotation" : ""}"
                    >
                        <img class="card__img" src=${vox} />
                        <p class="card__p">Stop the bus</p>
                        <span class="card__footer">
                            <!-- icon -->
                            <p>Expression</p>
                        </span>
                    </div>
                    <div
                        @click=${() => (this.rotation = !this.rotation)}
                        class="card c-3 "
                    >
                        <img class="card__img" src=${vox} />
                        <p class="card__p">Please help !!!</p>
                        <span class="card__footer">
                            <!-- icon -->
                            <p>Expression</p>
                        </span>
                    </div>
                </div>
            </div>
        `;
    }
}
/** How the library of react three fiber, the components should have options to custom
 * the component
 *
 */
