import {
  html,
  css,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.81/dist/components/card/card.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.81/dist/components/input/input.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.81/dist/components/menu/menu.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.81/dist/components/menu-item/menu-item.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.81/dist/components/menu-label/menu-label.js';
import { archivePages } from '../archivePages.js';

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

      .card-heading {
        margin-top: 0;
        margin-bottom: 4px;
        font-size: var(--sl-font-size-large);
        font-weight: var(--sl-font-weight-semibold);
      }
    `;

    // For fuzzy search
    _fuse = new Fuse(archivePages, {
      keys: ['name'],
      shouldSort: false,
      threshold: 0.4, // stricter; default is 0.6
    });

    render() {
      return html`
        <sl-input
          value=${this._search || ''}
          placeholder="Search web archives by name..."
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
              this._selectedArchive = archivePages.find(
                ({ pathname }) => pathname === item.value
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
                        <sl-menu-item value=${page.pathname}
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
          <div>${this._selectedArchive.waczURL}</div>
          <div><a href=${this._selectedArchive.pathname}>View archive</a></div>
        </sl-card>
      `;
    }
  }
);
