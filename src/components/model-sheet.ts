import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "../styles/tabs_scss/model-sheet.scss";
import "../assets/img/beige-paper.png";

@customElement("model-sheet")
export class ModelSheet extends LitElement {
  static override styles = [style];

  @property({ type: String })
  nameid?: string;

  override render() {
    return html`<slot></slot>`;
  }
}
