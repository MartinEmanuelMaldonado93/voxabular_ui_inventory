import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("leads-tab")
export class Leads extends LitElement {
  static styles? = []; 

  render() {
    return html`
      <div>
        <h1>A countryside Drive</h1>
        <p>lorem ipsumaksmdslamdsalkdmsad asdmlamds</p>

        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>

        <section class="media-cards">
          <div class="card-1"></div>
          <div class="card-2"></div>
          <div class="card-3"></div>
        </section>
      </div>
    `;
  }
}
