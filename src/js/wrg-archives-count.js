import { html, css, LitElement } from 'lit';
import initConfig from './config.js';

customElements.define(
  'wrg-archives-count',
  class extends LitElement {
    static properties = {
      archives: {
        type: Object
      }  
    };

    async firstUpdated() {
      const config = await initConfig();
      this.archives = config.archives;
    }

    render() {
      if (!this.archives) {
        return;
      }

      return html` ${this.archives.length}`;
    }
  }
);
