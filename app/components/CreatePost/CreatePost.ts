import { addPost } from "../../services/db.js";

export class  CreatePost extends HTMLElement{
    username = "";
    image = "";
    comment = "";

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", async ()=>{
            
            if(this.username && this.image && this.comment) {
                const postData = {
                    username: this.username,
                    image: this.image,
                    comment: this.comment
                }
                try {
                    await addPost(postData);
                    alert("Post creado");

                    const event: CustomEvent = 
                    new CustomEvent("form-fullfiled",{composed: true});

                    this.dispatchEvent(event);
                } catch (error) {
                    console.error(error);
                    alert("Ocurrió un error al crear el post");
                }
            } else {
                alert("Faltan campos");
            }
        });

        const usernameInput = this.shadowRoot?.querySelector('#username');
        const imageInput = this.shadowRoot?.querySelector('#image');
        const commentInput = this.shadowRoot?.querySelector('#comment');
        
        usernameInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.username = value;
        });

        imageInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.image = value;
        });

        commentInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.comment = value;
        });

    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <article>
        <link rel="stylesheet" href=" ./components/Form/style.css">
            <div class="input">
                <label class="input__label">Username</label>
                <input class="input__field" type="text" id="username"/>
            </div>
           
            <div class="input">
                <label class="input__label">Image</label>
                <input class="input__field" type="text" id="image"/>
            </div>

            <div class="input">
                <label class="input__label">Comment</label>
                <input class="input__field" type="text" id="comment"/>
            </div>
                
            
                <button type="submit">Create post</button>
            
        </article>
        `
    }
}

customElements.define("app-create-post", CreatePost);