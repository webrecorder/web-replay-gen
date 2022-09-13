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
      replayBase: {
        type: String,
      },
      _replaySource: {
        state: true,
        type: String,
      },
      _replayParams: {
        state: true,
        type: Object,
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
        let replaySource = window.decodeURIComponent(url.hash.slice(2));
        if (replaySource.indexOf('://') === -1) {
          replaySource = `${window.location.protocol}//${window.location.host}/${replaySource}`;
        }
        new URL(replaySource);

        this._replaySource = replaySource;

        this._replayParams = {
          url: url.searchParams.get('url')
            ? decodeURIComponent(url.searchParams.get('url'))
            : '',
          ts: url.searchParams.get('ts') || '',
          query: url.searchParams.get('query') || '',
          view: url.searchParams.get('view') || '',
        };
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

      console.log(this.embed);

      return html`
        <replay-web-page
          source=${this._replaySource}
          replayBase=${this.replayBase}
          embed=${this.embed}
          url=${this._replayParams?.url || ''}
          ts=${this._replayParams?.ts || ''}
          query=${this._replayParams?.query || ''}
          view=${this._replayParams?.view || ''}
        ></replay-web-page>
      `;
    }
  }
);
