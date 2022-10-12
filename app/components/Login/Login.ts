import { queryUser } from "../../services/db.js";

export class Login extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form?.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            queryUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("login-success",{
                        composed: true
                    })
                    console.log(this);

                    this.dispatchEvent(event);
                }else{
                    alert("Las credenciales no coinciden");
                }
            })
        })

        const toLoginBtn = this.shadowRoot?.querySelector('button');
        toLoginBtn?.addEventListener('click', () => {
            const event: CustomEvent = new CustomEvent('go-register', {
                composed: true
            });

            this.dispatchEvent(event);
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href=" ./components/Login/login.css">
        <div>
            <img class="side-img" src="../imagesLogin/smarthphone.jpg">
            <section>
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png">    
                <h3>Log in</h3>
                <app-form></app-form>
                <button>¿No tienescuenta? Registratte</button>
            </section>
        </div>
        `
    }
}

customElements.define("app-login",Login);