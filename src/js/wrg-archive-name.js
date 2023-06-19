import { html, css, LitElement } from 'lit';
import config from './config.js';

customElements.define(
  'wrg-archive-name',
  class extends LitElement {
    render() {
      const title = config && config.site && config.site.title;
      return html`<b>${title}</b>`;
    }
  }
);
