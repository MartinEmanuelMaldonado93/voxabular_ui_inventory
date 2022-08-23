import { LitElement, html, CSSResultGroup } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import "../assets/img/vox.png";
import style from "../styles/tabs_css/vocabulary.scss";

@customElement("vocabulary-tab")
export class Vocabulary extends LitElement {
  static styles = [style];

  _todos: string[] = ["Excellent", "Good", "Miss", "Hints", "Study words used"];
  @state()
  rotation = false;

  render() {
    const toLiTemplate = (el: string) =>
      html`<li class="li-template">${el}</li>`;

    return html`
      <div class="vocabulary-container">
        <div class="vocabulary__sign">
          <h1>A Countryside Drive</h1>
          <div class="list-items">${map(this._todos, toLiTemplate)}</div>
        </div>
        <div class="vocabulary__cards-container">
          <card-element class="c-1" titlecard="Exit the car"></card-element>
          <card-element class="c-2" titlecard="Stop the bus"></card-element>
          <card-element class="c-3" titlecard="Please Help!!!"></card-element>
        </div>
      </div>
    `;
  }
}

@customElement("card-element")
class CardElement extends LitElement {
  static styles?: CSSResultGroup | undefined = [style];
  @state()
  rotation: boolean = false;

  @property()
  titlecard: string = "";

  override render() {
    return html`
      <div
        class="card ${this.rotation ? "rotation" : ""}"
        @click=${() => (this.rotation = !this.rotation)}
      >
        <img class="card__img" src="./assets/vox.png" />
        <div class="card__footer">
          <p class="card__footer-title">${this.titlecard}</p>
          <p class="card__footer-expresion">Expression</p>
        </div>
      </div>
    `;
  }
}
