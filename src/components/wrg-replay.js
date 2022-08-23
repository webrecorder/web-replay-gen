import {
  html,
  css,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

customElements.define(
  'wrg-replay',
  class extends LitElement {
    static properties = {
      _replaySource: {
        state: true,
        type: String,
      },
      _error: {
        state: true,
        type: String,
      },
    };

    firstUpdated() {
      const url = new URL(window.location.href);

      try {
        const replaySource = decodeURIComponent(url.hash.slice(2));
        new URL(replaySource);

        this._replaySource = window.decodeURIComponent(replaySource);
      } catch (e) {
        console.error(e);

        this._error = 'Invalid WACZ URL';
      }
    }

    render() {
      if (this._error) {
        return html` ${this._error} `;
      }

      return html`
        <h1>${this._replaySource}</h1>
        ${this.renderReplayWebPage()}
      `;
    }

    renderReplayWebPage() {
      if (!this._replaySource) {
        return;
      }

      return html`
        <replay-web-page
          source=${this._replaySource}
          replayBase="/replay/"
        ></replay-web-page>
      `;
    }
  }
);
