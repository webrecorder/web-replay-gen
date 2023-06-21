import { html, css, LitElement } from 'lit';
import initConfig from './config.js';

customElements.define(
  'wrg-header',
  class extends LitElement {
    static properties = {
      homeUrl: {
        type: String
      },
      _title: {
        type: String
      },
      _logoSrc: {
        type: String
      }  
    };

    static styles = css`
      header {
        padding: var(--sl-spacing-x-small);
      }

      .home-link {
        display: inline-flex;
        align-items: center;
        color: var(--sl-color-neutral-700);
        text-decoration: none;
      }

      .logo-wrapper {
        height: 2.25rem;
        width: 2.25rem;
        margin-right: var(--sl-spacing-x-small);
      }

      .logo {
        height: 100%;
        width: 100%;
      }

      .title {
        font-weight: 600;
      }
    `;

    async firstUpdated() {
      const config = await initConfig(this.homeUrl);
      this._title = config.site.title;
      this._logoSrc = config.site.logoSrc;
    }

    render() {
      return html`
        <header>
          <a class="home-link" href="${this.homeUrl}">
            ${this._logoSrc
              ? html`
                  <div class="logo-wrapper">
                    <img
                      class="logo"
                      src="${this._logoSrc}"
                      alt="${this._title} logo"
                      loading="lazy"
                    />
                  </div>
                `
              : ''}
            <div class="title">${this._title}</div>
          </a>
        </header>
      `;
    }
  }
);
