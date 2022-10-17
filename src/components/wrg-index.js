import { html, css, LitElement } from 'lit';

/**
 * List archives
 */
customElements.define(
  'wrg-index',
  class extends LitElement {
    static properties = {
      archives: {
        type: Array,
      },
    };

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
    `;

    render() {
      if (!this.archives) {
        return '';
      }

      return html`
        <ul>
          ${this.archives.map(
            (page) => html`
              <li>
                <a href="archive/?source=${encodeURIComponent(page.url)}"
                  >${page.name}</a
                >
              </li>
            `
          )}
        </ul>
      `;
    }
  }
);
