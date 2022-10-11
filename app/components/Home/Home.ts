export class Home extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <article>
            <h3>Este es el home</h3>
            <button>Botón que hace algo</button>
        </article>
        `
    }
}

customElements.define("app-home",Home);