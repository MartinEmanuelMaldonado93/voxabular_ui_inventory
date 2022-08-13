import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./suscribeCss";

@customElement("suscribe-tab")
export class Suscribe extends LitElement {
  static styles = [style];

  render() {
    return html`
      <div class="suscribe-container">
        <h1>Thank you for suscribe!🖤</h1>
        <div class="contact">
          <label class="lbl">Keep updated:</label>
          <input class="input" type="email" placeholder="Your email here :)" />
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
