import {
  html,
  css,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

customElements.define(
  'wrg-replay',
  class extends LitElement {
    static properties = {
      // https://replayweb.page/docs/embedding#embedding-options
      embed: {
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
      if (!this._replaySource) {
        return;
      }

      return html`
        <replay-web-page
          source=${this._replaySource}
          replayBase="../replay/"
          embed=${this.embed}
        ></replay-web-page>
      `;
    }
  }
);
