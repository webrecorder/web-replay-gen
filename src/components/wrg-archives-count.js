import { html, css, LitElement } from 'lit';

customElements.define(
  'wrg-archives-count',
  class extends LitElement {
    static properties = {
      archives: {
        type: Array,
      },
    };

    render() {
      return html` ${this.archives?.length}`;
    }
  }
);
