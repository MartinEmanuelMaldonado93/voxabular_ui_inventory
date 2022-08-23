import { LitElement, html, CSSResultGroup } from "lit";
import { customElement, state } from "lit/decorators.js";
/* Styles */
import "./styles/global.css";
import style from "./styles/tabs_css/index.scss";
/* Components */
import "./tabs_components/_tabs-group";

// You can order the tabs from here
const tabTemplates = {
  case: html`<case-tab></case-tab>`,
  vocabulary: html`<vocabulary-tab></vocabulary-tab> `,
  settings: html`<settings-tab></settings-tab> `,
  // leads: html`<leads-tab></leads-tab>`,
  suscribe: html`<suscribe-tab></suscribe-tab>`,
};
const nameTabs = Object.keys(
  tabTemplates
) as tabType[]; // Cast to Array of tab names

type tabType = "case" | "vocabulary" | "suscribe" | "settings";

@customElement("lit-notebook")
export class LitNotebook extends LitElement {
  static override styles: CSSResultGroup | undefined = [style];

  @state()
  tabSelected: tabType = "settings";

  setTabState(tab: tabType) {
    this.tabSelected = tab;
  }

  override render() {
    const toTemplateBtns = (t: tabType) =>
      html`<button
        class=${this.tabSelected === t ? "active-tabs" : "tabs"}
        @click=${() => this.setTabState(t)}
      >
        ${t}
      </button>`;

    return html`
      <div class="container">
        <div class="button-tabs">${nameTabs.map(toTemplateBtns)}</div>
        <model-sheet> ${tabTemplates[this.tabSelected]} </model-sheet>
      </div>
    `;
  }
}
