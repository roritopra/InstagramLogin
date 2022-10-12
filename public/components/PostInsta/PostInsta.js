export var Attribute;
(function (Attribute) {
    Attribute["nameprofile"] = "nameprofile";
    Attribute["likeimg"] = "likeimg";
    Attribute["profileimg"] = "profileimg";
    Attribute["kimimg"] = "kimimg";
    Attribute["commentimg"] = "commentimg";
    Attribute["sendimg"] = "sendimg";
    Attribute["saveimg"] = "saveimg";
    Attribute["comments"] = "comments";
    Attribute["viewers"] = "viewers";
})(Attribute || (Attribute = {}));
class MyPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            nameprofile: null,
            likeimg: null,
            profileimg: null,
            kimimg: null,
            commentimg: null,
            sendimg: null,
            saveimg: null,
            comments: null,
            viewers: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/PostInsta/post.css">
            <section>
                <div class="post-header">
                    <img src=${this.profileimg} height = "50np"></img>
                    <div>
                        <h2 class="username">${this.nameprofile}</h2>
                        <p class="sponsored-text">sponsored</p>
                    </div>
                </div>
                <img src=${this.kimimg} height = "500np"></img>

                <div class="tools">
                    <img src=${this.likeimg} height = "40np"></img>
                    <img src=${this.commentimg} height = "40np"></img>
                    <img src=${this.sendimg} height = "40np"></img>
                    <img src=${this.saveimg} height = "40np"></img>

                </div>
                <p>Milan spam get ready 🖤</p>
                <p><strong>${this.viewers} views</strong></p>
                <p><strong>Watch the ${this.comments} comments</strong></p>
            </section>
            `;
        }
    }
}
customElements.define("my-post", MyPost);
export default MyPost;
