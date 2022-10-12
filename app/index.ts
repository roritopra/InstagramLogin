import "./components/index.js";
enum Screens {
    login,
    register,
    home
}

class AppContainer extends HTMLElement{
    screen: Screens = Screens.register;

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const toHome = () => this.changeScreen(Screens.home);
        const toLogin = () => this.changeScreen(Screens.login);
        const toRegister = () => this.changeScreen(Screens.register);

        const login = this.shadowRoot?.querySelector("app-login");
        login?.addEventListener("login-success", toHome);
        login?.addEventListener('go-register', toRegister);
        login?.addEventListener('go-register', () => {
            const register = this.shadowRoot?.querySelector("app-register");
            register?.addEventListener("login-success", toHome);
            register?.addEventListener('go-login', toLogin);
        })

        
        const register = this.shadowRoot?.querySelector("app-register");
        register?.addEventListener("register-success", toHome);
        register?.addEventListener('go-login', toLogin);
        register?.addEventListener('go-login', () => {
            const login = this.shadowRoot?.querySelector("app-login");
            login?.addEventListener("login-success", toHome);
            login?.addEventListener('go-register', toRegister);
        })
    }

    render(){
        if(!this.shadowRoot) return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>"
                break;
        
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>"
            break;
            
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>"
            break;

            default:
                break;
        }
    }

    changeScreen(screen: Screens) {
        this.screen = screen;
        this.render();
    }
}

customElements.define("app-container",AppContainer);