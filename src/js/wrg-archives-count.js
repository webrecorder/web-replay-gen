import { html, css, LitElement } from 'lit';
import config from '../wrg-config.json';

customElements.define(
  'wrg-archives-count',
  class extends LitElement {
    static properties = {
      archives: {
        type: Array,
      },
    };

    _archives = config.archives;

    render() {
      return html` ${this._archives?.length}`;
    }
  }
);
