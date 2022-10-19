import { html, css, LitElement } from 'lit';

/** Wrapper to provide archive data to child components */
customElements.define(
  'wrg-with-archives',
  class extends LitElement {
    static properties = {
      archives: {
        type: Array,
      },
    };

    willUpdate(changedProperties) {
      if (changedProperties.has('archives')) {
        Array.from(this.children).forEach((child) => {
          child.archives = this.archives;
        });
      }
    }

    render() {
      return html` child: <slot></slot> `;
    }
  }
);
