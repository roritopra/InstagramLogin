import "./components/index.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.register;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b;
        this.render();
        const toHome = () => this.changeScreen(Screens.home);
        const toLogin = () => this.changeScreen(Screens.login);
        const toRegister = () => this.changeScreen(Screens.register);
        const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", toHome);
        login === null || login === void 0 ? void 0 : login.addEventListener('go-register', toRegister);
        login === null || login === void 0 ? void 0 : login.addEventListener('go-register', () => {
            var _a;
            const register = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-register");
            register === null || register === void 0 ? void 0 : register.addEventListener("login-success", toHome);
            register === null || register === void 0 ? void 0 : register.addEventListener('go-login', toLogin);
        });
        const register = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("app-register");
        register === null || register === void 0 ? void 0 : register.addEventListener("register-success", toHome);
        register === null || register === void 0 ? void 0 : register.addEventListener('go-login', toLogin);
        register === null || register === void 0 ? void 0 : register.addEventListener('go-login', () => {
            var _a;
            const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-login");
            login === null || login === void 0 ? void 0 : login.addEventListener("login-success", toHome);
            login === null || login === void 0 ? void 0 : login.addEventListener('go-register', toRegister);
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>";
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>";
                break;
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>";
                break;
            default:
                break;
        }
    }
    changeScreen(screen) {
        this.screen = screen;
        this.render();
    }
}
customElements.define("app-container", AppContainer);
