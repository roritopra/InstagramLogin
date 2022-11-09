interface dataPost {
  id: number;
  nameprofile: string;
    likeimg: string;
    profileimg: string;
    kimimg: string;
    commentimg: string;
    sendimg: string;
    saveimg: string;
    comments: number;
    viewers: number;
    comment: string;
  
}

const data: dataPost[] = [
  {
    id: 1,
    nameprofile: "kimkardashian",
    likeimg: "../imagesPost/likes.png",
    profileimg: "../imagesPost/perfil.png",
    kimimg: "../imagesPost/kim.jpg",
    commentimg: "../imagesPost/comment.png",
    sendimg: "../imagesPost/send.png",
    saveimg: "../imagesPost/save.png",
    comment: "Milan spam get ready 🖤",
    comments: 961,
    viewers: 10.945
  },
];

export default data;
