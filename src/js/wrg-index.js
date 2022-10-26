import { html, css, LitElement } from 'lit';
import config from './config.js';

/**
 * List archives
 */
customElements.define(
  'wrg-index',
  class extends LitElement {
    static styles = css`
      ul {
        border: var(--sl-panel-border-width) solid var(--sl-panel-border-color);
        border-radius: var(--sl-border-radius-medium);
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li:not(:first-child) {
        border-top: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
      }

      a {
        display: block;
        padding: var(--sl-spacing-small);
        line-height: 1;
        color: var(--sl-color-neutral-700);
        text-decoration: none;
      }

      a:hover {
        background-color: var(--sl-color-neutral-50);
      }

      .archive {
        display: flex;
        align-items: center;
        justify-content: space-between;
        white-space: nowrap;
      }

      .name {
        flex: 1;
      }

      .description {
        font-size: var(--sl-font-size-x-small);
        color: var(--sl-color-neutral-500);
        text-overflow: ellipsis;
        overflow: hidden;
        width: 20rem;
        max-width: 50%;
        text-align: right;
      }
    `;

    _archives = config.archives;

    render() {
      if (!this._archives) {
        return '';
      }

      return html`
        <ul>
          ${this._archives.map(
            (page) => html`
              <li>
                <a
                  href="../archive/?source=${encodeURIComponent(page.url)}"
                  title=${page.description}
                >
                  <div class="archive">
                    <div class="name">${page.name}</div>
                    <div class="description">${page.description}</div>
                  </div>
                </a>
              </li>
            `
          )}
        </ul>
      `;
    }
  }
);
