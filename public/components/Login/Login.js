import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form === null || form === void 0 ? void 0 : form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    console.log(this);
                    this.dispatchEvent(event);
                }
                else {
                    alert("Las credenciales no coinciden");
                }
            });
        });
        const toLoginBtn = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('button');
        toLoginBtn === null || toLoginBtn === void 0 ? void 0 : toLoginBtn.addEventListener('click', () => {
            const event = new CustomEvent('go-register', {
                composed: true
            });
            this.dispatchEvent(event);
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href=" ./components/Login/login.css">
        <div>
            <img class="side-img" src="../imagesLogin/smarthphone.jpg">
            <img class="bottom-img" src="../imagesLogin/final.jpg">
            <section>
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png">    
                <app-form></app-form>

          <img class="facebook-img" src="../imagesLogin/forgotPassword.jpg">
                
            <button type="account">Do not have an account? Sign up.</button>
    
            </section>
        </div>
        `;
    }
}
customElements.define("app-login", Login);
