class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            width: 100%;
            background-image: linear-gradient(to bottom, #4f90e5, #90ccf4);
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }
          h2 {
            text-align:center;
            padding: 16px;
          }
        </style>
        
        <h2>Weather App</h2>
      `;
  }
}

customElements.define('app-bar', AppBar);
