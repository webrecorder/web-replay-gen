import { html, css, LitElement } from 'lit';

customElements.define(
  'wrg-header',
  class extends LitElement {
    static properties = {
      url: {
        type: String,
      },
      title: {
        type: String,
      },
      logoSrc: {
        type: String,
      },
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

    render() {
      return html`
        <header>
          <a class="home-link" href="${this.url}">
            ${this.logoSrc
              ? html`
                  <div class="logo-wrapper">
                    <img
                      class="logo"
                      src="${this.logoSrc}"
                      alt="${this.title} logo"
                      loading="lazy"
                    />
                  </div>
                `
              : ''}
            <div class="title">${this.title}</div>
          </a>
        </header>
      `;
    }
  }
);
