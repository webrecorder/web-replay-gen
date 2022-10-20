import { html, css, LitElement } from 'lit';
import config from './config.js';

customElements.define(
  'wrg-archives-count',
  class extends LitElement {
    render() {
      return html` ${config.archives.length}`;
    }
  }
);
