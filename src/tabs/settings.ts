import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators'

@customElement('settings-tab')
export class Settings extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
