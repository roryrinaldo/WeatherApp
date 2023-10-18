class FooterElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
          &copy; 2023 Weather App by Rory Rinaldo
        </footer>
      `;
  }
}

customElements.define('footer-element', FooterElement);
