import { LitElement, html  } from "lit";
import { customElement, property  } from "lit/decorators.js";
import hints from "../../styles/assets/img/hints.png";
import style from "../../styles/tabs_css/settings.css";

@customElement("settings-tab")
export class Settings extends LitElement {
  static styles = [style];

  @property()
  userid: number = +new Date();

  render() {
    return html`
      <div class="settings-container">
        <h2>Change language</h2>
        <div class="buttons-container">
          <button>Hablo español y quiero hablar inglés</button>
          <button>I speak English and want to learn Spanish</button>
          <button>Sólo quiero jugar en Español</button>
          <button>I just want to play in English</button>
        </div>
        <img class="hints" src=${hints} />
        <div class="volume">
          <div>Music Volume</div>
          <input class="range" id="range" type="range" min="1" max="100" />
        </div>
        <div class="user-id">User:${this.userid}</div>
        <div class="erase-footer">
          <button class="erase">Erase and Restart</button>
        </div>
      </div>
    `;
  }
}
