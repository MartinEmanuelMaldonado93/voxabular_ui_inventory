import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "../styles/tabs_scss/settings.scss";
import "../assets/img/hints.png";

@customElement("settings-tab")
export class Settings extends LitElement {
  static styles = [style];

  @property()
  userid: number = +new Date();

  render() {
    return html`
      <div class="settings-container"> 
        <div class="settings__title">Change language</div>
        <div class="settings__buttons-container">
          <button>Hablo español y quiero hablar inglés</button>
          <button>I speak English and want to learn Spanish</button>
          <button>Sólo quiero jugar en Español</button>
          <button>I just want to play in English</button>
        </div>
       
        <span class="settings__hints">
          <img class="settings__hints-img" src="./assets/hints.png" />
        </span>
        <div class="settings__volume">
          <div>Music Volume</div>
          <input class="range" id="range" type="range" min="1" max="100" />
        </div>
        <div class="erase-footer">
          <button>Erase and Restart</button>
        </div>
        <span class="settings__user">User:${this.userid}</span>
      </div>
    `;
  }
}
