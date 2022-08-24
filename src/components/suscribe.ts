import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import style from "../styles/tabs_scss/suscribe.scss";

@customElement("suscribe-tab")
export class Suscribe extends LitElement {
  static styles = [style];

  render() {
    return html`
      <div class="suscribe">
        <div class="suscribe__title">Thank you for suscribe!🖤</div>
        <div class="suscribe__contact">
          <div class="suscribe__contact-lbl">Keep updated:</div>
          <input class="suscribe__input" type="email" placeholder="Your email here :)" />
        </div>

        <div class="suscribe__anchors">
          <div>To make sure you get our messages</div>
          <a>Please add us to your address book</a>
          <a>Manage my subscription 📩</a>
        </div>
      </div>
    `;
  }
}
