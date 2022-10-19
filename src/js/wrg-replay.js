import { html, css, LitElement } from 'lit';
import config from './config.js';

const replayOpts = config.replay;

customElements.define(
  'wrg-replay',
  class extends LitElement {
    static properties = {
      replayBase: {
        type: String,
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

    firstUpdated() {
      const url = new URL(window.location.href);

      try {
        let replaySource = window.decodeURIComponent(
          url.searchParams.get('source')
        );
        if (replaySource.indexOf('://') === -1) {
          replaySource = `${window.location.protocol}//${window.location.host}/${replaySource}`;
        }
        new URL(replaySource);

        this._replaySource = replaySource;
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
          replayBase=${replayOpts.replayBase}
          embed=${replayOpts.embed}
          deepLink
        ></replay-web-page>
      `;
    }
  }
);
