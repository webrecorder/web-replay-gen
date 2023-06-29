import { html, css, LitElement } from 'lit';
import Fuse from 'fuse.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/menu-label/menu-label.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import initConfig from './config.js';

function getPathname(url) {
  return `../archive/?source=${encodeURIComponent(url)}`;
}

customElements.define(
  'wrg-search',
  class extends LitElement {
    static properties = {
      _isMenuVisible: {
        state: true,
        type: Boolean,
      },
      _search: {
        state: true,
        type: String,
      },
      _selectedArchive: {
        state: true,
        type: Object,
      },
      _fuse: {
        state: true,
        type: Object,
      },
      _archives: {
        state: true,
        type: Object,
      }
     };

    static styles = css`
      sl-menu,
      sl-card {
        width: 100%;
        margin-top: 8px;
      }

      .menu-wrapper {
        position: relative;
      }

      sl-input {
        box-shadow: var(--sl-shadow-medium);
      }

      sl-menu {
        position: absolute;
        box-shadow: var(--sl-shadow-large);
      }

      a {
        color: var(--sl-color-blue-600);
        font-weight: var(--sl-font-weight-semibold);
        text-decoration: none;
        padding: var(--sl-input-spacing-small);
      }

      a:hover,
      a:active {
        text-decoration: underline;
      }

      .card-heading {
        margin-top: 0;
        margin-bottom: 4px;
        font-size: var(--sl-font-size-large);
        font-weight: var(--sl-font-weight-semibold);
      }

      .url {
        font-size: var(--sl-font-size-small);
        color: var(--sl-color-neutral-400);
        margin-bottom: var(--sl-spacing-small);
      }

      .description {
        color: var(--sl-color-neutral-600);
        margin-bottom: var(--sl-spacing-small);
      }

      footer {
        text-align: right;
      }
    `;

    async firstUpdated() {
      const config = await initConfig();
      this._archives = config.archives;
      this._fuse = new Fuse(this._archives, {
        keys: ['name'],
        shouldSort: false,
        threshold: 0.4, // stricter; default is 0.6
      });
    }

    render() {
      return html`
        <sl-input
          value=${this._search || ''}
          placeholder="Search web archive collections by name..."
          size="large"
          clearable
          type="search"
          role="searchbox"
          aria-description="search results will appear below"
          @sl-input=${(e) => {
            const { value } = e.target;
            if (!value || value.length > 1) {
              this._search = value;
              this._isMenuVisible = true;
            }
          }}
        ></sl-input>

        ${this.renderMenu()} ${this.renderSelection()}
      `;
    }

    renderMenu() {
      if (!this._isMenuVisible || !this._search) return;

      const data = this._fuse.search(this._search).map(({ item }) => item);

      return html`
        <div class="menu-wrapper">
          <sl-menu
            @sl-select=${(e) => {
              const { item } = e.detail;
              this._search = item.innerText;
              this._selectedArchive = this._archives.find(
                ({ url }) => url === item.value
              );
              this._isMenuVisible = false;
            }}
          >
            ${data.length
              ? html`
                  <sl-menu-label
                    >${data.length}
                    match${data.length === 1 ? '' : 'es'}</sl-menu-label
                  >

                  ${data.map(
                    (page) =>
                      html`
                        <sl-menu-item value=${page.url}
                          >${page.name}</sl-menu-item
                        >
                      `
                  )}
                `
              : html`<sl-menu-label
                  >No matching archives found.</sl-menu-label
                >`}
          </sl-menu>
        </div>
      `;
    }

    renderSelection() {
      if (!this._selectedArchive) return;

      return html`
        <sl-card>
          <h3 class="card-heading">${this._selectedArchive.name}</h3>
          <div class="url">${this._selectedArchive.url}</div>
          ${this._selectedArchive.description
            ? html`<div class="description">
                ${this._selectedArchive.description}
              </div>`
            : ''}
          <footer>
            <a href=${getPathname(this._selectedArchive.url)}>View Archive</a>
          </footer>
        </sl-card>
      `;
    }
  }
);
