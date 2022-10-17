import { html, css, LitElement } from 'lit';

customElements.define(
  'wrg-archives-count',
  class extends LitElement {
    static properties = {
      value: {
        type: Number,
      },
    };

    render() {
      return html` ${this.value}`;
    }
  }
);
