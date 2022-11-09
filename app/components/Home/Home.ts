import "../index.js";
import data from "../../dataPost.js";
import data2 from "../../dataMenu.js";
import data3 from "../../dataHistory.js";
import data4 from "../../dataSuggestions.js";
import MyPost, {Attribute} from "../PostInsta/PostInsta.js";
import MyMenu, {Attribute2} from "../Menu/Menu.js";
import MyHistory, {Attribute3} from "../Hystory/History.js";
import MySuggestion, {Attribute4} from "../Suggestions/Suggestions.js";
export class Home extends HTMLElement{
    post: MyPost[] = [];
    menuUser: MyMenu[] = [];
    historyUser: MyHistory[] = [];
    suggestionsUser: MySuggestion[] = [];
    

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        
        data.forEach((user)=>{
            
            const postCard = this.ownerDocument.createElement("my-post") as MyPost;
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

    connectedCallback(){
        this.render();

        const toCreatePost = this.shadowRoot?.querySelector('my-menu');
        toCreatePost?.addEventListener('to-create-post', () => {
            const event: CustomEvent = 
                new CustomEvent("to-create-post",{composed: true});
                
            this.dispatchEvent(event);
        });
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
}

customElements.define("app-home",Home);