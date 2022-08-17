import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "../../styles/tabs_css/model-sheet.css";

@customElement("model-sheet")
export class ModelSheet extends LitElement {
  static override styles = [style];

  @property({ type: String })
  nameid?: string;

  override render() {
    return html`<slot></slot>`;
  }
}
