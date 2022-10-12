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
    comments: 29658,
    viewers: 1094576
  },
];

export default data;
