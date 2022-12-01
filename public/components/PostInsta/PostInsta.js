export var Attribute;
(function (Attribute) {
    Attribute["nameprofile"] = "nameprofile";
    Attribute["likeimg"] = "likeimg";
    Attribute["profileimg"] = "profileimg";
    Attribute["postimg"] = "postimg";
    Attribute["commentimg"] = "commentimg";
    Attribute["sendimg"] = "sendimg";
    Attribute["saveimg"] = "saveimg";
    Attribute["comments"] = "comments";
    Attribute["viewers"] = "viewers";
    Attribute["comment"] = "comment";
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
            postimg: null,
            commentimg: null,
            sendimg: null,
            saveimg: null,
            comments: null,
            viewers: null,
            comment: null
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
                    <img src=${this.profileimg} height = "50np" alt="Profile image"></img>
                    <div>
                        <h2 class="username">${this.nameprofile}</h2>
                        <p class="sponsored-text">sponsored</p>
                    </div>
                </div>
                <img src=${this.postimg} class="post-image" alt="Photo by ${this.nameprofile} with text that says ${this.comment}"></img>

                <div class="tools">
                    <img src="../imagesPost/likes.png" height = "40np" alt="Like"></img>
                    <img src="../imagesPost/comment.png" height = "40np" alt="Comment icon button"></img>
                    <img src="../imagesPost/send.png" height = "40np" alt="Send icon button"></img>
                    <img src="../imagesPost/save.png" height = "40np" alt="Save icon button"></img>

                </div>
                <p>${this.comment}</p>
                <p><strong>${this.viewers} views</strong></p>
                <p>Watch the ${this.comments} comments</p>
            </section>
            `;
        }
    }
}
customElements.define("my-post", MyPost);
export default MyPost;
