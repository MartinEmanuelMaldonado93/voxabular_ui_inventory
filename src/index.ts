import { LitElement, html, CSSResultGroup, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "../scss/main.scss";
import "./tabs/model-sheet";
import "./tabs/tabs-group";
import { indexCss } from "./indexCss";

type tabType = "case" | "vocabulary" | "suscribe" | "settings" | "leads";

const tabTemplate = {
  case: html`<case-tab></case-tab>`,
  vocabulary: html`<vocabulary-tab></vocabulary-tab> `,
  suscribe: html`<suscribe-tab></suscribe-tab>`,
  settings: html`<settings-tab></settings-tab> `,
  leads: html`<leads-tab></leads-tab>`,
};

@customElement("lit-notebook")
export class LitNotebook extends LitElement {
  static styles?: CSSResultGroup | undefined = [indexCss];

  @state()
  tabState: tabType = "case";

  setTabState(tab: tabType) {
    this.tabState = tab;
  }

  override render() {
    return html`
      <div class="container">
        <div class="button-tabs">
          <button
            class=${this.tabState === "suscribe" ? "active-tabs" : "tabs"}
            @click=${() => this.setTabState("suscribe")}
          >
            Suscribe
          </button>
          <button
            class=${this.tabState === "case" ? "active-tabs" : "tabs"}
            @click=${() => this.setTabState("case")} >
            Case
          </button>
          <!-- <button
                        class=${this.tabState === "leads"
            ? " active-tabs"
            : "tabs"}
                        @click=${() => this.setTabState("leads")}
                    >
                        Leads
                    </button> -->
          <button
            class=${this.tabState === "vocabulary"
              ? "active-tabs"
              : "tabs"}
            @click=${() => this.setTabState("vocabulary")}
          >
            Vocabulary
          </button>
          <button
            class=${this.tabState === "settings" ? "active-tabs" : "tabs"}
            @click=${() => this.setTabState("settings")}
          >
            Settings
          </button>
        </div>
        
        <div class="content-tabs">
            <model-sheet> 
                ${tabTemplate[this.tabState]} 
            </model-sheet>
        </div>

      </div>
    `;
  }
}
