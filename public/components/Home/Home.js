import "../index.js";
import data from "../../dataPost.js";
import data2 from "../../dataMenu.js";
import data3 from "../../dataHistory.js";
import data4 from "../../dataSuggestions.js";
import { Attribute } from "../PostInsta/PostInsta.js";
import { Attribute2 } from "../Menu/Menu.js";
import { Attribute3 } from "../Hystory/History.js";
import { Attribute4 } from "../Suggestions/Suggestions.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.post = [];
        this.menuUser = [];
        this.historyUser = [];
        this.suggestionsUser = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const postCard = this.ownerDocument.createElement("my-post");
            postCard.setAttribute(Attribute.nameprofile, user.nameprofile);
            postCard.setAttribute(Attribute.likeimg, user.likeimg);
            postCard.setAttribute(Attribute.profileimg, user.profileimg);
            postCard.setAttribute(Attribute.kimimg, user.kimimg);
            postCard.setAttribute(Attribute.commentimg, user.commentimg);
            postCard.setAttribute(Attribute.sendimg, user.sendimg);
            postCard.setAttribute(Attribute.saveimg, user.saveimg);
            postCard.setAttribute(Attribute.comments, "" + user.comments);
            postCard.setAttribute(Attribute.viewers, "" + user.viewers);
            postCard.setAttribute(Attribute.comment, user.comment);
            this.post.push(postCard);
        });
        data2.forEach((menuUser) => {
            const menuCard = this.ownerDocument.createElement("my-menu");
            menuCard.setAttribute(Attribute2.addimg, menuUser.addimg);
            menuCard.setAttribute(Attribute2.sendmenuimg, menuUser.sendmenuimg);
            menuCard.setAttribute(Attribute2.exploreimg, menuUser.exploreimg);
            menuCard.setAttribute(Attribute2.homeimg, menuUser.homeimg);
            menuCard.setAttribute(Attribute2.likemenuimg, menuUser.likemenuimg);
            menuCard.setAttribute(Attribute2.perfilmenuimg, menuUser.perfilmenuimg);
            menuCard.setAttribute(Attribute2.instagramimg, menuUser.instagramimg);
            this.menuUser.push(menuCard);
        });
        data3.forEach((historyUser) => {
            const historyCard = this.ownerDocument.createElement("my-history");
            historyCard.setAttribute(Attribute3.userhistory, historyUser.userhistory);
            historyCard.setAttribute(Attribute3.imagehistory, historyUser.imagehistory);
            this.historyUser.push(historyCard);
        });
        data4.forEach((suggestionsUser) => {
            const suggestedCard = this.ownerDocument.createElement("content-suggested");
            suggestedCard.setAttribute(Attribute4.nameprofile, suggestionsUser.nameprofile);
            suggestedCard.setAttribute(Attribute4.image, suggestionsUser.image);
            suggestedCard.setAttribute(Attribute4.followers, suggestionsUser.followers);
            this.suggestionsUser.push(suggestedCard);
        });
    }
    connectedCallback() {
        var _a;
        this.render();
        const toCreatePost = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('my-menu');
        toCreatePost === null || toCreatePost === void 0 ? void 0 : toCreatePost.addEventListener('to-create-post', () => {
            const event = new CustomEvent("to-create-post", { composed: true });
            this.dispatchEvent(event);
        });
    }
    render() {
        var _a, _b;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/home.css"> `;
            const contentContainer = document.createElement("div");
            contentContainer.classList.add("content");
            const postContainer = document.createElement("div");
            const historyContainer = document.createElement("div");
            const suggested = document.createElement("div");
            historyContainer.classList.add("content-history");
            this.menuUser.forEach((menuUser) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(menuUser);
            });
            this.historyUser.forEach((historyUser) => {
                historyContainer === null || historyContainer === void 0 ? void 0 : historyContainer.appendChild(historyUser);
            });
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(historyContainer);
            this.post.forEach((post) => {
                postContainer.appendChild(post);
            });
            this.suggestionsUser.forEach((suggestion) => {
                suggested.appendChild(suggestion);
            });
            contentContainer.appendChild(postContainer);
            contentContainer.appendChild(suggested);
            (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(contentContainer);
        }
    }
}
customElements.define("app-home", Home);
