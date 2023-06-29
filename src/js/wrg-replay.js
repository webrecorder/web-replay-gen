import { html, css, LitElement } from 'lit';
import initConfig from './config.js';

customElements.define(
  'wrg-replay',
  class extends LitElement {
    static properties = {
      replayBase: {
        type: String,
      },
      replayOpts: {
        type: Object,
      },
      _replaySource: {
        state: true,
        type: String,
      },
      _error: {
        state: true,
        type: String,
      },
    };

    static styles = css`
      :host {
        display: inline-block;
        width: 100%;
        height: 100%;
      }

      replay-web-page {
        display: block;
      }
    `;

    async firstUpdated() {
      const config = await initConfig();

      this.replayOpts = config.replay;

      const url = new URL(window.location.href);

      try {
        let replaySource = window.decodeURIComponent(
          url.searchParams.get('source')
        );
        const parentDir = new URL("../", window.location.href).href;
        this._replaySource = new URL(replaySource, parentDir).href;
      } catch (e) {
        console.error(e);

        this._error = 'Invalid WACZ URL';
      }
    }

    render() {
      if (this._error) {
        return html` ${this._error} `;
      }
      if (!this._replaySource) {
        return;
      }

      return html`
        <replay-web-page
          source=${this._replaySource}
          replayBase=${this.replayOpts.replayBase}
          embed=${this.replayOpts.embed}
          deepLink
        ></replay-web-page>
      `;
    }
  }
);
