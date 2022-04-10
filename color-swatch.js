
class ColorSwatch extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    const style = document.createElement('style');

    style.textContent = `
      .container {
        margin: 0.5rem;
        border: 1px solid rgb(205, 205, 205);
      }

      .block {
        width: 100px;
        height: 100px;
      }

      .shirt {
        background: ${this.getAttribute('shirt-color')};
      }

      .pants {
        background: ${this.getAttribute('pant-color')};
      }

      .shoes {
        background: ${this.getAttribute('shoe-color')};
        height: 50px;
      }
    `;

    shadow.appendChild(style);
    

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'swatch');
    
    const shirt = document.createElement('div');
    shirt.setAttribute('class', 'block shirt');
    wrapper.appendChild(shirt);
    
    const pants = document.createElement('div');
    pants.setAttribute('class', 'block pants');
    wrapper.appendChild(pants);

    const shoes = document.createElement('div');
    shoes.setAttribute('class', 'block shoes');
    wrapper.appendChild(shoes);
    
    shadow.appendChild(wrapper);
  }
}

// Define the new element
customElements.define('color-swatch', ColorSwatch);