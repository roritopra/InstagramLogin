import "../index.js";
import data from "../../dataPost.js";
import data2 from "../../dataMenu.js";
import data3 from "../../dataHistory.js";
import data4 from "../../dataSuggestions.js";
import MyPost, {Attribute} from "../PostInsta/PostInsta.js";
import MyMenu, {Attribute2} from "../Menu/Menu.js";
import MyHistory, {Attribute3} from "../Hystory/History.js";
import MySuggestion, {Attribute4} from "../Suggestions/Suggestions.js";
import { getPosts } from "../../services/db.js";
export class Home extends HTMLElement{
    post: MyPost[] = [];
    menuUser: MyMenu[] = [];
    historyUser: MyHistory[] = [];
    suggestionsUser: MySuggestion[] = [];
    #onPostCreation: EventListener = () => {};
    

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        data2.forEach((menuUser)=>{
            const menuCard = this.ownerDocument.createElement("my-menu") as MyMenu;
            menuCard.setAttribute(Attribute2.addimg, menuUser.addimg);
            menuCard.setAttribute(Attribute2.sendmenuimg, menuUser.sendmenuimg);
            menuCard.setAttribute(Attribute2.exploreimg, menuUser.exploreimg);
            menuCard.setAttribute(Attribute2.homeimg, menuUser.homeimg);
            menuCard.setAttribute(Attribute2.likemenuimg, menuUser.likemenuimg);
            menuCard.setAttribute(Attribute2.perfilmenuimg, menuUser.perfilmenuimg);
            menuCard.setAttribute(Attribute2.instagramimg, menuUser.instagramimg);
            
            this.menuUser.push(menuCard);
        });

        data3.forEach((historyUser)=>{
            const historyCard = this.ownerDocument.createElement("my-history") as MyHistory;
            historyCard.setAttribute(Attribute3.userhistory, historyUser.userhistory);
            historyCard.setAttribute(Attribute3.imagehistory, historyUser.imagehistory);
          
            this.historyUser.push(historyCard);
        
        });    

        data4.forEach((suggestionsUser)=>{
            const suggestedCard = this.ownerDocument.createElement("content-suggested") as MySuggestion;
            suggestedCard.setAttribute(Attribute4.nameprofile, suggestionsUser.nameprofile);
            suggestedCard.setAttribute(Attribute4.image, suggestionsUser.image);
            suggestedCard.setAttribute(Attribute4.followers, suggestionsUser.followers);


            this.suggestionsUser.push(suggestedCard);

        });   
    }

    async connectedCallback(){
        const posts = await getPosts();

        posts?.forEach(({
            username: nameprofile,
            image: postimg,
            profileimg,
            comment,
            comments,
            viewers
        }) => {
            console.log({
                username: nameprofile,
                image: postimg,
                profileimg,
                comment,
                comments,
                viewers
            });
            
            const postCard = this.ownerDocument.createElement("my-post") as MyPost;
            postCard.setAttribute(Attribute.nameprofile, nameprofile);
            postCard.setAttribute(Attribute.profileimg, profileimg);
            postCard.setAttribute(Attribute.postimg, postimg);
            postCard.setAttribute(Attribute.comments, "" + comments);
            postCard.setAttribute(Attribute.viewers, "" + viewers);
            postCard.setAttribute(Attribute.comment, comment);

            this.post.push(postCard);
        });

        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/home.css"> `;

            const contentContainer = document.createElement("div");
            contentContainer.classList.add("content");
            const postContainer = document.createElement("div");
            const historyContainer = document.createElement("div");
            const suggested = document.createElement("div");
            historyContainer.classList.add("content-history");

            this.menuUser.forEach((menuUser)=>{
                this.shadowRoot?.appendChild(menuUser);    
            });

            this.historyUser.forEach((historyUser)=>{
                historyContainer?.appendChild(historyUser);    
            });

            this.shadowRoot?.appendChild(historyContainer);
            
            this.post.forEach((post)=>{
                postContainer.appendChild(post);
            });

            this.suggestionsUser.forEach((suggestion)=>{
                suggested.appendChild(suggestion);
            });

            
            contentContainer.appendChild(postContainer);
            contentContainer.appendChild(suggested);
            this.shadowRoot?.appendChild(contentContainer);
        }
    }

    onPostCreation(val: EventListener) {
        this.#onPostCreation = val;
        const toCreatePost = this.shadowRoot?.querySelector('my-menu');
        
        toCreatePost?.addEventListener('to-create-post', this.#onPostCreation);
    }
}

customElements.define("app-home",Home);