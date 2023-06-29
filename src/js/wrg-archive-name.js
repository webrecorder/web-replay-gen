import { html, css, LitElement } from 'lit';
import initConfig from './config.js';

customElements.define(
  'wrg-archive-name',
  class extends LitElement {
    static properties = {
      title: {
        type: String
      }  
    };
    
    async firstUpdated() {
      const config = await initConfig();
      this.title = config && config.site && config.site.title;
    }

    render() {
      return html`<b>${this.title}</b>`;
    }
  }
);
