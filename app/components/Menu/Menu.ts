export enum Attribute2 {
    "addimg" = "addimg",
    "sendmenuimg" = "sendmenuimg",
    "exploreimg" = "exploreimg",
    "homeimg" = "homeimg",
    "likemenuimg" = "likemenuimg",
    "perfilmenuimg" = "perfilmenuimg",
    "instagramimg" = "instagramimg"
   
}

class MyMenu extends HTMLElement{
    addimg?: string;
    sendmenuimg?: string;
    exploreimg?: string;
    homeimg?: string;
    likemenuimg?: string;
    perfilmenuimg?: string;
    instagramimg?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute2,null> = {
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

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const createPostButton = this.shadowRoot?.querySelector("#create-post");
        createPostButton?.addEventListener('click', () => {
            console.log('From Menu');
            
            const event: CustomEvent = 
                new CustomEvent("to-create-post",{composed: true});

            this.dispatchEvent(event);
        });
    }

    attributeChangedCallback(
        propName: Attribute2, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
           
            this[propName] = newValue;
            this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Menu/menu.css"> 
            <section>
                <header>          
                    <img src=${this.instagramimg} height = "50np"></img>
                    <input type="text" placeholder="Search">

                    <div>
                        <img src=${this.homeimg} height = "50np"></img>
                        <img src=${this.sendmenuimg} height = "50np"></img>
                        <img id="create-post" src=${this.addimg} height = "50np"></img>
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