import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators'

@customElement('vocabulary-tab')
export class Vocabulary extends LitElement {
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
