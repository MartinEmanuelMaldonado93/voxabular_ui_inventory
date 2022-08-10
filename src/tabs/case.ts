import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { map } from "lit/directives/map.js";

@customElement("case-tab")
export class Case extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                min-height: 400px;
            }
            .case-container {
                margin-top: 2rem;
            }
            .title-case {
                color: rgb(230, 20, 20);
                text-shadow: 2px 2px 1px black;
                text-align: center;
            }
            .li-template {
                font-size: 1.5rem;
                list-style: none;
            }
            li::before {
                content: "(X)  ";
                color: rgb(230, 20, 20);// red
            }
            .list-items {
                text-align: center;
            }
        `,
    ];
    @property()
    titleCase?: string = "Case I: Abby";

    _todos: Array<string> = [
        "What's his name?",
        "What's his address?",
        "Where is the baby's father?",
        "Why did he disappear?",
    ];

    render() {
        const li_template = (el: string) =>
            html`<li class="li-template">${el}</li>`;

        return html`
            <div class="case-container">
                <h1 class="title-case">${this.titleCase}</h1>
                <div class="list-items">${map(this._todos, li_template)}</div>
            </div>
        `;
    }
}