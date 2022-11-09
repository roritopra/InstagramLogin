import "./components/index.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
    Screens[Screens["createPost"] = 3] = "createPost";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.register;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c, _d;
        this.render();
        const toHome = () => this.changeScreen(Screens.home);
        const toLogin = () => this.changeScreen(Screens.login);
        const toRegister = () => this.changeScreen(Screens.register);
        const toCreatePost = () => {
            console.log("From Index");
            this.changeScreen(Screens.createPost);
        };
        const createPost = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-create-post");
        createPost === null || createPost === void 0 ? void 0 : createPost.addEventListener('form-fulfilled', () => toHome);
        const home = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("app-home");
        home === null || home === void 0 ? void 0 : home.addEventListener("to-create-post", () => toCreatePost);
        const login = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("app-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", toHome);
        login === null || login === void 0 ? void 0 : login.addEventListener('go-register', toRegister);
        login === null || login === void 0 ? void 0 : login.addEventListener('go-register', () => {
            var _a;
            const register = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-register");
            register === null || register === void 0 ? void 0 : register.addEventListener("login-success", toHome);
            register === null || register === void 0 ? void 0 : register.addEventListener('go-login', toLogin);
        });
        const register = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector("app-register");
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
            case Screens.createPost:
                this.shadowRoot.innerHTML = "<app-create-post></app-create-post>";
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
