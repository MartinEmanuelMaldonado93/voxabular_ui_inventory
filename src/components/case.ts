import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import style from "../styles/tabs_scss/case.scss";
import "../assets/img/inkstain.png";

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
        <h1 class="case__title">${this.titleCase}</h1>
        <div class="case__list">${map(this._todos, li_template)}</div>
        <div class="case__img-container"> 
          <img class="case__img-ink" src="./assets/inkstain.png" />
        </div>
      </div>
    `;
  }
}
