export var Attribute2;
(function (Attribute2) {
    Attribute2["addimg"] = "addimg";
    Attribute2["sendmenuimg"] = "sendmenuimg";
    Attribute2["exploreimg"] = "exploreimg";
    Attribute2["homeimg"] = "homeimg";
    Attribute2["likemenuimg"] = "likemenuimg";
    Attribute2["perfilmenuimg"] = "perfilmenuimg";
    Attribute2["instagramimg"] = "instagramimg";
})(Attribute2 || (Attribute2 = {}));
class MyMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            addimg: null,
            sendmenuimg: null,
            exploreimg: null,
            homeimg: null,
            likemenuimg: null,
            perfilmenuimg: null,
            instagramimg: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Menu/menu.css"> 
            <section>
                <header>          
                    <img src=${this.instagramimg} height = "50np"></img>
                    <input type="text" placeholder="Buscar">

                    <div>
                        <img src=${this.homeimg} height = "50np"></img>
                        <img src=${this.sendmenuimg} height = "50np"></img>
                        <img src=${this.addimg} height = "50np"></img>
                        <img src=${this.exploreimg} height = "50np"></img>
                        <img src=${this.likemenuimg} height = "50np"></img>
                        <img src=${this.perfilmenuimg} height = "50np"></img>
                    </div>
                </header>
            </section>
            `;
        }
    }
}
customElements.define("my-menu", MyMenu);
export default MyMenu;
