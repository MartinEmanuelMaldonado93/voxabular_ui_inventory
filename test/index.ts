import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import shared from "./shared.scss";
import style from "./index.scss";
import "./global.css";
import "./vox.png";

@customElement("lit-notebook")
export class Index extends LitElement {
  static styles = [shared, style];

  render() {
    return html`
    <div class="indexSass">IM A SASS TEST COMPONENT</div>
      <div class="indexsass">IM A COPYY SASS </div>
      <div class="shared">IM A CSS TEST COMPONENT</div> 
      <img src="./vox.png">
      <h1> asdadpasodksaodaskd </h1>
      <ol>
        <li>hamburger</li>
        <li>fruuit</li>
        <li>vegetables</li>
      </ol>
      `;
  }
}
