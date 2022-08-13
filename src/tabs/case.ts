import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { style } from "./caseCss";

@customElement("case-tab")
export class Case extends LitElement {
  static override styles = [style];

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