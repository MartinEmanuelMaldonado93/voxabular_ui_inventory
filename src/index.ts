import { LitElement, html, CSSResultGroup, css, unsafeCSS } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import "../scss/main.scss"; /* Global styles */
import { style } from "./indexCss";
import "./tabs/model-sheet";
import "./tabs/tabs-group";

/* You can order the tabs from here */
const tabTemplates = {
  case: html`<case-tab></case-tab>`,
  vocabulary: html`<vocabulary-tab></vocabulary-tab> `,
  settings: html`<settings-tab></settings-tab> `,
  leads: html`<leads-tab></leads-tab>`,
  suscribe: html`<suscribe-tab></suscribe-tab>`,
};
/* Array of tab names */
const nameTabs = Object.keys(tabTemplates) as tabType[];
type tabType = "case" | "vocabulary" | "suscribe" | "settings" | "leads";

@customElement("lit-notebook")
export class LitNotebook extends LitElement {
  static override styles: CSSResultGroup | undefined = [style];

  @state()
  tabSelected: tabType = "vocabulary";

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
