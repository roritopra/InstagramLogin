import { addUser } from "../../services/db.js";

export class Register extends HTMLElement{

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

            addUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("register-success",{
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
            const event: CustomEvent = new CustomEvent('go-login', {
                composed: true
            });

            this.dispatchEvent(event);
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section>
        <link rel="stylesheet" href=" ./components/Register/register.css">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png">
            <h2>Regístrate para ver fotos y vídeos de tus amigos.</h2>
            <app-form></app-form>
            <button>¿Ya tienes cuenta? Inicia sesión</button>
        </section>
        `
    }
}

customElements.define("app-register",Register);